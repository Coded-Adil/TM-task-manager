
const TaskCard = ({ task }) => {
    const { title, description, type, deadline, created_at } = task;
    return (
        <div className="p-6 border-2 rounded-lg">
            <div className="flex flex-col gap-2">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex justify-between">
                <div>
                    <h2>{deadline}</h2>
                    <h2>{created_at}</h2>
                </div>
                <p>{type}</p>
            </div>
        </div>
    );
};

export default TaskCard;