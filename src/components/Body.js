import RestorentComponent from "./Restorent";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";

import useRestorentList from "../utility/useRestorentList";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [allRestorent, setAllRestorent] = useState(resList);
  const restorentlist = useRestorentList();

  useEffect(() => {
    if (restorentlist.length > 0) {
      setResList(restorentlist);
      setAllRestorent(restorentlist);

      console.log(restorentlist);
    }
  }, [restorentlist]);

  return resList?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="ml-96 justify-end">
          <input
            type="text"
            className="w-68 my-5 px-32 py-2 border rounded-lg shadow-sm"
            placeholder="Search Restorent"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-5 px-4 py-2 bg-[#3F4E4F] text-[#E1E9C9] font-semibold rounded-lg "
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
        <button
          className="m-5 px-4 py-2 bg-[#FC5185] text-white font-bold rounded-lg"
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
      <div className="flex flex-wrap justify-center">
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
