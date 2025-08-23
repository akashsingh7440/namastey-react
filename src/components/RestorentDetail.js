import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
import { RESTORENT_DETAILS_API_URL } from "./../utility/constants";

const RestorentDetailComponent = () => {
  const { id } = useParams();
  const [restorentInfo, setRestorentInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(RESTORENT_DETAILS_API_URL + id);
    const response = await apiData.json();
    console.log(response);
    const restorentDetailsResponse = response?.data?.cards[2].card.card.info;
    setRestorentInfo(restorentDetailsResponse);
  };

  return restorentInfo === null ? (
    <ShimmerComponent />
  ) : (
    <div className="restorent-detail-container">
      <h1>{restorentInfo?.name}</h1>
      <h2>{restorentInfo?.cuisines?.join(", ")}</h2>
      <h2>{restorentInfo?.costForTwoMessage}</h2>
      <h3>Average Rating : {restorentInfo?.avgRating}</h3>
      <h3>
        Location :{restorentInfo?.locality}, {restorentInfo?.areaName}
      </h3>
    </div>
  );
};

export default RestorentDetailComponent;
