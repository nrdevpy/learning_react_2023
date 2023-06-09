import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      description: "Description 1",
    },
    {
      id: 2,
      description: "Description 2",
    },
    {
      id: 3,
      description: "Description 3",
    },
  ]);

  const addToList = (e) => {
    e.preventDefault();
    if (toDo !== "") {
      const newList = [
        ...list,
        {
          id: Math.random(),
          description: toDo,
        },
      ];
      setList(newList);
      setToDo("");
    }
  };

  const onChangeHandler = (input) => {
    setToDo(input.target.value);
  };

  const onRemoveTaskHandler = (id) => {
    const newList = list.filter((element) => {
      return element.id !== id;
    });
    setList(newList);
  };

  return (
    <>
      <main>
        <div className="toDoList">
          <h1>To Do List</h1>
          <form onSubmit={addToList}>
            <input
              type="text"
              onChange={onChangeHandler}
              value={toDo}
              placeholder="Enter a task..."
            />
            <button type="submit">Add</button>
          </form>
          <h2>Tasks to do:</h2>
          <ul>
            {list.map((toDo) => {
              return (
                <li
                  key={toDo.id}
                  className="flex justify-between items-end my-2 mx-4"
                >
                  <p className="max-w-[75%]">{toDo.description}</p>
                  <img
                    className="max-w-[1rem] transition-all ease-in-out hover:scale-150 hover:opacity-100 cursor-pointer opacity-50"
                    src="../../resources/xmark-solid.svg"
                    onClick={() => onRemoveTaskHandler(toDo.id)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};
export default ToDoList;
