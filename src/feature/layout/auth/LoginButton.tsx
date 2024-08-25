"use client"
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import React from 'react'
import { signIn } from 'next-auth/react'
import { Loader } from '@/components/ui/loader'

export const LoginButton = () => {
  const [isPending, startTransition] = React.useTransition();
  return (
    <Button onClick={() => {
      startTransition(() => signIn())

    }
    }>
       {isPending ? (
      <Loader size={20} className='mr-2 h-4 w-4'/>
       ): (
        <LogIn size={20} className='mr-2 h-4 w-4'/>
       )}
      Login
    </Button>
  )
}
