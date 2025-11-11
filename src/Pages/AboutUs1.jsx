import AboutHeader from "../components/AboutHeader"
import AboutS1 from "../components/AboutS1"
import AboutS2 from "../components/AboutS2"
import AboutSlide3 from "../components/AboutS3"

function AboutUs1(){
    return(
        <>
          <div className=" relative overflow-hidden">
            <img src="/image7.png" alt="" className=" w-52 h-48 absolute top-[670px] right-14 translate-y-1/2 -translate-x-1/2"/>
            <img src="/image6.png" alt="" className=" w-20 h-24 absolute top-[780px] right-14 translate-y-1/2 -translate-x-1/2"/>
            <img src="/image7.png" alt="" className=" w-64 h-60 absolute top-[760px] -right-24 translate-y-1/2"/>


             
            <img src="/image7.png" alt="" className=" w-56 h-52 absolute top-[1720px] -left-24 translate-y-1/2"/>
            <img src="/image8.png" alt="" className=" w-20 h-20 absolute top-[1870px] left-10 translate-y-1/2"/>
            <img src="/image7.png" alt="" className=" w-56 h-52 absolute top-[1850px] left-24 translate-y-1/2"/>
            <img src="/image7.png" alt="" className=" w-56 h-52 absolute top-[1950px] -left-28 translate-y-1/2"/>


       
        <AboutHeader/>
        <AboutS1/>
        <AboutS2/>
        <AboutSlide3/>

            </div>
      
        </>
    )
}
export default AboutUs1