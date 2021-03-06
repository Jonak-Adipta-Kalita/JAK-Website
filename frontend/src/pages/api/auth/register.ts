import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} now allowed` });
    }

    const { firstName, lastName, username, email, password } = req.body;

    try {
        const apiRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
            JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username,
                email,
                password,
            }),
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        if (apiRes.status === 201) {
            const token_res = await axios.post(
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

            if (token_res.status === 200) {
                res.setHeader("Set-Cookie", [
                    cookie.serialize("access", token_res.data.access, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 30,
                        sameSite: "strict",
                        path: "/api/",
                    }),
                    cookie.serialize("refresh", token_res.data.refresh, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 60 * 24,
                        sameSite: "strict",
                        path: "/api/",
                    }),
                ]);

                return res.status(201).json({
                    success: "Created account Successfully!!",
                });
            } else {
                return res.status(token_res.status).json({
                    error: "Authentication failed!!",
                });
            }
        } else {
            return res.status(apiRes.status).json({
                error: apiRes.data.error,
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Something went wrong when registering for an account!!",
        });
    }
};
