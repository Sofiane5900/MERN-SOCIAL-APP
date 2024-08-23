"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { SunMedium, Moon } from 'lucide-react'

const ThemeToggle = () => {
    const {setTheme, theme } = useTheme()
  return (
    <Button variant="ghost" 
    size="sm"
     onClick={() => {
       setTheme(theme === 'dark' ? 'light' : 'dark')
       console.log(theme)
     }}>
    <SunMedium size={20} className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
    <Moon size={20} className='rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
    <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}

export default ThemeToggle