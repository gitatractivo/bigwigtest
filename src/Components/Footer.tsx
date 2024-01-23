import logo from "../assets/Logo.png";


const Footer =()=>{
    return(
        <div className="flex flex-col items-center gap-[25px] shrink-0 justify-center w-1280 h-285">
            <div className="inline-flex items-start gap-[102px]">
                <div className="flex flex-col items-start justify-center gap-[18px] w-[303px] h-[167px]">
                    <div className="flex flex-row items-center gap-[24px]">
                    <img src={logo} alt="" />
                    <div className="text-gray-900 font-Outfit text-30.699 font-semibold leading-normal">BigWigMedia.ai</div>
                    </div>
                    <div className="flex flex-col items-start gap-[21px]">
                    <div className="text-black font-Outfit text-base font-medium leading-normal">BigWig Media AI Tools</div>
                    <div className="text-black font-Outfit text-base font-medium leading-normal">S-1, 3rd Floor, Janta Market,
                    Rajouri Garden, New Delhi, 110027</div>
                    </div>
                </div>
                <div className="flex flex-row justify-start gap-[83px]">
                    <div className="flex flex-col items-start gap-[21px]">
                        <div className="text-black font-Outfit text-22.7 font-semibold">Top Tools</div>
                        <div className="flex flex-col items-start gap-[5px]">
                            <div className="text-black font-Outfit text-base font-medium leading-normal">X (Twitter) Bio Generator</div>
                            <div className="text-black font-Outfit text-base font-medium leading-normal">Instagram Bio Generator</div>
                            <div className="text-black font-Outfit text-base font-medium leading-normal">All Blog Writer</div>
                            <div className="bg-gradient-to-br from-yellow-400 via-red-600 to-purple-600 bg-clip-text text-transparent">View All Tools </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[21px]">
                        <div className="text-black font-Outfit text-22.7 font-semibold">Company</div>
                        <div className="flex flex-col items-start gap-[5px]">
                            <div className="text-black font-Outfit text-base font-medium leading-normal">About Us</div>
                            <div className="text-black font-Outfit text-base font-medium leading-normal">Contact</div>
                            <div className="text-black font-Outfit text-base font-medium leading-normal">Blog</div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[21px]">
                        <div className="text-black font-Outfit text-22.7 font-semibold">Legal</div>
                        <div className="flex flex-col items-start gap-[5px]">
                            <div className="text-black font-Outfit text-base font-medium leading-normal">Terms of Service</div>
                            <div className="text-black font-Outfit text-base font-medium leading-normal">Privacy Policy</div>
                            <div className="text-black font-Outfit text-base font-medium leading-normal">Secure Transaction Policy</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black font-Outfit text-base font-medium leading-normal">
            © 2024 Bigwigmedia.ai. All rights reserved.
            </div>
            
        </div>
    );
};

export default Footer;