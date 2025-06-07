'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function BackButton ({
  className,
  fixed = false
}: {
  className?: string
  fixed?: boolean
}) {
  const router = useRouter()

  return (
    <Button
      className={cn(fixed ? 'fixed top-9 left-2 z-50' : '', className)}
      title='Go Back'
      variant='outline'
      onClick={() => router.back()}
    >
      <ArrowLeft className='size-3' />
    </Button>
  )
}
