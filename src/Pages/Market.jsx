import MarketHeader from "../Components/MarketHeader"
import MarketS1 from "../Components/MarketS1"
function Market() {
    return (
        <>
            <div className="relative overflow-hidden">
{/* 
            <img src="/image7.png" alt="" className=" w-56 h-52 absolute right-40 top-[600px] translate-y-1/2 z-0"/>
            <img src="/image6.png" alt="" className=" w-24 h-24 absolute right-24 top-[750px] z-0" />
            <img src="/image7.png" alt="" className=" w-64 h-60 absolute -right-20 top-[700px] translate-y-1/2 z-0" /> */}

               <MarketHeader />
                <MarketS1/>
              
                {/* <img src="/image7.png" alt="" className=" w-56 h-52 absolute -left-28 bottom-64 -translate-y-1/2 z-0" />
                <img src="/image8.png" alt="" className=" w-24 h-24 absolute left-2 bottom-96 -z-10" />
                <img src="/image7.png" alt="" className=" w-56 h-52 absolute left-20 bottom-56 -z-10" />
                <img src="/image7.png" alt="" className=" w-56 h-52 absolute -left-32 bottom-32 z-0" /> */}
              
            </div>
        </>
    )
}
export default Market