import cookie from "cookie";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
    const cookies = cookie.parse(req.headers.cookie ?? "");
    const refresh = cookies.refresh ?? false;

    if (!refresh) {
        return res.status(401).json({
            error: "User unauthorized to make this request!!",
        });
    }

    try {
        const apiRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/token/refresh`,
            JSON.stringify({
                refresh,
            }),
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await apiRes.data;

        if (apiRes.status === 200) {
            res.setHeader("Set-Cookie", [
                cookie.serialize("access", data.access, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 30,
                    sameSite: "strict",
                    path: "/api/",
                }),
                cookie.serialize("refresh", data.refresh, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60 * 24,
                    sameSite: "strict",
                    path: "/api/",
                }),
            ]);

            return res.status(200).json({
                success: "Refresh request successful!!",
            });
        } else {
            return res.status(apiRes.status).json({
                error: "Failed to fulfill refresh request!!",
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Something went wrong when trying to fulfill refresh request!!",
        });
    }
};
