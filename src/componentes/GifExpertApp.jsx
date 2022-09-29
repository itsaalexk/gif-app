import {useState} from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch","Naruto"]);

    const onAddCategory =(newCategory)=>{

      if (categories.includes(newCategory)) return;
      console.log(newCategory);
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
    <h1>GifApp</h1>
    <AddCategory 
    
    onNewCategory= {(event)=> onAddCategory(event)}
    currentCategories = {categories}
    />

    <button onClick={onAddCategory}>Agregar</button>
    
   
        {categories.map((elem)=>
             (
            < GifGrid key={elem} category={elem}/>
            )
        )}
        
        
    
    </>
  )
}
