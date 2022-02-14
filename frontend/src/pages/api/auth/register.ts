import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

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
            return res.status(201).json({ success: apiRes.data.success });
        } else {
            return res.status(apiRes.status).json({
                error: apiRes.data.error,
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Something went wrong when registering for an account",
        });
    }
};
