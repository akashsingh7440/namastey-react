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
  const deliveryTime = restorent?.sla?.deliveryTime;

  return (
    <Link className="block" to={`/restorentdetails/${restorentId}`}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Restaurant Image */}
          <div className="flex-shrink-0">
            <img
              src={
                restorent?.cloudinaryImageId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${restorent.cloudinaryImageId}`
                  : "https://via.placeholder.com/200x150?text=No+Image"
              }
              alt={restorent?.name}
              className="w-48 h-32 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {restorent?.name}
            </h2>
            <p className="text-gray-600 mb-3">
              {restorent?.cuisines?.join(", ")}
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-green-600 font-semibold text-lg mr-2">
                  ⭐ {restorent?.avgRating}
                </span>
                <span className="text-gray-500">
                  ({restorent?.totalRatingsString || "Ratings"})
                </span>
              </div>
              <div className="text-red-600 font-semibold text-lg">
                {restorent?.costForTwoMessage}
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <span className="mr-2">📍</span>
              <span>
                {restorent?.locality}, {restorent?.areaName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PureVegRestorentComponent = (RestorentComponent) => {
  return (prop) => {
    return (
      <div className="relative">
        <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full px-4 py-2 shadow-lg border-2 border-white flex items-center gap-1">
          <span className="text-sm">🌱</span>
          <span>Pure Veg</span>
        </span>
        <RestorentComponent {...prop} />
      </div>
    );
  };
};

export default RestorentComponent;
