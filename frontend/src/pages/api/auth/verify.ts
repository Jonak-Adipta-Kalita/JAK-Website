import cookie from "cookie";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} now allowed` });
    }

    const cookies = cookie.parse(req.headers.cookie ?? "");
    const access = cookies.access ?? false;

    if (!access) {
        return res.status(403).json({
            error: "User forbidden from making the request",
        });
    }

    try {
        const apiRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/token/verify`,
            JSON.stringify({
                token: access,
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
                .json({ success: "Authenticated successfully!!" });
        } else {
            return res.status(apiRes.status).json({
                error: "Failed to authenticate!!",
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: "Something went wrong when trying to authenticate!!",
        });
    }
};
