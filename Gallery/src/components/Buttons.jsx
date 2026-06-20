import React from 'react'

const Buttons = ({ index, setIndex }) => {

  const handlePrev = () => {
    if (index > 1) {
      setIndex(index - 1)
    }
  }

  const handleNext = () => {
    setIndex(index + 1)
  }


  return (
    <div className='text-white flex gap-4 justify-center items-center'>

      <button
        onClick={handlePrev}
        disabled={index === 1}
        className={`bg-amber-500 text-black py-2 px-4 rounded font-semibold active:scale-95
          ${index === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
      >
        Prev
      </button>

      <button
        onClick={handleNext}
        className='bg-amber-500 text-black py-2 px-4  rounded cursor-pointer font-semibold active:scale-95'>
        Next
      </button>

    </div>
  )
}

export default Buttons
