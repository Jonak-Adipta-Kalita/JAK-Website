import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cookie from "cookie";

export default async (
    req: NextApiRequest,
    res: NextApiResponse<{ success: string } | { error: string }>
) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} now allowed` });
    }

    const { username, password } = req.body;

    try {
        const apiRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/token`,
            JSON.stringify({
                username,
                password,
            }),
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        if (apiRes.status === 200) {
            res.setHeader("Set-Cookie", [
                cookie.serialize("access", apiRes.data.access, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 30,
                    sameSite: "strict",
                    path: "/api/",
                }),
                cookie.serialize("refresh", apiRes.data.refresh, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60 * 24,
                    sameSite: "strict",
                    path: "/api/",
                }),
            ]);

            return res.status(200).json({
                success: "Logged in successfully!!",
            });
        } else {
            return res.status(apiRes.status).json({
                error: "Authentication failed!!",
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Something went wrong when authenticating!!",
        });
    }
};
