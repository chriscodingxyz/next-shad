import React from 'react'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Badge } from '@/components/ui/badge'

export default function Footer () {
  return (
    <footer className='bg-background flex justify-between items-center h-[30px] px-4 border-t border-border'>
      <div className='flex items-center gap-3'>
        <Badge variant='secondary' className='text-xs'>
          v0.1.0
        </Badge>
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 text-[10px] text-muted-foreground'>
        © 2025 Next-Shad
      </div>

      <ThemeToggle />
    </footer>
  )
}
