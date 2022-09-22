import {useState} from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch","Naruto"]);

  return (
    <>
    <h1>Hola</h1>
    <ol>
        {categories.map(elem=>{
            return <li key ={ elem }>{ elem }</li>
        })}
       
    </ol>
    </>
  )
}
