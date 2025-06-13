import Image from 'next/image'

export default function Home () {
  return (
    <div className={`min-h-main flex-center-col`}>
      {/* <Image
        src='/images/cryptoadz.gif'
        height={100}
        width={100}
        alt='Cryptoadz'
        className='self-center'
      /> */}
      <Image
        src='/images/pepesky.jpeg'
        // src='/images/bw-fine.png'
        // src='/images/pepesky.jpeg'
        height={200}
        width={200}
        alt='This is fine'
        className='self-center'
        // className='self-center dark:invert'
      />
    </div>
  )
}
