import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative  overflow-hidden pt-36 pb-14 px-28 flex flex-row justify-between bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div>
          <img src="/Logo (1).png" alt="" className="block dark:hidden" />
          <img src="/Logo (2).png" alt="" className="hidden dark:block" />
          <p className="pt-6 leading-[2] w-[430px] text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
          </p>
          <div className="flex gap-7 pt-6">
            <FaFacebook className="text-[27px] text-[#1877F2]" />
            <FaTwitter className="text-[27px] text-[#1DA1F2]" />
            <FaInstagram className="text-[27px] text-[#EC3397]" />
            <FaLinkedin className="text-[27px] text-[#0A66C2]" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 pt-5">© 2021 . All rights reserved.</p>
        </div>

        <div>
          <p className="text-[20px] font-[600] text-gray-900 dark:text-gray-100">Take a tour</p>
          <ul className="flex flex-col gap-6 pt-5 text-[18px] font-[500]">
            <li>Features</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li className="cursor-pointer" onClick={() => navigate("/Product")}>Product</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <p className="text-[20px] font-[600] text-gray-900 dark:text-gray-100">Our Company</p>
          <ul className="flex flex-col gap-6 pt-5 text-[18px] font-[500]">
            <li className="cursor-pointer" onClick={() => navigate("/About Us")}>About Us</li>
            <li>Agents</li>
            <li>Blog</li>
            <li>Media</li>
            <li className="cursor-pointer" onClick={() => navigate("/Contact Us")}>Contact Us</li>
          </ul>
        </div>

        <div>
          <p className="text-[20px] font-[600] text-gray-900 dark:text-gray-100">Subscribe</p>
          <p className="pt-6 text-gray-600 dark:text-gray-300 w-[255px]">Subscribe to get latest property, blog news from us</p>
          <div className="flex flex-row items-center justify-between px-4 border-[2px] border-gray-300 dark:border-gray-600 rounded-xl mt-7 py-2 bg-white dark:bg-black">
            <input type="text" placeholder="Email Address" className="outline-none bg-transparent text-gray-900 dark:text-gray-100" />
            <BsArrowRightCircleFill className="text-[32px] text-[#1DAEFF]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
