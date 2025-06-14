import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MenuIcon } from '../ui/menu'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='bg-background fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[30px] px-4 border-b border-background'>
      <div className='flex items-center gap-2'>
        <Avatar className='h-6 w-6'>
          <AvatarImage src='/images/avatar.png' alt='Avatar' />
          <AvatarFallback className='text-xs'>🍒</AvatarFallback>
        </Avatar>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className=' hover:text-foreground/80 transition-colors'>
          <MenuIcon size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>
            <Link href='/' className='w-full text-xs'>
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/about' className='w-full text-xs'>
              About <span className='text-xxs text-destructive'>error</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/contact' className='w-full text-xs'>
              Contact{' '}
              <span className='text-xxs text-destructive'>not found</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
