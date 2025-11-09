function HomePage() {
    return (
        <>
            <div className="relative overflow-hidden">

                 <img src="/green.png" alt="" className="absolute top-[620px] right-0 -z-10" />
                 <img src="/orange.png" alt="" className="absolute top-[1600px] left-0 -z-10" />
                 <img src="/orange.png" alt="" className="absolute top-[2770px]  -z-10" />
                 <img src="/green.png" alt="" className="absolute top-[3420px] right-0 -z-10" />

                <Header />
                <Slide1 />
                <Slide2 />
                <Slide3 />
                <Footer />
            </div>
        </>)
}
export default HomePage