import axios from "axios";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../typings";

export default async (
    req: NextApiRequest,
    res: NextApiResponse<{ user: User } | { error: string }>
) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`,
        });
    }

    const cookies = cookie.parse(req.headers.cookie ?? "");
    const access = cookies.access ?? false;

    if (!access) {
        return res.status(401).json({
            error: "User unauthorized to make this request",
        });
    }

    try {
        const apiRes = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/user`,
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access}`,
                },
            }
        );

        const data = await apiRes.data;

        if (apiRes.status === 200) {
            return res.status(200).json({
                user: data.user,
            });
        } else {
            return res.status(apiRes.status).json({
                error: data.error,
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Something went wrong when retrieving user!!",
        });
    }
};
