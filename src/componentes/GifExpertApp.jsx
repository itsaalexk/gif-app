import {useState} from "react";
import { AddCategory } from "./AddCategory";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch","Naruto"]);

    const onAddCategory =()=>{
        setCategories([...categories, "heroes"]);
    }

  return (
    <>
    <h1>GifApp</h1>
    <AddCategory />
    <button onClick={onAddCategory}>Agregar</button>
    
    <ol>
        {categories.map(elem=>{
            return <li key ={ elem }>{ elem }</li>
        })}
        
        
    </ol>
    </>
  )
}
