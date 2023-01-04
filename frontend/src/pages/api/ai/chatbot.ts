import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} now allowed` });
    }

    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { message } = req.body;

    const alexisReply = await axios.post<{ response: string }>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ai/chatbot`,
        JSON.stringify({
            message,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    res.status(alexisReply.status).json(alexisReply.data);
};
