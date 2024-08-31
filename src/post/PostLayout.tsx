import React, { PropsWithChildren } from 'react'
import { PostHome } from '../query/post.query';
import clsx from 'clsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


type PostLayoutProps = PropsWithChildren <{ 
  user: PostHome["user"],
  createdAt?: Date,
  className?: string,
  postId?: string,
}>;

export const PostLayout = ({className,user,createdAt,postId}: PostLayoutProps) => {

  return (
    <div className={clsx("flex- w-full flex-row items-start p-4",className)}>
      <Avatar>
        {user.image ? <AvatarImage src={user.image} alt={user.username} /> : null}
        <AvatarFallback>{user.username.slice(0,2).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  )
}
