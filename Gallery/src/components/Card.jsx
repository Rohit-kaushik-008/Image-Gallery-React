import React from 'react'
import Buttons from './Buttons'

const Card = (props) => {
  return (
    <div className='text-white bg-mist-900 h-auto pb-3 overflow-x-hidden'>

      <div
        className='border h-12/14 max-h-12/14 px-4 py-7 flex justify-center items-center flex-wrap gap-7 overflow-auto'>



        {props.loading ?  (
          <h1 className="text-white text-center">Loading...</h1>
        )
        :
        (props.data ?? []).map(function (elem, idx) {
          return <div key={elem.id}
                    className='flex flex-col items-center gap-2'>
            <img
              className='h-35 rounded border-2 w-fit'
              src={elem.download_url}
              alt="img" />
              <h2
                className='text-xl'>
                {elem.author}
              </h2>

          </div>
        })}

      </div>

      <div
        className='my-5'>
        <Buttons index={props.index} setIndex={props.setIndex} />
      </div>


    </div>
  )
}

export default Card
