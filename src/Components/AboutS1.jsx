import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function AboutS1() {
  return (
    <div className="relative w-full bg-white dark:bg-black  transition-colors duration-300">
      <div className="pl-20 pt-40">
        <div className="grid lg:grid-cols-2 items-center justify-around">
          <div className="relative">
            <div className="w-full relative flex justify-center">
              <img src="/30.png" alt="" className="h-[440px] w-full max-w-[560px]" />
            </div>
            <div className="absolute -top-[78px] left-[485px] -translate-x-1/2 bg-white  backdrop-blur-md shadow-xl px-7 py-6 text-center scale-125">
              <h1 className="text-6xl text-[#054457]  font-normal">4.8</h1>
              <div className="flex justify-center py-2 text-[#69B99D] gap-1 text-sm">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-[#A6A6A6]  text-sm pt-2">Trusted on</p>
              <p className="text-[#054457]  text-sm leading-loose">500+ Reviews</p>
              <TiTick className="text-white w-6 h-7 absolute top-[520px] left-16 translate-x-1/2 bg-[#69B99D] rounded-md" />
            </div>

            <div className="flex bg-white  justify-around py-5 px-7 absolute top-[395px] left-44 gap-3">
              <div className="flex text-center items-center">
                <h1 className="text-6xl font-semibold text-[#054457] -white">300+</h1>
                <p className="text-[#A6A6A6]  w-1/3 leading-6 text-base font-normal">Property Sale</p>
              </div>
              <div className="flex text-center items-center">
                <h1 className="text-6xl font-semibold text-[#054457] ">550+</h1>
                <p className="text-base text-[#A6A6A6]  w-1/3 leading-6 font-normal">Apartment Rent</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex pt-10">
              <img src="public/5.png" alt=""/>
            </div>
            <div className="py-10">
              <h1 className="text-5xl font-semibold text-black dark:text-white leading-[70px] w-[90%]">
                Fusce placerat enim et odio molestie sagittis
              </h1>
              <p className="text-[#585981DE] dark:text-gray-300 text-2xl font-normal leading-9 py-4 w-[85%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutS1;
