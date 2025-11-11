import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function AboutS1() {
    return (
        <div className=" w-full bg-white transition-colors duration-300">
            <div className="  sm:px-6 lg:px-16 pt-52">
                <div className=" grid lg:grid-cols-2 items-center justify-around">
                    <div className=" relative">
                        <div>
                            <div className=" w-full relative flex justify-center">
                                <img src="public/image2.png" alt="" className=" h-[440px] w-full max-w-[560px]" />
                            </div>
                            <div className="absolute -top-[78px] left-[485px] -translate-x-1/2 bg-white backdrop-blur-md shadow-xl px-7 py-6 text-center font-Poppins scale-125">
                                <h1 className="text-6xl text-[#054457] font-normal">4.8</h1>
                                <div className=" flex justify-center py-2 text-[#69B99D] gap-1 text-sm"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className=" text-[#A6A6A6] text-sm pt-2">Trusted on</p>
                                <p className=" text-[#054457] text-sm leading-loose">500+ Reviews</p>
                                <TiTick className="text-white w-6 h-7 absolute top-[520px] left-16 translate-x-1/2 bg-[#69B99D] rounded-md" />
                            </div>
                        </div>
                        <div className=" flex  bg-white justify-around py-5 px-7 absolute top-[395px] left-44 gap-3">
                            <div className=" flex text-center items-center">
                                <h1 className=" text-6xl font-Poppins font-semibold text-[#054457]">300+</h1>
                                <p className=" text-[#A6A6A6] w-1/3 leading-6 font-normal text-base font-Poppins">Property Sale</p>
                            </div>
                            <div className=" flex text-center items-center">
                                <h1 className=" text-6xl font-Poppins font-semibold text-[#054457]">550+</h1>
                                <p className="text-base text-[#A6A6A6] w-1/3 leading-6 font-normal font-Poppins">Apartmen Rent</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" flex pt-10">
                            <img src="public/image18.png" alt="" className=" w-[60px] h-[70px]" />
                            <img src="public/image19.png" alt="" className=" w-[60px] h-[60px] -mx-12 -my-1" />
                        </div>
                        <div className=" py-14">
                            <h1 className=" text-5xl font-semibold text-[#000000DE] font-Montserrat leading-[70px] dark:text-[#FFFFFFDE] w-[80%]">Fusce placerat enim et odio molestie sagittis</h1>
                            <p className=" text-[#585981DE] font-Poppins text-2xl font-normal leading-9 py-4 dark:text-[#FFFFFFDE] w-[85%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutS1