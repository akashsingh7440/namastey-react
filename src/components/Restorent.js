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
    <Link
      className="p-2 flex justify-center"
      to={`/restorentdetails/${restorentId}`}
    >
      <div className="relative bg-[#FFF2EF] mr-3 my-2 p-3 w-60 rounded-lg">
        <img
          src={RESTORENT_IMAGE_BASE_URL + imageId}
          className="w-56 h-56 object-cover rounded-lg"
        />
        <div className="m-5">
          <h2 className="text-[#594545] text-lg font-bold">{restorentName}</h2>
          <h4>{price}</h4>
          <h3>{avgRating}</h3>
          <p>{cuisines?.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
};

export const PureVegRestorentComponent = (RestorentComponent) => {
  return (prop) => {
    return (
      <div className="relative">
        <span className="absolute top-3  z-10 bg-green-300 text-green-500 rounded-md px-2 py-1">
          Veg
        </span>
        <RestorentComponent {...prop} />
      </div>
    );
  };
};

export default RestorentComponent;
