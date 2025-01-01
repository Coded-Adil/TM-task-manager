import React, { useState } from "react";

const NewTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") {
            alert("Task title is required!");
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };

        onAddTask(newTask);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-base-100 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold">Add New Task</h2>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Task Title</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter task title"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Task Description</span>
                </label>
                <textarea
                    placeholder="Enter task description"
                    className="textarea textarea-bordered w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
                Add Task
            </button>
        </form>
    );
};

export default NewTaskForm;