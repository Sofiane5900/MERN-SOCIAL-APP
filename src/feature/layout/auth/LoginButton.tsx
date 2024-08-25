"use client"
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import React from 'react'
import { signIn } from 'next-auth/react'

export const LoginButton = () => {
  const [isPending, startTransition] = React.useTransition();
  return (
    <Button onClick={() => {
      startTransition(() => signIn())

    }
    }>
      <LogIn size={20} className='mr-2 h-4 w-4'/>
      Login
    </Button>
  )
}
