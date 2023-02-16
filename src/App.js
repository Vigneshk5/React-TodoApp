import React, { useState, useEffect } from "react";

let globalID = 0;

function App() {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([]);

  function createToDo() {
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalID++ }];
    });
  }

  function tryToCheckForEnterKey(e) {
    if (e.keyCode === 13) {
      createToDo();
    }
  }

  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div className="App">
      <h1>todo list</h1>
      <input
        onKeyDown={tryToCheckForEnterKey}
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button onClick={createToDo}>Create</button>
      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
