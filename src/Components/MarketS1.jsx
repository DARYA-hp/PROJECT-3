import { properties } from "../Array/Array"


function MarketS1(){
    
    return(
        <div className=" mx-auto px-4 pt-10 flex justify-around sm:px-6 lg:px-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className=" gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((item,index)=>(
              <div key={index} className=" border border-[#DCDCEB] rounded-[30px] w-[360px] h-[465px] hover:bg-white transition  dark:border-gray-700 max-w-[360px] dark:hover:bg-gray-800 duration-300">
          <div>
          <img src={item.image} alt={item.address} className=" m-auto pt-5 w-[315px] h-[220px] object-cover"/>
          <div>

            <div>
                <h1 className=" text-xl font-semibold font-Montserrat leading-8 text-[#110229] pt-8 justify-around px-8 dark:text-gray-100 ">103/143 West Street,<br />Crows Nest</h1>
                <div className=" text-base font-normal font-Montserrat leading-[100%] text-[#8F90A6] pt-6 flex gap-5 px-7 dark:text-gray-400">
                <span>10 Bedroom</span>
                <span>150 M</span>
                <span>2 Garage</span>
                </div>
                <div className=" flex justify-around items-center pt-10">
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