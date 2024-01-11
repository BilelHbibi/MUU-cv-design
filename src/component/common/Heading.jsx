import React from 'react'

const Heading = ({title}) => {
  return (
    <>
      <div className="sideHeading">
        <h1>
            <i className='fas fa-minus'></i>
            {title}
        </h1>
      </div>
    </>
  )
}

export default Heading