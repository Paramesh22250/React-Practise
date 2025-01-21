import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [data, setData] = useState([
    { task: "Sample Data", id: uuidv4(), isDone: false },
  ]);
  const [newdata, setNewdata] = useState("");
  const handleButton = () => {
    if (newdata.length > 0) {
      setData((prevData) => [
        ...prevData,
        { task: newdata, id: uuidv4(), isDone: false },
      ]);
    }
    setNewdata("");
  };
  const handleDelete = (index) => {
    setData(data.filter((item) => item.id !== index));
  };
  const handleMark = (id) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="cont">
      <h3>To-Do list</h3>

      <input
        type="text"
        id="newTodo"
        name="newTodo"
        value={newdata}
        onChange={(event) => {
          setNewdata(event.target.value);
        }}
        placeholder="Enter a To-Do work"
      />
      <button onClick={handleButton}>Add TODO</button>
      <ul style={{ padding: "0" }}>
        {data.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <span>
              <button onClick={() => handleDelete(todo.id)}> Delete</button>
              <button onClick={() => handleMark(todo.id)}>
                {" "}
                {todo.isDone ? "Mark as undone" : "Mark as Done"}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
