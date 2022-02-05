import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = async (req) => {
    const { pathname } = req.nextUrl;
    const authenticated = true;

    if (authenticated) return NextResponse.next();
    if (pathname.includes("/notifications") && !authenticated)
        return NextResponse.redirect("/page-not-found");
};
