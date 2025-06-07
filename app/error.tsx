'use client'

import BackButton from '@/components/buttons/BackButton'
import logger from '@/utils/logger'

export default function Error ({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  logger.error(error)

  return (
    <div className='full-center'>
      <h1 className='text-7xl font-black'>Error</h1>
      <p className='text-[10px]'>something went wrong</p>
      <BackButton fixed />
    </div>
  )
}
