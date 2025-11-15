function MarketHeader(){
    return(
        <>
        <div className=" flex flex-row bg-[#80B2DF]  w-full h-[335px] items-center">
            <div className="  items-center pl-28">
                <div>
                <h1 className=" text-6xl font-semibold font-Montserrat text-[#FFFFFF] leading-[100%] pb-5">Marketplace</h1>    
                </div>
                <div>
                    <p className=" text-[22px] font-normal font-Poppins leading-9 text-[#FFFFFF] w-[60%]">We provide a complete service for the sale, purchase or rental of real estate.</p>
                </div>
            </div>
            <div>
                <img src="/image1.png" alt="" className=" ml-32 w-64 h-[336px]"/>
            </div>
        </div>
        
        </>
    )
}
export default MarketHeader