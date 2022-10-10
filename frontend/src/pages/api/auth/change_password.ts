import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import axios from "axios";

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

    const { username, email, currentPassword, newPassword } = req.body;

    const cookies = cookie.parse(req.headers.cookie ?? "");
    const access = cookies.access ?? false;

    if (!access) {
        return res.status(403).json({
            error: "User forbidden from making the request",
        });
    }
    try {
        const apiRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/change_password`,
            JSON.stringify({
                username,
                email,
                currentPassword,
                newPassword,
            }),
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        if (apiRes.status === 200) {
            return res
                .status(200)
                .json({ success: "Changed password successfully!!" });
        } else {
            return res.status(apiRes.status).json({
                error: "Failed to change password!!",
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: "Something went wrong when trying to change password!!",
        });
    }
};
