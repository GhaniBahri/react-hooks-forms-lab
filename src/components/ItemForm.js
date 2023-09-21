import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit}) {
  const[category,setCategory]=useState('Produce')
  const [name, setName]= useState('')

  function handleNamechange(e){
    setName(e.target.value)
  }
  function handleCategory(e){
    setCategory(e.target.value)
  }
  
  function addItem(e){
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem)
    
    setName('')
    setCategory('Produce')
  }
   
  return (
    <form className="NewItem" onSubmit={addItem}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNamechange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
