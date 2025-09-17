import { RESTORENT_IMAGE_BASE_URL } from "../utility/constants";

const RestorentMenuComponent = (prop) => {
  const { restorentData } = prop;

  return (
    <div className="">
      <div className="my-2 bg-red-100 mx-48 h-auto border-b-4">
        <h3 className="my-6 text-center">{restorentData?.title}</h3>

        {restorentData?.itemCards?.map((item, index) => {
          return (
            <div key={index}>
              <div className="justify-between flex">
                <div className="ml-4">
                  <h2 className="text-red-600 font-semibold">
                    {item.card.info.name}
                  </h2>
                  <h3 className="my-3 w-[88%]">{item.card.info.description}</h3>
                </div>
                <img
                  src={RESTORENT_IMAGE_BASE_URL + item?.card?.info?.imageId}
                  className="my-2 mx-5 w-40 h-36 object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })}

        {console.log(restorentData)}
      </div>
    </div>
  );
};

export default RestorentMenuComponent;
