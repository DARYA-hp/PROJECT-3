import MarketHeader from "../Components/MarketHeader";
import MarketS1 from "../Components/MarketS1";

function Market() {
  return (
    <>
      <div className="relative overflow-hidden pt-10 bg-white dark:bg-black  ">

        <img src="/orange.png" alt="" className="absolute top-[1700px] left-0 z-10" />
        <img src="/green.png" alt="" className="absolute top-[700px] right-0 z-10" />
        <div className="relative z-10 ">
          <MarketHeader />
          <MarketS1 />
        </div>

      </div>
    </>
  );
}

export default Market;
