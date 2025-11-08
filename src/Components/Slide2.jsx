function Slide2() {
    const countries = [
        { img: "/9.jpg", name: "AMERICA" },
        { img: "/10.jpg", name: "SPAIN" },
        { img: "/11.jpg", name: "LONDON" },
        { img: "/12.jpg", name: "FRANCE" },
    ];

    return (
        <>
            <div className="pt-28 flex flex-row justify-between px-28">
                <div>
                    <img src="/6.png" alt="" className="w-[538px] h-[494px]" />
                </div>
                <div className="flex flex-col">
                    <img src="/5.png" alt="" className="w-[63px] h-[67px]" />
                    <div className="py-3 w-[560px]">
                        <p className="leading-[1.3] text-[48px] font-[600] pt-3">
                            Fusce placerat enim et odio molestie sagittis
                        </p>
                        <p className="text-[22px] pt-8 font-[400] text-[#585981DE]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between px-36 pt-28">
                <div className="gap-4">
                    <img src="/7.png" alt="" className="w-[66px] h-[77px]" />
                    <p className="pt-3 text-[48px] font-[600]">Pellentesque ac tortor</p>
                    <p className="pt-4 w-[550px] text-[22px] font-[400] text-[#585981DE]">
                        Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.
                    </p>
                </div>
                <div>
                    <img src="/8.png" alt="" />
                </div>
            </div>

            <div className="pt-28">
                <div className="flex text-center justify-center">
                    <p className="w-[480px] text-[38px] font-[600]">We are available in many well-known countries</p>
                </div>
                <div className="flex flex-row justify-between px-28 pt-14">
                    {countries.map((country, index) => (
                        <div key={index} className={`bg-[url('${country.img}')] w-[260px] h-[410px] bg-cover rounded-3xl`}>
                            <p className="text-[24px] font-[600] text-center pt-12">{country.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slide2;
