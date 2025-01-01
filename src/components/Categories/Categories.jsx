import { NavLink } from "react-router-dom";

const Categories = ({ categories, onCategorySelect }) => {
  return (
    <div className="p-4 border">
      <h2 className="text-xl font-bold mb-4">Task Categories</h2>
      <div className="flex flex-col gap-2 p-2">
        {categories.map((category, index) => (
          <NavLink
            key={index}
            onClick={() => onCategorySelect(category)}
            className="btn rounded-full"
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
