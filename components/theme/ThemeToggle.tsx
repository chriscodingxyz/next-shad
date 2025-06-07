'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon } from '@/components/ui/moon'
import { SunIcon } from '@/components/ui/sun'
import { MonitorCheckIcon } from '@/components/ui/monitor-check'

export function ThemeToggle () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='flex items-center border border-border'>
      <button
        className={`p-1 transition-colors ${
          theme === 'system' || !theme ? 'bg-secondary' : 'hover:bg-accent'
        }`}
        onClick={() => setTheme('system')}
        title='System theme'
      >
        <MonitorCheckIcon size={12} />
      </button>

      <button
        className={`p-1 transition-colors ${
          theme === 'light' ? 'bg-secondary' : 'hover:bg-accent'
        }`}
        onClick={() => setTheme('light')}
        title='Light theme'
      >
        <SunIcon size={12} />
      </button>

      <button
        className={`p-1 transition-colors ${
          theme === 'dark' ? 'bg-secondary' : 'hover:bg-accent'
        }`}
        onClick={() => setTheme('dark')}
        title='Dark theme'
      >
        <MoonIcon size={12} />
      </button>

      <span className='sr-only'>Theme toggle - System, Light, Dark</span>
    </div>
  )
}
