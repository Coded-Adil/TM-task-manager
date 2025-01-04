import TaskBar from "../../components/TaskBar/TaskBar";
import Tasks from "../../components/Tasks/Tasks";

const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
                {/* Task */}
                <TaskBar />
                <Tasks />
            </div>
        </div>
    );
};

export default Home;