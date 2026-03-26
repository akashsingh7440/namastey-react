import { useState } from "react";
import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
import useRestorentDetails from "../utility/useRestorentDetails";
import RestorentMenuComponent from "./RestorentMenu";

const RestorentDetailComponent = () => {
  const { id } = useParams();
  const restorentInfodata = useRestorentDetails(id);
  const restorentInfo = restorentInfodata?.cards[2]?.card?.card?.info;
  const [isOpenIndex, setIsOpenIndex] = useState(null);

  return restorentInfo === null ? (
    <ShimmerComponent />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">{restorentInfo?.name}</h1>
          <p className="text-lg">{restorentInfo?.cuisines?.join(", ")}</p>
        </div>
      </div>

      {/* Restaurant Details Card */}
      <div className="max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Restaurant Image */}
            <div className="flex-shrink-0">
              <img
                src={
                  restorentInfo?.cloudinaryImageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${restorentInfo.cloudinaryImageId}`
                    : "https://via.placeholder.com/200x150?text=No+Image"
                }
                alt={restorentInfo?.name}
                className="w-48 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {restorentInfo?.name}
              </h2>
              <p className="text-gray-600 mb-3">
                {restorentInfo?.cuisines?.join(", ")}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-green-600 font-semibold text-lg mr-2">
                    ⭐ {restorentInfo?.avgRating}
                  </span>
                  <span className="text-gray-500">
                    ({restorentInfo?.totalRatingsString || "Ratings"})
                  </span>
                </div>
                <div className="text-red-600 font-semibold text-lg">
                  {restorentInfo?.costForTwoMessage}
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <span className="mr-2">📍</span>
                <span>
                  {restorentInfo?.locality}, {restorentInfo?.areaName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Menu
        </h2>
        <div className="space-y-4">
          {restorentInfodata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.map(
            (res, index) => (
              <RestorentMenuComponent
                key={index}
                restorentData={res?.card?.card}
                isOpen={isOpenIndex === index}
                onToggle={() => {
                  setIsOpenIndex(isOpenIndex === index ? null : index);
                }}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default RestorentDetailComponent;
