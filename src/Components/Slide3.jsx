import { useNavigate } from "react-router-dom";

function Slide3() {
  const navigate = useNavigate();
  const properties = [
    { id: 1, img: "/13.jpg", title: "103/143 West Street, Crows Nest", bedrooms: 10, area: 150, garage: 2, builder: "X Builder", price: "$45,545" },
    { id: 2, img: "/14.jpg", title: "103/143 West Street, Crows Nest", bedrooms: 10, area: 150, garage: 2, builder: "X Builder", price: "$45,545" },
    { id: 3, img: "/15.jpg", title: "103/143 West Street, Crows Nest", bedrooms: 10, area: 150, garage: 2, builder: "X Builder", price: "$45,545" },
    { id: 4, img: "/16.jpg", title: "103/143 West Street, Crows Nest", bedrooms: 10, area: 150, garage: 2, builder: "X Builder", price: "$45,545" },
    { id: 5, img: "/17.jpg", title: "103/143 West Street, Crows Nest", bedrooms: 10, area: 150, garage: 2, builder: "X Builder", price: "$45,545" },
    { id: 6, img: "/18.jpg", title: "103/143 West Street, Crows Nest", bedrooms: 10, area: 150, garage: 2, builder: "X Builder", price: "$45,545" },
  ];

  return (
    <div className="pt-28">
      <div className="flex flex-row justify-between px-36">
        <p className="text-[38px] font-[600] text-gray-900 dark:text-gray-100">Recently Added</p>
        <button className="text-[24px] font-[600px] text-[#1DAEFF]">See all</button>
      </div>

      <div className="pt-14 flex flex-row flex-wrap justify-between px-28 gap-y-8">
        {properties.map((property) => (
          <div key={property.id} className="flex-row bg-white dark:bg-black pl-10 items-center border-[2.5px] border-[#c3c3cc] dark:border-gray-300 rounded-3xl w-[545px] h-[250px] flex relative transition-all duration-300 dark:hover:border-[#1DAEFF] hover:border-[#1DAEFF] hover:shadow-[0_4px_25px_#6b728040]">
            <div className="relative group">
              <img src={property.img} alt="" className="object-cover rounded-2xl w-[162px] h-[192px] transition-all duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-transparent transition-all duration-300 group-hover:bg-[#0aceff55]"></div>
            </div>

            <div className="pl-10 flex flex-col gap-4">
              <p className="w-[280px] text-[28px] font-[650] text-gray-900 dark:text-gray-100">{property.title}</p>
              <div className="text-[17px] font-[520] text-gray-500 dark:text-gray-300 flex flex-row gap-x-8 pr-5">
                <p>{property.bedrooms} Bedroom</p>
                <p>{property.area} M</p>
                <p>{property.garage} Garage</p>
              </div>
              <div className="flex flex-row items-center gap-x-8">
                <p className="text-[17px] text-gray-500 dark:text-gray-300 font-[520]">Posted by {property.builder}</p>
                <button className="pl-3 text-white py-[6px] text-[17px] font-[520] rounded-xl px-5 bg-[#8F90A6]">
                  {property.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-28 pt-28">
        <div className="rounded-3xl bg-gradient-to-b from-[#a1cadf] to-[#e5f2f8]  h-[480px] flex flex-row justify-between">
          <div className="pl-16 pt-20">
            <p className="text-[54px] w-[400px] font-[600] text-gray-900 dark:text-gray-800">Find your best Real Estate</p>
            <p className="pt-8 w-[470px] text-[22px] font-[400] text-gray-600 dark:text-gray-500">
              We provide a complete service for the sale, purchase or rental of real estate.
            </p>
            <div className="pt-8">
              <button className="text-white font-[550] bg-[#1DAEFF] px-12 rounded-xl py-2" onClick={() => navigate("/Contact Us")}>
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img src="/19.jpg" alt="" className="rounded-r-3xl h-[480px] w-[605px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide3;

