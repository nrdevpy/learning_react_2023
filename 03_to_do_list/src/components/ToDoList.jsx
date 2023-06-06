import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      description: 'description 1'
    },
    {
      id: 2,
      description: 'description 2'
    },
    {
      id: 3,
      description: 'description 3'
    },
  ]);

  const addToList = (e) => {
    e.preventDefault();
    const newList = [
      ...list,
      {
        id: Math.random(),
        description: toDo,
      },
    ];
    setList(newList);
    setToDo("");
  };

  const onChangeHandler = input => {
    setToDo(input.target.value);
  };

  const onRemoveTaskHandler = id => {
    const newList = list.filter(element => {
        return element.id !== id
    })
    setList(newList)
  }
  
  return (
    <>
      <main>
        <div className="toDoList">
            <h1>To Do List</h1>
            <form onSubmit={addToList}>
              <input type="text" onChange={onChangeHandler} value={toDo} />
              <button type="submit">Add</button>
            </form>
            <h2>Tasks to do:</h2>
            <ul>
              {list.map(toDo => {
                return <li key={toDo.id}>
                    <p>{toDo.description}</p>
                    <div className="removeTask" onClick={() => onRemoveTaskHandler(toDo.id)}></div>
                </li>;
              })}
            </ul>
        </div>
      </main>
    </>
  );
};
export default ToDoList;
