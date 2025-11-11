import { IoMdPlay } from "react-icons/io";

function AboutS2() {
    return (
        <div className=" w-full  bg-white transition-colors duration-300 px-20">
            <div className=" sm:px-6 lg:px-16 pt-72">
                <div className="  relative grid lg:grid-cols-2 items-center justify-around">
                    <div>
                        <div>
                            <div className=" w-full flex flex-col -mt-[26px]">
                                <img src="public/image18.png" alt="" className=" w-[75px] h-[85px]" />
                                <img src="public/image20.png" alt="" className=" w-[48px] h-[65px] -mt-[88px] ml-[14px]" />
                                <img src="public/image21.png" alt="" className=" w-3 h-4 -mt-7 ml-[32px]" />
                            </div>
                            <div className=" py-20">
                                <h1 className="text-5xl font-semibold font-Montserrat leading-[100%] dark:text-[#FFFFFFDE]">Pellentesque ac tortor</h1>
                                <p className=" text-2xl font-normal text-[#585981DE] font-Montserrat leading-9 py-8 dark:text-[#FFFFFFDE]">Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.</p>
                            </div>
                        </div>
                        <div className=" flex items-center -space-x-[400px] -space-y-28">
                            <img src="public/image3.png" alt="" className=" -mt-28 -ml-14 h-[470px]" />
                            <div className=" text-8xl hover:scale-110 transition"><IoMdPlay className=" text-[#C8E6C9]" /></div>
                        </div>


                    </div>

                    <div className=" relative">
                        <div>
                            <img src="public/image11.png" alt="" className=" -mt-5" />
                        </div>
                        <div className=" relative">
                            <div className=" absolute -top-[400px] right-[470px] translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] dark:bg-[#17191C] shadow-lg px-10 py-8 rounded-[30px] w-64">
                                <img src="public/image12.png" alt="" className=" w-[70px] h-[70px]" />
                                <h1 className=" text-3xl font-semibold font-Montserrat pt-4 dark:text-[#FFFFFFDE]">+100</h1>
                                <p className=" text-xl font-Montserrat font-normal pt-1 dark:text-[#FFFFFFDE]">Supported Coins</p>
                            </div>

                            <div className=" absolute bottom-64 right-40 translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] dark:bg-[#17191C] px-10 py-8 rounded-[30px] w-64">
                                <img src="public/image10.png" alt="" className=" w-[70px] h-[60px]" />
                                <h1 className=" text-3xl font-semibold font-Montserrat pt-4 dark:text-[#FFFFFFDE]">+20M</h1>
                                <p className=" text-xl font-Montserrat font-normal pt-1 dark:text-[#FFFFFFDE]">Open Wallets</p>
                            </div>

                            <div className=" absolute bottom-24 right-[480px] translate-x-1/2 translate-y-1/2 bg-[#FFFFFF] dark:bg-[#17191C] px-10 py-8 rounded-[30px] w-64">
                                <img src="public/image13.png" alt="" className=" w-[70px] h-[50px]" />
                                <h1 className=" text-3xl font-semibold font-Montserrat pt-4 dark:text-[#FFFFFFDE]">+200K</h1>
                                <p className=" text-xl font-Montserrat font-normal pt-1 dark:text-[#FFFFFFDE]">Registered Users</p>
                            </div>

                            <div className=" absolute bottom-0 right-40 translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] dark:bg-[#17191C] px-10 py-8 rounded-[30px] w-64">
                                <img src=".png" alt="" className=" w-[70px] h-[60px]" />
                                <h1 className=" text-3xl font-semibold font-Montserrat pt-4 dark:text-[#FFFFFFDE]">+50M</h1>
                                <p className=" text-xl font-Montserrat font-normal pt-1 dark:text-[#FFFFFFDE]">USD Invested</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutS2