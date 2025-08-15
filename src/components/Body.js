import RestorentComponent from "./Restorent";
import { useEffect, useState } from "react";

const BodyComponent = () => {
  let restorentList;
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.579343&lng=73.9089168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();
    restorentList =
      response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(response);
    setResList(restorentList);
  };

  return (
    <div className="body">
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
