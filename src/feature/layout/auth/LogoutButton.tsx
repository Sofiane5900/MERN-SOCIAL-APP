"use client"
import { Button } from '@/components/ui/button'
import { LogIn, LogOut } from 'lucide-react'
import React from 'react'
import {signOut } from 'next-auth/react'
import { Loader } from '@/components/ui/loader'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export const LogoutButton = () => {
  const [isPending, startTransition] = React.useTransition();
  return (
    
    <DropdownMenuItem onClick={() => {
      startTransition(() => signOut())
    }
    }>
       {isPending ? (
      <Loader size={20} className='mr-2 h-4 w-4'/>
       ): (
        <LogOut size={20} className='mr-2 h-4 w-4'/>
       )}
      Logout
    </DropdownMenuItem>
  )
}
