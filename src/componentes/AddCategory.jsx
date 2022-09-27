import {useState} from "react";

export const AddCategory = () => {

  let [inputValue, SetInputValue] = useState("")

  function onInputChange({target}){
  SetInputValue(target.value)
  
  }

  return (
    <form onSubmit = {(event)=>{
      event.preventDefault();
      console.log(inputValue);
    }}>
       <input 
          type ="text"
          placeholder="Busca un gif"
          onChange= { onInputChange }
      />

    </form>
   
  )
}
