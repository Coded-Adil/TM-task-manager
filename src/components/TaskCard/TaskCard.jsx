const TaskCard = ({ task }) => {
    const { title, type, deadline, assigned_to } = task;
    return (
        <div className="p-6 rounded-lg shadow-lg text-white transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <div className="flex justify-between mt-4 text-sm">
                <div className="my-2">
                    <h2>Deadline: {deadline}</h2>
                </div>
                <p className="font-bold text-blue-500">{type}</p>
            </div>
            <div className="space-y-2">
                <h2 className="font-bold">Assigned To: </h2>
                <ul className="flex justify-start items-center gap-2">
                    <li>
                        <img
                            className="h-10 w-10 rounded-full border border-gray-700"
                            src={assigned_to.photoURL}
                            alt="User Avatar"
                        />
                    </li>
                    <li>{assigned_to.name}</li>
                </ul>
            </div>
        </div>
    );
};

export default TaskCard;