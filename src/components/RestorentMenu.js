import { RESTORENT_IMAGE_BASE_URL } from "../utility/constants";

const RestorentMenuComponent = (prop) => {
  const { restorentData, isOpen, onToggle } = prop;

  return (
    <div>
      {restorentData?.itemCards != null && (
        <div className="my-4 bg-white mx-auto max-w-4xl border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div
            className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 rounded-t-xl"
            onClick={onToggle}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {restorentData?.title} ({restorentData?.itemCards.length} items)
            </h3>
            <span
              className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            >
              ⏬
            </span>
          </div>
          <div
            className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen
                ? "pb-6 max-h-screen opacity-100"
                : "pb-0 max-h-0 opacity-0"
            }`}
          >
            {restorentData?.itemCards?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0 py-4"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.card.info.name}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        {item.card.info.description}
                      </p>
                      <p className="text-green-600 font-medium">
                        ₹
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </p>
                    </div>
                    <div className="relative flex-shrink-0">
                      <img
                        src={
                          RESTORENT_IMAGE_BASE_URL + item?.card?.info?.imageId
                        }
                        alt={item.card.info.name}
                        className="w-24 h-20 object-cover rounded-lg shadow-md"
                      />
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200">
                        Add+
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestorentMenuComponent;
