import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-between px-[75px] pt-6 bg-white dark:bg-black text-gray-900 dark:text-gray-100">

        <div>
          <img src="/Logo (1).png" alt="" className="block dark:hidden" />
          <img src="/Logo (2).png" alt="" className="hidden dark:block" />
        </div>

        <DarkModeToggle />

        <div className="flex flex-row justify-center items-center gap-12">
          <ul className="flex gap-20 text-[16px] font-[600]">
            <li className="cursor-pointer" onClick={() => navigate("/")}>HOME</li>
            <li className="cursor-pointer" onClick={() => navigate("/Market")}>MARKET</li>
            <li className="cursor-pointer" onClick={() => navigate("/About Us")}>ABOUT US</li>
            <li className="cursor-pointer" onClick={() => navigate("/Contact Us")}>CONTACT US</li>
          </ul>
          <button
            className="text-[16px] font-[600] text-[#1DAEFF] border-2 border-[#1DAEFF] py-[7px] px-[32px] rounded-xl"
            onClick={() => navigate("/SignIn")}
          >
            LOG IN
          </button>
        </div>
      </div>
    </>
  )
}

export default Header;
