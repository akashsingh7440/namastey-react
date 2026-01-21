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
    <div>
      <div className="mx-auto my-6 w-64 p-8 bg-[#FFF2EF] shadow-md rounded-lg">
        <h1 className="text-xl text-center text-[#810000] font-bold">
          {restorentInfo?.name}
        </h1>
        <h2 className="mt-6 text-[#472D2D]">
          {restorentInfo?.cuisines?.join(", ")}
        </h2>
        <h2 className="mt-3 text-[#DA0037]">
          {restorentInfo?.costForTwoMessage}
        </h2>
        <h3 className="text-[#DA0037]">
          Average Rating : {restorentInfo?.avgRating}
        </h3>
        <p className="mt-3 text-[#102C57] font-sans text-sm font-thin">
          Location : {restorentInfo?.locality}, {restorentInfo?.areaName}
        </p>
      </div>
      <div>
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
          )
        )}
      </div>
    </div>
  );
};

export default RestorentDetailComponent;
