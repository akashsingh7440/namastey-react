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
      className="p-2 justify-center"
      to={`/restorentdetails/${restorentId}`}
    >
      <div className=" bg-[#FFF2EF] mr-3 my-2 p-3 w-60 h-dvh rounded-lg">
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

export default RestorentComponent;
