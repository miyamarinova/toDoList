import React, { useState } from "react";

function App() {

const today = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getYear();

const [inputText, setInputText] = useState("");
const [tasks, setNewTasks] = useState([]);

function handleInputChange(event) {
  const newValue = event.target.value;
  setInputText(newValue)
}

function handleSubmit(){
  setNewTasks([...tasks, inputText]);
  setInputText("");

}



  return (
    <div className="container">
      <h2>{today}/{month}/{year}</h2>
      <div className="heading">
        
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} type="text" name="item" value={inputText}/>
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {tasks.map((toDoTask)=>{
          return <li>{toDoTask}</li>
         })}      
        </ul>
      </div>
    </div>
  );
}

export default App;
