'use client'

import BackButton from '@/components/buttons/BackButton'
import Image from 'next/image'

export default function NotFound () {
  return (
    <div className='full-center'>
      <h1 className='text-7xl font-black'>404</h1>
      <Image
        src='/images/psyduck.png'
        height={200}
        width={200}
        alt='This is fine'
        className='self-center dark:invert'
      />
      <p className='text-[10px]'>page not found</p>
      <BackButton fixed />
    </div>
  )
}
