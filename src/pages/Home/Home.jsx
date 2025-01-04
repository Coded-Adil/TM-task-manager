import TaskBar from "../../components/TaskBar/TaskBar";
import Tasks from "../../components/Tasks/Tasks";

const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
                <div className="container mx-auto">
                    <TaskBar />
                </div>
                {/* Task */}
                <Tasks />
            </div>
        </div>
    );
};

export default Home;