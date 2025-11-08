import { Search, SlidersHorizontal } from "lucide-react";
function Slide1() {
    return (
        <>
            <div className="flex flex-row bg-[url('/1.jpg')] bg-no-repeat bg-center bg-contain w-full overflow-hidden"
                style={{ aspectRatio: '16/9' }}>
                <div className=" pt-32 pl-28 ">
                    <p className=" pt-3 text-[56px] font-[600] w-[550px] leading-[1.3]">Easy way to find a perfect property</p>
                    <p className=" pt-10 text-[22px] w-[500px] font-[400] text-[#585981]">We provide a complete service for the sale, purchase or rental of real estate.</p>
                    <div className="flex pt-16 ">
                        <div>
                            <div className="flex gap-1 ">
                                <button className="py-2 px-7 rounded-md bg-white text-[16px] font-[600] cursor-pointer hover:bg-none hover:bg-[#1DAEFF] hover:text-white">Sell </button>
                                <button className="py-2 px-7 rounded-md bg-white text-[16px] font-[600] cursor-pointer hover:bg-none hover:bg-[#1DAEFF] hover:text-white"> Buy </button>
                                <button className="py-2 px-7 rounded-md bg-white text-[16px] font-[600] cursor-pointer hover:bg-none hover:bg-[#1DAEFF] hover:text-white">Rent</button>
                            </div>

                            <div className="flex items-center bg-white rounded-md shadow-xl shadow-[#99f5df1a]">
                                <input
                                    type="text"
                                    placeholder="Enter keyword here ..."
                                    className=" pl-8 py-5 w-[280px] text-[17px] font-[500] placeholder:text-[#6A6A6A] " />

                                <div className="h-6 w-px "></div>

                                <select className=" bg-white border-l-2 border-[#3A8BEA] pr-3  px-2  w-[215px] text-[17px] text-[#6A6A6A] font-[500]">
                                    <option>Select Location</option>
                                    <option>Baku</option>
                                    <option>Ganja</option>
                                </select>

                            </div>
                        </div>
                        <div className="flex flex-row justify-around  px-5 ml-2 mt-[40px] rounded-md h-[65px] w-[170px]  bg-white  items-center">
                            <SlidersHorizontal size={36} className="  text-[#1DAEFF]" />
                            <button className="flex items-center px-4 py-[13px] rounded-md justify-center bg-[#1DAEFF] text-white  ">
                                <Search className="" /> Search
                            </button>
                        </div>

                    </div>
                </div>

                <div className="relative mt-12  ">
                    <div className="flex justify-center items-center w-[385px] h-[270px] rounded-3xl bg-white mt-14 relative z-10">
                        <img src="/3.jpg" alt="" className="rounded-2xl w-[365px] h-[250px]" />
                    </div>

                    <div className="absolute top-[160px] left-[210px] flex justify-center items-center w-[254px] h-[320px] rounded-3xl bg-white z-20 shadow-lg">
                        <img src="/2.jpg" alt="" className="rounded-2xl object-cover w-[235px] h-[300px]" />
                    </div>

                    <div className="absolute top-[230px] right-[190px] flex justify-center items-center w-[350px] h-[192px] rounded-3xl bg-white z-30 shadow-xl">
                        <img src="/4.jpg" alt="" className="rounded-2xl object-cover w-[330px] h-[172px]" />
                    </div>
                </div>

            </div>


        </>
    )
}
export default Slide1;
