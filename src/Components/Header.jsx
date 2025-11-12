import { useNavigate, useLocation } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className=" flex flex-row  justify-between px-[75px] pt-6 ">
                <div>
                    <img src="/Logo (1).png" alt="" />
                </div>
                <div className=" flex  flex-row justify-center items-center gap-12">
                    <ul className="flex gap-20 text-[16px] font-[600]">
                        <li className="cursor-pointer" onClick={() => navigate("/HomePage")}>HOME</li>
                        <li className="cursor-pointer" onClick={() => navigate("/Market")}>MARKET</li>
                        <li className="cursor-pointer" onClick={() => navigate("/About Us")}>ABOUT US</li>
                        <li className="cursor-pointer" onClick={() => navigate("/")}>CONTACT US</li>
                    </ul>
                    <button className=" text-[16px] font-[600] text-[#1DAEFF] border-2 border-[#1DAEFF] py-[7px] px-[32px] rounded-xl">LOG IN</button>
                </div>
            </div>
        </>
    )
}
export default Header