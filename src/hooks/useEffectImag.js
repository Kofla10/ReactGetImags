import {useState, useEffect} from 'react'
import { GetImg } from '../helpers/GetImg';


export const useEffectImag = (imgs) => {
    
    //creamos el useState, para actualizar los valores
    const [getNewImag, setgetNewImag] = useState([]);

    //obtenemos la información de las imagenes
    const getPost = async ()=>{
        const newImag = await GetImg({imgs});
        setgetNewImag(newImag)
    }

    useEffect(()=>{
        //guardamos el estado
        getPost();
    },[])

   console.log(getNewImag)
 
  return getNewImag;
}
