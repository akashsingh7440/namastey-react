import RestorentComponent, { PureVegRestorentComponent } from "./Restorent";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import FilterComponent from "./FilterComponent";

import useRestorentList from "../utility/useRestorentList";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [allRestorent, setAllRestorent] = useState([]);
  const [filters, setFilters] = useState({
    rating: "",
    vegType: "",
    cuisines: [],
  });
  const restorentlist = useRestorentList();

  const PureVegRestornet = PureVegRestorentComponent(RestorentComponent);

  useEffect(() => {
    if (restorentlist.length > 0) {
      setResList(restorentlist);
      setAllRestorent(restorentlist);
    }
  }, [restorentlist]);

  // Apply filters and search
  useEffect(() => {
    let filteredList = allRestorent;

    // Apply search filter
    if (searchText) {
      filteredList = filteredList.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    // Apply rating filter
    if (filters.rating) {
      filteredList = filteredList.filter(
        (restaurant) =>
          restaurant?.info?.avgRating >= parseFloat(filters.rating),
      );
    }

    // Apply veg/non-veg filter
    if (filters.vegType) {
      if (filters.vegType === "veg") {
        filteredList = filteredList.filter(
          (restaurant) => restaurant?.info?.veg === true,
        );
      } else if (filters.vegType === "nonveg") {
        filteredList = filteredList.filter(
          (restaurant) => restaurant?.info?.veg === false,
        );
      }
    }

    // Apply cuisine filter
    if (filters.cuisines.length > 0) {
      filteredList = filteredList.filter((restaurant) =>
        filters.cuisines.some((cuisine) =>
          restaurant?.info?.cuisines?.some((restCuisine) =>
            restCuisine.toLowerCase().includes(cuisine.toLowerCase()),
          ),
        ),
      );
    }

    setResList(filteredList);
  }, [searchText, filters, allRestorent]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = () => {
    // Search is handled in useEffect, just clear the input
    setSearchText("");
  };

  const handleTopRestorents = () => {
    const topRestorent = allRestorent.filter(
      (res) => res?.info?.avgRating > 4.3,
    );
    setResList(topRestorent);
    // Reset filters when applying top restaurants
    setFilters({ rating: "", vegType: "", cuisines: [] });
  };

  return resList?.length === 0 && allRestorent.length > 0 ? (
    <div className="flex justify-center items-center h-64">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          No restaurants found
        </h2>
        <p className="text-gray-500">
          Try adjusting your filters or search terms
        </p>
      </div>
    </div>
  ) : allRestorent.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body min-h-screen bg-gray-50">
      {/* Search and Top Restaurants Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center items-center gap-6">
            <div className="flex gap-3">
              <input
                type="text"
                className="w-96 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-base"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            <button
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 text-base"
              onClick={handleTopRestorents}
            >
              Top Restaurants
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Filters Sidebar */}
          <div className="flex-shrink-0">
            <FilterComponent onFilterChange={handleFilterChange} />
          </div>

          {/* Restaurant Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8">
              {resList.map((restaurant) =>
                restaurant.info.veg ? (
                  <PureVegRestornet
                    key={restaurant.info.id}
                    restorentData={restaurant}
                  />
                ) : (
                  <RestorentComponent
                    key={restaurant.info.id}
                    restorentData={restaurant}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
