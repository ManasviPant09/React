import React, { useState } from "react";
import './App.css';
import List from "./List";

const App=()=>{
  const [input,setInput] = useState("");
  const [item,setItem] = useState([]);
  const addItem=(event)=>{
    setInput(event.target.value);
  }
  const displayItem=()=>{
    setItem((previousItems)=>{
      return [...previousItems,input];
      });
    };
  const deleteItem=(id)=>{
      console.log("Clicked");
      setItem((previousItems)=>{
        return previousItems.filter((arrayElem,index)=>{
          return index!== id;
        });
      });
  };
  return(
    <>
    <div className="main_div">
      <div className="secondary_div">
        <h1>ToDo List<br></br></h1>
        <input type="text" placeholder='Add an item' onChange={addItem}/>
        <button onClick={displayItem}>+</button>
        <ol>
          {item.map((itemval,index)=>{
            return <List key={index} text={itemval}
            id = {index}
            onSelect={deleteItem}
            />;
          })}
        </ol>
      </div>
    </div>
    </>
  );
}
export default App;
