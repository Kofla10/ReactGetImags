import React from 'react'

export const GridImg = ({title, url, description}) => {
    console.log(title + url)
  return (
    <div className = 'card-grid '>
    <img className='img' src = {url}/>
    <div >
        <h5 >{title} </h5>
        <p >{description}</p>
        
    </div>
</div>
  )
}
