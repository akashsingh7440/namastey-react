import RestorentComponent from "./Restorent";
import restaurantsData from "../utility/mockRestorentResponse";
import { useState } from "react";

const BodyComponent = () => {
  const [resList, setResList] = useState(restaurantsData);
  return (
    <div className="body">
      <div className="button-container">
        <button
          className="top-restaurants-btn"
          onClick={() => {
            const topRestorent = restaurantsData.filter(
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
