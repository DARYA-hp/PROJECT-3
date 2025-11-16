import { RiUserLine } from "react-icons/ri";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative w-full h-screen bg-[url('/40.jpg')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative w-[420px] p-8 bg-transparent">
                    <div className="text-center mb-8">
                        <img src="/Logo (2).png" alt="" className="mx-auto pb-4" />
                        <p className="text-[24px] font-[700] text-[#e7e0e0]">Create your account</p>
                    </div>

                    <form className="flex flex-col gap-3">
                        <div className="flex items-center pl-4 rounded-2xl bg-white w-full h-[47px]">
                            <RiUserLine className="text-[24px] text-[#8F90A6]" />
                            <input type="text" placeholder="Email Address" className="outline-none pl-2 w-full" required />
                        </div>

                        <div className="flex items-center pl-4 rounded-2xl bg-white w-full h-[47px]">
                            <TbLockPassword className="text-[24px] text-[#8F90A6]" />
                            <input type="password" placeholder="Password" className="outline-none pl-2 w-full" required />
                        </div>

                        <div className="flex items-center pl-4 rounded-2xl bg-white w-full h-[47px]">
                            <TbLockPassword className="text-[24px] text-[#8F90A6]" />
                            <input type="password" placeholder="Confirm your password" className="outline-none pl-2 w-full" required />
                        </div>

                        <div className="pt-2 flex justify-between items-center text-white text-sm">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" required />
                                <p className="text-[#1DAEFF]">Remember me</p>
                            </div>
                            <a href="" className="text-[#1DAEFF]">Forgot Password?</a>
                        </div>

                        <button type="submit" className="mt-4 text-white rounded-2xl bg-[#1DAEFF] w-full py-3">
                            CREATE ACCOUNT
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <p className="text-[#8F90A6]">
                            Already have an account?{" "}
                            <span className="text-[#1DAEFF] cursor-pointer" onClick={() => navigate("/SignIn")}>
                                Sign in
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;

