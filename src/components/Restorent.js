import { Link } from "react-router";
import { RESTORENT_IMAGE_BASE_URL } from "../utility/constants";

const RestorentComponent = (prop) => {
  const { restorentData } = prop;

  const restorent = restorentData?.info;
  const restorentId = restorent?.id;
  const restorentName = restorent?.name;
  const avgRating = restorent?.avgRatingString;
  const cuisines = restorent?.cuisines;
  const price = restorent?.costForTwo;
  const imageId = restorent?.cloudinaryImageId;
  return (
    <Link to={`/restorentdetails/${restorentId}`}>
      <div className="res-card">
        <img src={RESTORENT_IMAGE_BASE_URL + imageId} />
        <div className="res-card-details">
          <h2>{restorentName}</h2>
          <h4>{price}</h4>
          <h3>{avgRating}</h3>
          <p>{cuisines?.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestorentComponent;
