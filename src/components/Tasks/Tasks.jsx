import { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("task.json")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div className="container mx-auto text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default Tasks;