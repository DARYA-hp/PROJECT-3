function Header(){
    return(
        <>
        <div className=" flex flex-row  justify-between px-[75px] pt-6 ">
            <div>
                <img src="/Logo (1).png" alt="" />
            </div>
            <div className=" flex  flex-row justify-center items-center gap-12">
                <ul className="flex gap-20 text-[16px] font-[600]">
                    <li>HOME</li>
                    <li>MARKET</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                </ul>
                <button className=" text-[16px] font-[600] text-[#1DAEFF] border-2 border-[#1DAEFF] py-[7px] px-[32px] rounded-xl">LOG IN</button>
            </div>
        </div>
        </>
    )
}
export default Header