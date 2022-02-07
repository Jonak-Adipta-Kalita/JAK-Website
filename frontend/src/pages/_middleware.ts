import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = async (req) => {
    const { pathname } = req.nextUrl;
    const isAuthenticated = false;

    if (isAuthenticated) return NextResponse.next();
    if (pathname.includes("/notifications") && !isAuthenticated)
        return NextResponse.redirect("/page-not-found");
};
