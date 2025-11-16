import { BiSolidPhoneCall, BiSolidEnvelope } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
        <img src="/green.png" alt="" className="absolute top-[580px] right-[-40px] z-10" />
        <img src="/orange.png" alt="" className="absolute top-[206px] left-0 z-10" />

        <div className=" relative z-10 mt-10 flex flex-row bg-[#80B2DF] w-full h-[335px] items-center">
          <div className="items-center pl-28">
            <h1 className="text-6xl font-semibold font-Montserrat text-white leading-[100%] pb-5">Contact Us</h1>
            <p className="text-[22px] font-normal font-Poppins leading-9 text-white w-[60%]">
              We provide a complete service for the sale, purchase or rental of real estate.
            </p>
          </div>
          <div>
            <img src="/image1.png" alt="" className="ml-32 w-64 h-[336px] -scale-x-100" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-28 pt-32 pb-28 gap-20">
          <form className="flex flex-col gap-4 w-full lg:w-[50%]">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Firstname"
                className="pl-4 w-full sm:w-[273px] h-[50px] rounded-xl border-[1px] border-[#D0D0E3] dark:border-gray-200 dark:bg-gray-950 dark:text-white"
                required
              />
              <input
                type="text"
                placeholder="Lastname"
                className="pl-4 w-full sm:w-[273px] h-[50px] rounded-xl border-[1px] border-[#D0D0E3] dark:border-gray-200 dark:bg-gray-950 dark:text-white"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="pl-4 h-[50px] rounded-xl border-[1px] border-[#D0D0E3] dark:border-gray-200 dark:bg-gray-950 dark:text-white"
              required
            />

            <textarea
              placeholder="Message..."
              className="pb-44 pl-4 h-[230px] rounded-xl border-[1px] border-[#D0D0E3] dark:border-gray-200 dark:bg-gray-950 dark:text-white"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white rounded-lg w-[210px] py-2 bg-[#1DAEFF] ml-auto hover:bg-[#0c8fd6] transition-colors duration-300"
            >
              SEND
            </button>
          </form>

          <div className="w-full lg:w-[40%] pr-0 lg:pr-20">
            <p className="text-[32px] font-[600] text-black dark:text-white">Contact Information</p>
            <p className="text-[#585981DE] dark:text-gray-400 text-[18px] mt-2">
              Say something to start a live chat!
            </p>

            <div className="pt-10 text-[#585981] dark:text-gray-300 flex flex-col gap-6">
              <a href="tel:+10123456789" className="flex items-center gap-5 hover:text-[#1DAEFF] transition-colors">
                <BiSolidPhoneCall className="text-[24px]" /> <p>+1012 3456 789</p>
              </a>
              <a href="mailto:demo@gmail.com" className="flex items-center gap-5 hover:text-[#1DAEFF] transition-colors">
                <BiSolidEnvelope className="text-[24px]" /> <p>demo@gmail.com</p>
              </a>
              <a href="#" className="flex items-start gap-5 hover:text-[#1DAEFF] transition-colors">
                <IoLocationSharp className="text-[24px] mt-1" />
                <p className="w-[288px]">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
              </a>
            </div>

            <div className="flex gap-7 pt-10 text-[#585981] dark:text-gray-300">
              <FaFacebook className="text-[25px] text-[#1877F2] dark:text-white hover:text-[#1877F2] transition-colors" />
              <FaTwitter className="text-[25px] text-[#1DA1F2] dark:text-white hover:text-[#1DA1F2] transition-colors" />
              <FaInstagram className="text-[25px] text-[#EC3397] dark:text-white hover:text-[#EC3397] transition-colors" />
              <FaLinkedin className="text-[25px] text-[#0A66C2] dark:text-white hover:text-[#0A66C2] transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
