'use client'

import BackButton from '@/components/buttons/BackButton'
import Image from 'next/image'
import psyduckImg from '@/public/images/psyduck.png'

export default function NotFound () {
  return (
    <div className='full-center space-y-4'>
      <h1 className='text-7xl font-black'>404</h1>
      <Image
        src={psyduckImg}
        height={200}
        width={200}
        alt='This is fine'
        className='self-center dark:invert'
      />
      <p className='text-sm text-muted-foreground'>page not found</p>
      <BackButton fixed />
    </div>
  )
}
