import { RESTORENT_IMAGE_BASE_URL } from "../utility/constants";

const RestorentMenuComponent = (prop) => {
  const { restorentData, isOpen, onToggle } = prop;

  return (
    <div>
      {restorentData?.itemCards != null && (
        <div className="my-2 bg-[#F3F2EC] mx-48 h-auto border-b-4 rounded shadow-lg">
          <>
            <div
              className="flex justify-between cursor-pointer"
              onClick={onToggle}
            >
              <h3 className="mb-3 mt-2 mx-6 text-left text-lg text-balance">
                {restorentData?.title} ({restorentData?.itemCards.length})
              </h3>

              <span className="mb-3 mt-2 mx-6">⏬</span>
            </div>
            {isOpen &&
              restorentData?.itemCards?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="justify-between flex">
                      <div className="ml-8 w-10/12 h-30">
                        <h2 className="text-red-600 font-semibold">
                          {item.card.info.name}
                        </h2>
                        <h3 className="my-3 w-[88%]">
                          {item.card.info.description}
                        </h3>
                      </div>
                      <div className="relative my-2 mx-5 w-1/6 h-20">
                        <img
                          src={
                            RESTORENT_IMAGE_BASE_URL + item?.card?.info?.imageId
                          }
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          className="px-1 py-0.5 absolute bg-black/80 
                        backdrop-blur-md rounded text-sm text-white bottom-1 left-1/2 -translate-x-1/2 shadow-lg"
                        >
                          Add+
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        </div>
      )}
    </div>
  );
};

export default RestorentMenuComponent;
