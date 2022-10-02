
import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs";
 

export const GifGrid = ({ category })=>{

  const [images, setimages] = useState([])

  useEffect(()=>{
    getGifs(category);
  })


  getGifs(category);




  return (

    <>
        <h3> { category} </h3>   
    </>
  )


}