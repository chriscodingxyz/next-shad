import type { Metadata } from 'next'
import { Geist, Geist_Mono, Silkscreen, Inter, JetBrains_Mono, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from 'next-themes'
import ViewportIndicator from '@/components/ViewportIndicator'
import SonnerWrapper from '@/components/SonnerWrapper'
import NavProgress from '@/components/NavProgress'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Next-Shad',
  description: 'Minimal Simple Template to get started'
}

const silkScreen = Silkscreen({
  variable: '--font-silkscreen',
  weight: ['400', '700'],
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin']
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkScreen.variable} ${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} ${spaceGrotesk.variable} font-space-grotesk flex flex-col min-h-[100dvh] antialiased text-xs`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SonnerWrapper>
            <NavProgress>
              <Header />
              <main className='flex-1 pt-[30px]'>{children}</main>
              <Footer />
              {process.env.NODE_ENV === 'development' && <ViewportIndicator />}
            </NavProgress>
          </SonnerWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
