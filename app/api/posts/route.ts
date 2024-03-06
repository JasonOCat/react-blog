import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

//GET /api
export async function GET(request: Request) {
    const posts = await prisma.post.findMany({
        where: {
            published: true
        },
        include: {
            author: true,
        },
    })
    return NextResponse.json(posts);
}