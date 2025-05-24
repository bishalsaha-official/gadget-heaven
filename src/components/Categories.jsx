import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="bg-white border rounded-lg p-7">
            {
                categories.map(category => <div key={category.id}><NavLink className="btn w-full rounded-full mb-3" to={`/category/${category.name}`}>{category.name}</NavLink></div>)
            }
        </div>
    );
};

export default Categories;