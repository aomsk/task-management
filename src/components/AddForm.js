import React from "react";
import "../styles/AddForm.css";

export default function AddForm({ title, setTitle, saveTask, editId, calcleEditTask }) {
  return (
    <div className="form-container">
      <h1>Task Management App</h1>
      <form className="form-group" onSubmit={saveTask}>
        <input
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className={editId ? "update-btn" : "submit-btn"}>
          {editId ? "Update" : "Add"}
        </button>
        {editId ? (
          <button type="submit" className="cancle-btn" onClick={calcleEditTask}>
            Cancle
          </button>
        ) : null}
      </form>
    </div>
  );
}
