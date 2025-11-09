import { Sun, Warehouse, } from "lucide-react";
import { IoBed } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FaRegCalendar } from "react-icons/fa6";
import { TbFrame } from "react-icons/tb";

function ProImage() {

     const details = [
    { icon: <IoBed size={20} />, value: "4" },
    { icon: <GiBathtub size={20} />, value: "2" },
    { icon: <Sun size={20} />, value: "2" },
    { icon: <Warehouse size={20} />, value: "1" },
    { icon: <FaRegCalendar size={20} />, value: "2007" },
    { icon: <TbFrame size={20} />, value: "4300" },
  ];
    return (
        <>

            <div>
                <div>
                    <img src="/20.jpg" alt="" className="rounded-3xl w-[860px] h-[477px]" />
                </div>

                <div className="pt-12 flex flex-row justify-between w-[860px]">
                    <img src="/4.jpg" alt="" className="w-[199px] h-[154px] rounded-xl" />
                    <img src="/21.jpg" alt="" className="w-[199px] h-[154px] rounded-xl" />
                    <img src="/22.jpg" alt="" className="w-[199px] h-[154px] rounded-xl" />
                    <img src="/23.jpg" alt="" className="w-[199px] h-[154px] rounded-xl" />
                </div>

                <div className="flex w-[860px] mt-12 border border-[#DCDCEB] rounded-xl divide-x divide-[#DCDCEB] bg-white shadow-sm">
                    {details.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-2 flex-1 py-4 text-[#585981]"
                        >
                            {item.icon}
                            <span className="text-[17px] text-[#585981] font-[600]">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default ProImage