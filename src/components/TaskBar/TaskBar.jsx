import { useState } from "react";
import { Link } from "react-router-dom";

const TaskBar = () => {
  const [isGroupTask, setIsGroupTask] = useState(false);

  const toggleTaskType = () => {
    setIsGroupTask(!isGroupTask);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Toggle Task Type */}
        <div className="flex flex-col md:flex-row justify-center border rounded-lg">
          <button
            onClick={toggleTaskType}
            className={`text-white font-semibold p-4 rounded-lg transition-all ${
              !isGroupTask ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
          >
            Solo Task
          </button>
          <button
            onClick={toggleTaskType}
            className={`text-white font-semibold p-4 rounded-lg transition-all ${
              isGroupTask ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
          >
            Group Task
          </button>
        </div>

        {/* Title */}
        <h1 className="text-3xl text-slate-400 font-bold my-4 lg:my-0">
          Task Manager
        </h1>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {/* Add Task */}
          <Link
            className="text-3xl font-bold p-4 border-b border-b-slate-200 hover:bg-green-600 text-white"
            title="Add Task"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* Important */}
          <Link
            className="text-3xl font-bold p-4 border-b border-b-slate-200 hover:bg-yellow-600 text-white"
            title="Mark as Important"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* Complete */}
          <Link
            className="text-3xl font-bold p-4 border-b border-b-slate-200 hover:bg-red-600 text-white"
            title="Mark as Complete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Task Content (Dynamic Based on Toggle) */}
      <div className="mt-6">
        {isGroupTask ? (
          <p className="text-xl text-slate-300">You are viewing Group Tasks.</p>
        ) : (
          <p className="text-xl text-slate-300">You are viewing Solo Tasks.</p>
        )}
      </div>
    </div>
  );
};

export default TaskBar;
