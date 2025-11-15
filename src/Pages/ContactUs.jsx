import { BiSolidPhoneCall } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactUs() {
    return (
        <div className="relative overflow-hidden">
            <img src="/green.png" alt="" className="absolute top-[580px] right-[-40px] -z-10" />
            <img src="/orange.png" alt="" className="absolute top-[206px] left-0 -z-10" />

            <div className="mt-10 flex flex-row bg-[#80B2DF] w-full h-[335px] items-center">
                <div className="items-center pl-28">
                    <h1 className="text-6xl font-semibold font-Montserrat text-[#FFFFFF] leading-[100%] pb-5">Contact Us</h1>
                    <p className="text-[22px] font-normal font-Poppins leading-9 text-[#FFFFFF] w-[60%]">
                        We provide a complete service for the sale, purchase or rental of real estate.
                    </p>
                </div>
                <div>
                    <img src="/image1.png" alt="" className="ml-32 w-64 h-[336px] -scale-x-100" />
                </div>
            </div>

            <div className="flex flex-row justify-between px-28 pt-32 pb-28">
                <form className="flex flex-col gap-4 w-[50%]">
                    <div className="flex flex-row gap-4">
                        <input type="text" placeholder="Firstname"
                            className="pl-4 w-[273px] h-[50px] rounded-xl border-[1px] border-[#D0D0E3]" required />
                        <input type="text" placeholder="Lastname"
                            className="pl-4 w-[273px] h-[50px] rounded-xl border-[1px] border-[#D0D0E3]" required />
                    </div>

                    <input type="email" placeholder="Email" className="pl-4 h-[50px] rounded-xl border-[1px] border-[#D0D0E3]"
                        required />

                    <textarea placeholder="Message..." className="pb-44 pl-4 h-[230px] rounded-xl border-[1px] border-[#D0D0E3]"
                        required></textarea>

                    <button type="submit" className="text-white rounded-lg w-[210px] py-2 bg-[#1DAEFF] ml-auto">
                        SEND
                    </button>
                </form>

                <div className="pr-20 w-[40%]">
                    <p className="text-[32px] font-[600]">Contact Information</p>
                    <p className="text-[#585981DE] text-[18px] mt-2">Say something to start a live chat!</p>

                    <div className="pt-10 text-[#585981] flex flex-col gap-6">
                        <a href="" className="flex items-center gap-5">
                            <BiSolidPhoneCall className="text-[24px]" /> <p>+1012 3456 789</p>
                        </a>
                        <a href="" className="flex items-center gap-5">
                            <BiSolidEnvelope className="text-[24px]" /> <p>demo@gmail.com</p>
                        </a>
                        <a href="" className="flex items-center gap-5">
                            <IoLocationSharp className="text-[24px]" />
                            <p className="w-[288px]">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                        </a>
                    </div>

                    <div className="flex gap-7 pt-10">
                        <FaFacebook className="text-[25px] text-[#1877F2]" />
                        <FaTwitter className="text-[25px] text-[#1DA1F2]" />
                        <FaInstagram className="text-[25px] text-[#EC3397]" />
                        <FaLinkedin className="text-[25px] text-[#0A66C2]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
