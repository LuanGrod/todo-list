import React, { useEffect, useState } from "react";
import "./Container.css";

export default function Container() {
  //with this it will get the tasks in the localStorage or create an empty array if there is no one
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  const newTask = (taskName) => {
    setTasks([...tasks, { taskName: taskName, done: false }]);
  };

  return (
    <div className="container">
      <span className="title">ToDo List</span>
      <hr />
      <input
        type="text"
        className="input block"
        placeholder="Adicionar uma tarefa"
        onChange={(e) => setTasks(e.target.value)}
      />
      <input
        type="submit"
        className="submit block"
        value="Adicionar"
      />
    </div>
  );
}
