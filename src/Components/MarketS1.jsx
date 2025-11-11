import { properties } from "../Array/Array"


function MarketS1() {

  return (
    <div className=" mx-auto  pt-28 flex justify-between px-28  dark:bg-gray-900 transition-colors duration-300">
      <div className=" gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((item, index) => (
          <div key={index} className=" bg-white border border-[#DCDCEB] rounded-[30px] w-[340px] h-[465px]   hover:border-[#1DAEFF] hover:shadow-[0_4px_25px_#6b728040]">
            <div className=" pt-5">
              <img src={item.image} alt={item.address} className=" m-auto  w-[270px] h-[220px] rounded-3xl " />
              <div>

                <div>
                  <h1 className=" text-xl font-semibold font-Montserrat leading-8 text-[#110229] pt-8 justify-around px-8 dark:text-gray-100 ">103/143 West Street,<br />Crows Nest</h1>
                  <div className=" text-base font-normal font-Montserrat leading-[100%] text-[#8F90A6] pt-6 flex gap-5 px-7 dark:text-gray-400">
                    <span>10 Bedroom</span>
                    <span>150 M</span>
                    <span>2 Garage</span>
                  </div>
                  <div className=" flex justify-around items-center pt-8">
                    <p className=" text-xs font-normal font-Montserrat text-[#8F90A6] leading-[100%]  dark:text-gray-400">Posted by {item.builder}</p>
                    <button className=" text-xl font-medium font-Lufga leading-[100%] text-[#FFFFFF] bg-[#8F90A6] px-7 py-3 rounded-xl dark:bg-gray-600">{item.price}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MarketS1