import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArraySlide } from "../ArrayAboutUs";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AboutSlide3() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
      <div className=" w-full  bg-white transition-colors duration-300">
        <div className="  sm:px-6 lg:px-20">
          <div className=" text-center">
            <img src="public/image18.png" alt="" className=" m-auto pt-20 w-[76px]" />
            <div>
              <h1 className=" pt-8 text-[48px] font-Montserrat font-[600] text-[#000000DE] leading-10 dark:text-[#FFFFFFDE]">What our members said ?</h1>
              <p className=" pt-8 text-[22px] font-Montserrat font-normal text-[#585981DE] dark:text-[#FFFFFFDE]">Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            </div>
          </div>
          <div>

            <div className="relative">
              <button ref={prevRef} className=" absolute left-32 top-64 translate-y-1/2 p-3 text-[#2E7D3254] hover:rounded-full hover:text-white hover:bg-[#2E7D32] transition-all duration-300 z-50"><IoCaretBackSharp size={40} /></button>
              <button ref={nextRef} className=" absolute right-32 top-64 translate-y-1/2 p-3 text-[#2E7D3254] hover:rounded-full hover:text-white hover:bg-[#2E7D32] transition-all duration-300 z-50"><IoCaretForwardSharp size={40} /></button>
            </div>


            <style>
              {`
        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          background: white; 
          border: 2px solid #2E7D32;
          dark:background:#17191C;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          width: 20px;
          height: 20px;
          background-color:#4CAF50;
        }

        .swiper-pagination-bullet,
        .swiper-pagination-bullet-active {
          transition: all 0.25s ease-in-out;
        }
      `}
            </style>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              navigation={false}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              className=""
            >
              {ArraySlide.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" flex flex-col items-center justify-center pt-7 ">
                    <div className=" w-52 h-52 rounded-full border-4 border-white overflow-hidden">
                      <img src={item.img} className=" w-full h-full object-cover" />
                    </div>
                    <p className=" text-2xl font-Montserrat font-normal leading-9 pt-10 text-[#585981DE] w-[55%] pb-24 text-center dark:text-[#FFFFFFDE]">{item.text} </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
      <div className="px-28 pt-28">
        <div className="rounded-3xl bg-gradient-to-b from-[#a1cadf] to-[#e5f2f8] h-[480px] flex flex-row justify-between">
          <div className="pl-16 pt-20">
            <p className="text-[54px] w-[400px] font-[600]">Find your best Real Estate</p>
            <p className="pt-8 w-[470px] text-[22px] font-[400] text-[#585981]">
              We provide a complete service for the sale, purchase or rental of real estate.
            </p>
            <div className="pt-8">
              <button className="text-white font-[550] bg-[#1DAEFF] px-12 rounded-xl py-2"
              onClick={() => navigate("/Contact Us")}>
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img src="/19.jpg" alt="" className="rounded-r-3xl h-[480px] w-[605px]" />
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutSlide3