
const Tasks = ({tasks}) => {
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold">Task List</h2>
            {tasks.length === 0 ? (
                <p className="text-gray-500 mt-4">No tasks yet. Add some!</p>
            ) : (
                <ul className="mt-4 space-y-2">
                    {tasks.map((task) => (
                        <li key={task.id} className="p-4 bg-gray-100 rounded shadow">
                            <h3 className="font-bold">{task.title}</h3>
                            <p>{task.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tasks;