import prisma from "@/lib/prisma";
import React from "react";
import Post from "@/components/Post";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: {
      published: true
    },
    include: {
      author: true,
    },
  })

  return (
      <main>
        <h1>Last Post</h1>
        {posts.map(post => (
            <Post key={post.id} post={post}/>
        ))}
      </main>
  )
}
