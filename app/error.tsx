'use client'

import BackButton from '@/components/buttons/BackButton'
import logger from '@/utils/logger'
import Image from 'next/image'
import bwFineImg from '@/public/images/bw-fine.png'

export default function Error ({ error }: { error: Error }) {
  logger.error(error)

  return (
    <div className='full-center space-y-4'>
      <h1 className='text-7xl font-black'>Error</h1>

      <Image
        src={bwFineImg}
        height={200}
        width={200}
        alt='This is fine'
        className='self-center dark:invert'
      />
      <p className='text-sm text-muted-foreground'>something went wrong</p>
      <BackButton fixed />
    </div>
  )
}
