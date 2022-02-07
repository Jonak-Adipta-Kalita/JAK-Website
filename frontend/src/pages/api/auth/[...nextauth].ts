import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    return await NextAuth(req, res, {
        providers: [],
        secret: process.env.JWT_SECRET,
    });
};
