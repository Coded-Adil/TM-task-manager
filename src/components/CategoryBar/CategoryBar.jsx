import { useState } from "react";
import Categories from "../Categories/Categories";
import AddTasks from "../AddTasks/AddTasks";

const CategoryBar = () => {
    const [categories] = useState(["Work", "Personal", "Fitness"]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log(`Selected Category: ${category}`);
    };
    return (
        <div className="p-6">
            <div className="flex">
                <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
                <AddTasks />
            </div>
            <Categories categories={categories} onCategorySelect={handleCategorySelect} />
            <p className="mt-4 text-lg">
                Currently Viewing:{" "}
                <span className="font-semibold">{selectedCategory || "All Tasks"}</span>
            </p>
        </div>
    );
};

export default CategoryBar;