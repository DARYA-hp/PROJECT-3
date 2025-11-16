import { properties } from "../Array/Array";

function MarketS1() {
  return (
    <div className="mx-auto pt-28 flex justify-between px-28 dark:bg-black transition-colors duration-300">
      <div className="gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black border border-[#DCDCEB] dark:border-gray-600 rounded-[30px] w-[340px] h-[465px] dark:hover:border-[#1DAEFF] hover:border-[#1DAEFF] hover:shadow-[0_4px_25px_#6b728040] transition-colors duration-300"
          >
            <div className="pt-5">
              <img
                src={item.image}
                alt={item.address}
                className="m-auto w-[270px] h-[220px] rounded-3xl"
              />
              <div>
                <h1 className="text-xl font-semibold font-Montserrat leading-8 text-[#110229] dark:text-gray-100 pt-8 px-8">
                  103/143 West Street,<br />Crows Nest
                </h1>
                <div className="text-base font-normal font-Montserrat leading-[100%] text-[#8F90A6] dark:text-gray-400 pt-6 flex gap-5 px-7">
                  <span>10 Bedroom</span>
                  <span>150 M</span>
                  <span>2 Garage</span>
                </div>
                <div className="flex justify-around items-center pt-8">
                  <p className="text-xs font-normal font-Montserrat text-[#8F90A6] dark:text-gray-400 leading-[100%]">
                    Posted by {item.builder}
                  </p>
                  <button className="text-xl font-medium font-Lufga leading-[100%] text-white bg-[#8F90A6] dark:bg-gray-600 px-7 py-3 rounded-xl">
                    {item.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketS1;
