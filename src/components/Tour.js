import React, { useState } from 'react'

const Tour = ({name, info='', image, price, onDelete}) => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='single-tour'>
        <p>{name}</p>
        <p className="tour-info">
            {showMore?info:info.slice(0,200)}
            <span style={{color: 'blue', fontWeight:'bold', cursor:'pointer'}} onClick={()=>setShowMore(!showMore)}>
                {showMore?'See less':'Show more'}
            </span>
        </p>
        <img src={image} alt="" className="" />
        <p className="tour-price">{price}</p>
        <button className="delete-btn btn" onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Tour