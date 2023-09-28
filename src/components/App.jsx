import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   const [newItem, setNewItem] = useState("");
   const [items, setItems] = useState([]);

   function addItem() {
      const item = {
         id: Math.floor(Math.random() * 1000),
         value: newItem,
      };
      setItems((oldList) => [...oldList, item]);
      setNewItem("");
   }

   function deleteItem(id) {
      const newArray = items.filter((item) => item.id !== id);
      setItems(newArray);
   }

   return (
      <div className="App">
         <h1>My tasks</h1>
         <div>
            <ButtonGroup aria-label="Basic example">
               <Button variant="secondary" size="sm">
                  All
               </Button>
               <Button variant="secondary" size="sm">
                  Active
               </Button>
               <Button variant="secondary" size="sm">
                  Completed
               </Button>
            </ButtonGroup>
         </div>
         <input
            type="text"
            placeholder="Add task..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
         />
         <button onClick={() => addItem()}>Add</button>
         <ul>
            {items.map((item) => {
               return (
                  <li key={item.id}>
                     {item.value}
                     <button onClick={() => deleteItem(item.id)}>X</button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default App;
