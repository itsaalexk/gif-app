import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

  let [inputValue, SetInputValue] = useState("");
 

  function onInputChange({target}){
  SetInputValue(target.value)
  
  }

  return (
    <form onSubmit = {(event)=>{

      event.preventDefault();
      
      if (inputValue.trim().length <= 1) return

      //setCategories((categories) => [inputValue , ...categories]);
      onNewCategory( inputValue.trim())
    }}>
       <input 
          type ="text"
          placeholder="Busca un gif"
          onChange= { onInputChange }
      />

    </form>
   
  )
}


