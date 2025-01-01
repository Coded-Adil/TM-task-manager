import React, { useState } from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Tasks from "../Tasks/Tasks";

const AddTasks = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
        console.log("New Task Added:", task);
    };

    return (
        <div className="p-6">
            <NewTaskForm onAddTask={handleAddTask} />
            <Tasks tasks={tasks} />
        </div>
    );
};

export default AddTasks;
