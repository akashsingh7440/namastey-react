import { useEffect, useState } from "react";
import { RESTORENT_DETAILS_API_URL } from "./constants";

function useRestorentDetails(id) {
  const [restorentInfo, setRestorentInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTORENT_DETAILS_API_URL + id);
    const response = await data.json();
    console.log(response);
    const restorentDetailsResponse = response?.data;
    setRestorentInfo(restorentDetailsResponse);
  };
  return restorentInfo;
}

export default useRestorentDetails;
