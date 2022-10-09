import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} now allowed` });
    }

    const { email } = req.body;

    const apiRes = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/is_email_verified`,
        JSON.stringify({
            email,
        }),
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );

    return res.status(apiRes.status).json(apiRes.data);
};
