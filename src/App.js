import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("theme", theme);
  });

  function deleteTask(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please enter a task");
    } else if (editId) {
      // Edit task
      const updateTask = tasks.map((task) => {
        // Check task === editId
        if (task.id === editId) {
          // update task title
          return { ...task, title: title };
        }
        // return new update task
        return task;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      // Add new task
      setTasks((previousTasks) => [
        ...previousTasks,
        { id: Math.floor(Math.random() * 1000), title },
      ]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTaskObj = tasks.find((task) => task.id === id);
    console.log("editTaskObj: ", editTaskObj);
    setTitle(editTaskObj.title);
  }

  function calcleEditTask() {
    setEditId(null);
    setTitle("");
  }
  return (
    <>
      <div className={"App " + theme}>
        <Header theme={theme} setTheme={setTheme} />
        <div className="container">
          <AddForm
            title={title}
            setTitle={setTitle}
            saveTask={saveTask}
            editId={editId}
            calcleEditTask={calcleEditTask}
          />
          <section>
            {tasks.map((task) => {
              return <Item key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />;
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
