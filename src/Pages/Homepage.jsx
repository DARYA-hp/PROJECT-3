import Slide1 from "../Components/Slide1"
import Slide2 from "../Components/Slide2"
import Slide3 from "../Components/Slide3"

function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-[4000px]">

        <img src="/green.png" alt="" className="absolute top-[560px] right-0 z-10" />
        <img src="/orange.png" alt="" className="absolute top-[1500px] left-0 z-10" />
        <img src="/orange.png" alt="" className="absolute top-[2670px] left-0 z-10" />
        <img src="/green.png" alt="" className="absolute top-[3350px] right-0 z-10" />

        <div className="relative z-10">
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </div>
      </div>
    </>
  )
}

export default HomePage;
