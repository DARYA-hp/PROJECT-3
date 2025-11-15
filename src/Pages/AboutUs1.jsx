import AboutHeader from "../Components/AboutHeader"
import AboutS1 from "../Components/AboutS1"
import AboutS2 from "../Components/AboutS2"
import AboutSlide3 from "../Components/AboutSlide3"

function AboutUs1() {
    return (
        <>
            <div className=" relative overflow-hidden">

                <img src="/green.png" alt="" className="absolute top-[670px] right-0 z-[1] " />
                <img src="/orange.png" alt="" className="absolute top-[1700px] left-0 z-[1] " />
                <img src="/orange.png" alt="" className="absolute top-[2600px] left-0 -z-10 " />



                <AboutHeader />
                <AboutS1 />
                <AboutS2 />
                <AboutSlide3 />

            </div>

        </>
    )
}
export default AboutUs1