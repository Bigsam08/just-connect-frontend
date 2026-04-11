/**
 * @description Reusable category component for professional registration
 * @Fetch Fetches categories from backend if available, falls back to static list otherwise
 */


import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoriesApi";
import { fallbackCategories } from "../../data/categoriesFallBack";

const CategorySelect = ({ value, onChange, error }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();

        if (Array.isArray(res) && res.length > 0) {
          setCategories(res);
           console.log("Categories fetched from backend", res);
        } else {
          setCategories(fallbackCategories);
        }
      } catch (err) {
        console.warn("Backend unavailable, using fallback categories.", err.message);
        setCategories(fallbackCategories);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full">
      <label className="text-gray-500 text-xs md:text-sm ps-2">Category</label>

      <select
        name="category_id"
        value={value}
        onChange={onChange}
        className={`border ${
          error ? "border-red-500" : "border-gray-200"
        } p-3 rounded w-full text-sm text-gray-500 focus:outline-none focus:ring-0 mt-1 bg-gray-50`}
      >
        <option value="">Select a category</option>

        {categories.map((cat, idx) => {
          const label = typeof cat === "string" ? cat : cat.name;
          const value = typeof cat === "string" ? cat : cat.id;

          return (
            <option key={idx} value={value}>
              {label}
            </option>
          );
        })}
      </select>

      {error && <span className="text-red-500 text-xs ps-2">{error}</span>}
    </div>
  );
};

export default CategorySelect;