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
    <div>
      <div
        className="
        h-100
        w-full
        flex
        items-center
        justify-center
        bg-teal-lightest
        font-sans"
      >
        <h1 className="flex-no-shrink p-2 border-2 rounded  text-indigo-500 background-transparent font-bold uppercase ">
          todolist
        </h1>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          onKeyDown={tryToCheckForEnterKey}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button
          className="flex-no-shrink p-2 border-2 rounded text-teal-500 background-transparent font-bold uppercase "
          onClick={createToDo}
        >
          Create
        </button>
      </div>
      <ul>
        {todos.map((item, index) => {
          return (
            <div
              className="
        h-100
        w-full
        flex
        items-center
        justify-center
        bg-teal-lightest
        font-sans"
            >
              <div key={item.id}>
                <ls className="shadow appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker">
                  {item.todo}
                </ls>
                <button
                  className="flex-no-shrink p-2 border-2 rounded text-red-500 background-transparent font-bold uppercase "
                  onClick={() => deleteItem(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
