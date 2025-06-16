import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-8 my-32'>
      <div>
        <h1 className='md:text-4xl text-2xl font-semibold text-primary/80'>Never Miss a Blog!!</h1>
        <p className='md:text-lg text-gray-500/70'>Visit daily to get the latest blog, new tech and exclusive news.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10 text-center'>

        <div>
          <lord-icon src="https://cdn.lordicon.com/ifyskbjd.json" trigger="hover" style={{ width: "50px", height: "50px" }} colors="primary:#8930e8,secondary:#2516c7"></lord-icon>
          <h3 className='font-semibold mt-2'>Simple</h3>
          <p className='text-sm text-gray-500'>Anyone can use</p>
        </div>

        <div>
          <lord-icon src="https://cdn.lordicon.com/zcpmxjfa.json" trigger="hover" style={{ width: "50px", height: "50px" }} colors="primary:#8930e8,secondary:#2516c7"></lord-icon>
          <h3 className='font-semibold mt-2'>AI Featured</h3>
          <p className='text-sm text-gray-500'>Use AI to write blogs</p>
        </div>

        <div>
          <lord-icon src="https://cdn.lordicon.com/jgeruqwm.json" trigger="hover" style={{ width: "50px", height: "50px" }} colors="primary:#8930e8,secondary:#2516c7"></lord-icon>
          <h3 className='font-semibold mt-2'>Informative</h3>
          <p className='text-sm text-gray-500'>Get Information of every domain</p>
        </div>

        <div>
          <lord-icon src="https://cdn.lordicon.com/aksvbzmu.json" trigger="hover" style={{ width: "50px", height: "50px" }} colors="primary:#8930e8,secondary:#2516c7"></lord-icon>
          <h3 className='font-semibold mt-2'>Share</h3>
          <p className='text-sm text-gray-500'>Share your Ideas with others</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
