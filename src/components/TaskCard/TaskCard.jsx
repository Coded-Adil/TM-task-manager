const TaskCard = ({ task }) => {
    const { title, description, type, deadline, created_at } = task;
    return (
        <div className="p-6 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-white">{description}</p>
            </div>
            <div className="flex justify-between mt-4 text-sm">
                <div>
                    <h2>Deadline: {deadline}</h2>
                    <h2>Created: {created_at}</h2>
                </div>
                <p className="font-bold">{type}</p>
            </div>
        </div>
    );
};

export default TaskCard;