import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="bg-white border rounded-lg p-7 min-h-fit">
            <div><NavLink className="btn w-full rounded-full mb-3" to="/">All product</NavLink></div>
            {
                categories.map(category => <div key={category.id}><NavLink className="btn w-full rounded-full mb-3" to={`/category/${category.category}`}>{category.name}</NavLink></div>)
            }
        </div>
    );
};

export default Categories;