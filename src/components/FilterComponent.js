import { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedVegType, setSelectedVegType] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const ratingOptions = [
    { value: "4.5", label: "4.5+ Stars" },
    { value: "4.0", label: "4.0+ Stars" },
    { value: "3.5", label: "3.5+ Stars" },
    { value: "3.0", label: "3.0+ Stars" },
  ];

  const vegOptions = [
    { value: "veg", label: "Pure Veg" },
    { value: "nonveg", label: "Non-Veg" },
  ];

  const cuisineOptions = [
    "Italian",
    "Indian",
    "Chinese",
    "North Indian",
    "South Indian",
    "Mexican",
    "Thai",
    "Japanese",
    "American",
    "Continental",
    "Beverages",
    "Fast Food",
    "Desserts",
  ];

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onFilterChange({
      rating,
      vegType: selectedVegType,
      cuisines: selectedCuisines,
    });
  };

  const handleVegTypeChange = (vegType) => {
    setSelectedVegType(vegType);
    onFilterChange({
      rating: selectedRating,
      vegType,
      cuisines: selectedCuisines,
    });
  };

  const handleCuisineChange = (cuisine) => {
    const updatedCuisines = selectedCuisines.includes(cuisine)
      ? selectedCuisines.filter((c) => c !== cuisine)
      : [...selectedCuisines, cuisine];

    setSelectedCuisines(updatedCuisines);
    onFilterChange({
      rating: selectedRating,
      vegType: selectedVegType,
      cuisines: updatedCuisines,
    });
  };

  const clearAllFilters = () => {
    setSelectedRating("");
    setSelectedVegType("");
    setSelectedCuisines([]);
    onFilterChange({
      rating: "",
      vegType: "",
      cuisines: [],
    });
  };

  return (
    <div className="w-96 bg-white p-8 rounded-xl shadow-lg h-fit sticky top-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
        <button
          onClick={clearAllFilters}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-md hover:bg-blue-50 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Rating Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Rating</h3>
        <div className="space-y-3">
          {ratingOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center cursor-pointer py-1"
            >
              <input
                type="radio"
                name="rating"
                value={option.value}
                checked={selectedRating === option.value}
                onChange={() => handleRatingChange(option.value)}
                className="mr-4 w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 text-base">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Veg/Non-Veg Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Type</h3>
        <div className="space-y-3">
          {vegOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center cursor-pointer py-1"
            >
              <input
                type="radio"
                name="vegType"
                value={option.value}
                checked={selectedVegType === option.value}
                onChange={() => handleVegTypeChange(option.value)}
                className="mr-4 w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 text-base">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Cuisine Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Cuisines</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
          {cuisineOptions.map((cuisine) => (
            <label
              key={cuisine}
              className="flex items-center cursor-pointer py-1"
            >
              <input
                type="checkbox"
                checked={selectedCuisines.includes(cuisine)}
                onChange={() => handleCuisineChange(cuisine)}
                className="mr-4 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="text-gray-700 text-sm">{cuisine}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
