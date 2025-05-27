export default function Home () {
  return (
    <div className='min-h-screen bg-white text-black'>
      {/* Navbar */}
      <nav className='max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center bg-gray-100 rounded-full px-6 py-2'>
          <div className='flex items-center'>
            {/* Placeholder for Mobbin Logo */}
            <span className='font-bold text-lg mr-4'>Tagg.pet</span>
          </div>
          <div className='flex items-center space-x-4'>
            <a href='#' className='text-sm font-medium hover:text-gray-700'>
              Pricing
            </a>
            <a
              href='#'
              className='text-sm font-medium bg-white px-4 py-1 rounded-full hover:bg-gray-200'
            >
              Log in
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className='max-w-4xl mx-auto text-center py-20 sm:py-32 px-4 sm:px-6 lg:px-8'>
        {/* Placeholder for Uber Logo */}
        <div className='inline-block bg-black text-white p-3 rounded-lg mb-8 shadow-md'>
          <span className='font-bold text-xl'>Uber</span>
        </div>
        <h1 className='text-4xl sm:text-6xl font-bold tracking-tight mb-6'>
          Discover real-world
          <br />
          design inspiration.
        </h1>
        <p className='text-lg text-gray-600 mb-10'>
          Featuring over 400,000 screens and 1,000 iOS, Android & Web apps —
          <br />
          New content weekly.
        </p>
        <div className='flex justify-center gap-4 mb-16'>
          <button className='bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'>
            Join for free
          </button>
          <button className='bg-gray-100 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2'>
            See our plans
            {/* Placeholder for arrow icon */}
            <span aria-hidden='true'>→</span>
          </button>
        </div>

        {/* Trusted By Section */}
        <div className='text-center'>
          <p className='text-sm text-gray-500 mb-6'>
            Trusted by design teams at
          </p>
          <div className='flex flex-wrap justify-center items-center gap-8 sm:gap-12'>
            {/* Placeholders for Company Logos */}
            <span className='font-semibold text-gray-500'>Uber</span>
            <span className='font-semibold text-gray-500'>headspace</span>
            <span className='font-semibold text-gray-500'>Meta</span>
            <span className='font-semibold text-gray-500'>airbnb</span>
            <span className='font-semibold text-gray-500'>Revolut</span>
            <span className='font-semibold text-gray-500'>Metalab</span>
            <span className='font-semibold text-gray-500'>Pinterest</span>
          </div>
        </div>
      </main>

      {/* Footer (Optional - Not clearly defined in the landing page part of the image) */}
      {/* <footer className="text-center py-8 text-gray-500 text-sm">
        Optional Footer Content
      </footer> */}
    </div>
  )
}
