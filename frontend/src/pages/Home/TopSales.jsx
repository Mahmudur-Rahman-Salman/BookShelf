import { useEffect, useState } from "react";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSales = () => {
  const [books, setbooks] = useState([]);

  //   const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  //   const filterBooks = selectedCategory === "choose a genre"

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div>
      <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
        {/* category filtering */}
        <div className="mb-8 flex items-center">
          <select
            name="category"
            id="category"
            className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopSales;
