import { RESTORNET_API_URL } from "../utility/constants";
import { useEffect, useState } from "react";

function useRestorentList() {
  const [restorents, setRestorents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTORNET_API_URL);
    const response = await data.json();
    setRestorents(
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return restorents;
}

export default useRestorentList;
