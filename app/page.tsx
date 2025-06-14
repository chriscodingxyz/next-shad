import Image from 'next/image'

export default function Home () {
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
    </div>
  )
}
