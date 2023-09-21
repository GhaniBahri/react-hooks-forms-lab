import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items , setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [category, setCategory]= useState('Produce')
   const [itemsCopy,setItemsCopy]= useState(items)
  //  const [name, setName]=useState('')

   

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearch(text){
   setSearch(text)
  }
  function handleAddItem(obj){
    console.log('onject', obj)
    setItemsCopy([...itemsCopy, obj])
    console.log(itemsCopy)
  }
  const itemsToDisplay =itemsCopy.filter((item) => {
    if (selectedCategory === "All") return item.name.toLowerCase().includes(search.toLowerCase());

    else{
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={handleAddItem}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
