import { RiUserLine } from "react-icons/ri";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="relative bg-[url('/23.jpg')] h-screen bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black/60">
                <div className="ml-[480px] mt-20 w-[411px]">
                    <div className="text-center mb-8">
                        <img src="/Logo (2).png" alt="" className="pb-12 ml-[100px]" />
                        <p className="text-[24px] font-[700] text-[#e7e0e0]">Create your account</p>
                    </div>

                    <form className="flex flex-col gap-3">
                        <div className="flex flex-row items-center pl-4 rounded-2xl bg-white w-[411px] h-[55px]">
                            <RiUserLine className="text-[24px] text-[#8F90A6]" />
                            <input  type="text"  placeholder="Email Address"
                                className="outline-none pl-2 w-full"  required />
                        </div>

                        <div className="flex flex-row items-center pl-4 rounded-2xl bg-white w-[411px] h-[55px] mt-3">
                            <TbLockPassword className="text-[24px] text-[#8F90A6]" />
                            <input  type="password"
                                placeholder="Password"  className="outline-none pl-2 w-full"  required/>
                        </div>

                        <div className="flex flex-row items-center pl-4 rounded-2xl bg-white w-[411px] h-[55px] mt-3">
                            <TbLockPassword className="text-[24px] text-[#8F90A6]" />
                            <input  type="password"
                                placeholder="Confirm your password"   className="outline-none pl-2 w-full"  required />
                        </div>

                        <div className="pt-3 flex flex-row w-[411px] justify-between items-center text-white">
                            <div className="flex flex-row items-center gap-2">
                                <input type="checkbox" required />
                                <p className="text-[#1DAEFF]">Remember me</p>
                            </div>
                            <a href="" className="text-[#1DAEFF]">
                                Forgot Password?
                            </a>
                        </div>

                        <button type="submit"
                            className="mt-5 text-white rounded-2xl bg-[#1DAEFF] w-[411px] py-3">
                            CREATE ACCOUNT
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <p className="text-[#8F90A6]">
                            Already have an account?{" "}
                            <span className="text-[#1DAEFF] cursor-pointer" onClick={() => navigate("/SignIn")} >
                                Sign in
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
