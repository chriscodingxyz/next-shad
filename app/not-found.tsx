'use client'

import BackButton from '@/components/buttons/BackButton'

export default function NotFound () {
  return (
    <div className='full-center'>
      <h1 className='text-7xl font-black'>404</h1>
      <p className='text-[10px]'>page not found</p>
      <BackButton fixed />
    </div>
  )
}
