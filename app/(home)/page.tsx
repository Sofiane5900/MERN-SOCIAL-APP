import React from 'react'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma';
import { getLatestPosts } from '@/src/query/post.query';
import {Post} from '@/src/post/Post';


export default async function Home() {
  const session = await getAuthSession();
  const last10Posts = await getLatestPosts(session?.user.id);

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="divide-y divide-accent">
      {last10Posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}