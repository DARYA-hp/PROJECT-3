import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
function Footer() {
    return (
        <>
            <div className=" pt-36 pb-14 px-28 flex flex-row justify-between">
                <div>
                    <img src="/Logo (1).png" alt="" />
                    <p className=" pt-6 text-[#8F90A6] leading-[2] w-[430px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="flex gap-7 pt-6">
                    <FaFacebook className=" text-[27px] text-[#1877F2]"/>
                    <FaTwitter className=" text-[27px] text-[#1DA1F2]"/>
                    <FaInstagram className=" text-[27px] text-[#EC3397]"/>
                    <FaLinkedin className=" text-[27px] text-[#0A66C2]"/>
                    </div>
                    <p className=" text-[#8F90A6] pt-5">© 2021 . All rights reserved.</p>
                </div>
                <div>
                    <p className=" text-[20px] font-[600]">Take a tour</p>
                    <ul className=" flex flex-col gap-6 pt-5 text-[18px] font-[500] ">
                        <li>Features</li>
                        <li>Partners</li>
                        <li>Pricing</li>
                        <li>Product</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <p className=" text-[20px] font-[600]">Our Company</p>
                    <ul className=" flex flex-col gap-6 pt-5 text-[18px] font-[500]">
                        <li>About Us</li>
                        <li>Agents</li>
                        <li>Blog</li>
                        <li>Media</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p className=" text-[20px] font-[600]">Subscribe</p>
                    <p className=" pt-6 text-[#8F90A6] w-[255px]">Subscribe to get latest property, blog news from us</p>
                    <div className="flex flex-row items-center  justify-between px-4 border-[2gpx] border-[#D0D0E3] rounded-xl mt-7 py-2">
                        <input type="text" placeholder="Email Address" className=" outline-none" />
                        <BsArrowRightCircleFill className=" text-[32px] text-[#1DAEFF]"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer