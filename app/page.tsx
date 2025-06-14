'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import logger from '@/utils/logger'
import pepeImg from '@/public/images/pepesky.jpeg'

export default function Home () {
  const [copied, setCopied] = useState(false)
  const cloneCommand =
    'git clone https://github.com/chriscodingxyz/next-shad.git'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      logger.error('Failed to copy:', error)
    }
  }

  const handleStar = () => {
    window.open('https://github.com/chriscodingxyz/next-shad', '_blank')
  }

  return (
    <div className='min-h-main flex-center-col space-y-8 font-jetbrains-mono'>
      <div className='flex flex-col items-center space-y-4'>
        <Image
          src={pepeImg}
          alt='Next.js shadcn template'
          className='self-center'
          width={200}
          height={200}
        />
        <p className='text-muted-foreground'>Ready to go template</p>

        <div className='flex items-center gap-3'>
          {/* Next.js Badge */}
          <div className='flex items-center gap-1.5 bg-muted/50 border rounded-full px-2.5 py-1.5 h-6'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 180 180'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-foreground'
            >
              <circle
                cx='90'
                cy='90'
                r='87'
                fill='currentColor'
                stroke='none'
              />
              <path
                d='M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z'
                fill='url(#paint0_linear_next)'
                className='fill-background'
              />
              <rect
                x='115'
                y='54'
                width='12'
                height='72'
                fill='url(#paint1_linear_next)'
                className='fill-background'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_next'
                  x1='109'
                  y1='116.5'
                  x2='144.5'
                  y2='160.5'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop className='[stop-color:theme(colors.background)]' />
                  <stop
                    offset='1'
                    className='[stop-color:theme(colors.background)]'
                    stopOpacity='0'
                  />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_next'
                  x1='121'
                  y1='54'
                  x2='120.799'
                  y2='106.875'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop className='[stop-color:theme(colors.background)]' />
                  <stop
                    offset='1'
                    className='[stop-color:theme(colors.background)]'
                    stopOpacity='0'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Tailwind CSS Badge */}
          <div className='flex items-center gap-1.5 bg-muted/50 border rounded-full px-2.5 py-1.5 h-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 54 33'
              width='16'
              height='10'
            >
              <g clipPath='url(#a)'>
                <path
                  fill='#38bdf8'
                  fillRule='evenodd'
                  d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
                  clipRule='evenodd'
                />
              </g>
              <defs>
                <clipPath id='a'>
                  <path fill='#fff' d='M0 0h54v32.4H0z' />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* shadcn/ui Badge */}
          <div className='flex items-center gap-1.5 bg-muted/50 border rounded-full px-2.5 py-1.5 h-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              width='16'
              height='16'
            >
              <path fill='none' d='M0 0h256v256H0z' />
              <path
                fill='none'
                stroke='currentColor'
                strokeWidth='25'
                strokeLinecap='round'
                d='M208 128l-80 80M192 40L40 192'
              />
            </svg>
          </div>
        </div>
      </div>

      <div className='text-center text-xs text-muted-foreground text-balance max-w-lg'>
        A clean Next.js starter with shadcn/ui components and dark/light mode
        pre-configured
      </div>

      <div className='flex flex-col items-center space-y-6'>
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
          <span className='text-xs text-muted-foreground'>
            Clone this repo:
          </span>
          <div
            onClick={handleCopy}
            className='bg-muted/50 border rounded-md px-3 py-2 font-mono text-xs cursor-pointer hover:bg-muted/70 transition-colors flex items-center gap-2 select-none'
          >
            <span>git clone ...</span>
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
