import RestorentComponent from "./Restorent";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { RESTORENT_LIST_API_URL } from "../utility/constants";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestorent, setAllRestorent] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTORENT_LIST_API_URL);

    const response = await data.json();
    setAllRestorent(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(response);
    setResList(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resList.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="search-sort-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Restorent"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="top-restaurants-btn"
            onClick={() => {
              const filteredRestorant = allRestorent.filter((text) =>
                text?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              if (filteredRestorant.length != 0) {
                setResList(filteredRestorant);
              } else {
                setResList(allRestorent);
              }
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="button-container">
          <button
            className="top-restaurants-btn"
            onClick={() => {
              const topRestorent = resList.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setResList(topRestorent);
            }}
          >
            Top Restorents
          </button>
        </div>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestorentComponent
            key={restaurant.info.id}
            restorentData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
