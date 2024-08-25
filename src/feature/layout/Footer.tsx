import { buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import {Ghost, Home, PenSquare, User, UserRoundSearch} from 'lucide-react'
import Link from 'next/link'
import React, { Profiler } from 'react'

const Footer = () => {
  return (
    <div className='py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-accent'>
        <Link href="/" className={clsx(buttonVariants({variant: 'ghost'}), "flex-1")}> 
        <Home size={16}/>
        </Link>

        <Link href="/post" className={clsx(buttonVariants({variant: 'ghost'}), "flex-1")}> 
        <PenSquare size={16}/>
        </Link>

        <Link href="/profile" className={clsx(buttonVariants({variant: 'ghost'}), "flex-1")}> 
        <User size={16}/>
        </Link>

    </div>
  )
}

export default Footer