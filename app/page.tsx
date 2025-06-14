'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function Home () {
  const [copied, setCopied] = useState(false)
  const cloneCommand = 'git clone https://github.com/chriscodingxyz/next-shad.git'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleStar = () => {
    window.open('https://github.com/chriscodingxyz/next-shad', '_blank')
  }

  return (
    <div className='min-h-main flex-center-col space-y-6 font-jetbrains-mono'>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl font-bold'>Next.js + shadcn/ui</h1>
        <p className='text-muted-foreground'>Ready to go template</p>
      </div>

      <Image
        src='/images/pepesky.jpeg'
        height={200}
        width={200}
        alt='Next.js shadcn template'
        className='self-center'
      />

      <div className='flex flex-col items-center space-y-4 mt-8'>
        <Button 
          onClick={handleStar}
          variant='outline'
          size='sm'
          className='flex items-center gap-2'
        >
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
          Star on GitHub
        </Button>

        <div className='flex flex-col items-center space-y-2'>
          <span className='text-xs text-muted-foreground'>Clone this repo:</span>
          <div 
            onClick={handleCopy}
            className='bg-muted/50 border rounded-md px-3 py-2 font-mono text-xs cursor-pointer hover:bg-muted/70 transition-colors flex items-center gap-2 select-none'
          >
            <span>{cloneCommand}</span>
            {copied ? (
              <Check className='w-3 h-3 text-green-600 dark:text-green-400' />
            ) : (
              <Copy className='w-3 h-3 text-muted-foreground' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
