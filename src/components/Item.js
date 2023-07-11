import React from "react";
import "../styles/Item.css";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

export default function Item({ task, deleteTask, editTask }) {
  return (
    <div className="card-task">
      <div className="card-task-body">
        <p>{task.title}</p>
        <div className="card-task-icon">
          <BsPencilSquare className="btn" onClick={() => editTask(task.id)} />
          <BsFillTrashFill className="btn" onClick={() => deleteTask(task.id)} />
          {/* <button type="button" className="btn-edit" onClick={() => editTask(task.id)}>
            Edit
          </button>
          <button type="button" className="btn-delete" onClick={() => deleteTask(task.id)}>
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
}
