import React from 'react'
import { useEffectImag } from '../hooks/useEffectImag';
import { GridImg } from './GridImg';

const GetImags = ({imgs}) => {
  const img = useEffectImag(imgs);

  

  return (
    <>
      {/* <div>{img.Title}</div> */}
      <GridImg key={img.Title} title ={img.Title} url = {img.Poster} description= {img.Plot} />
    </>
  )
}

export default GetImags;
