import logo from "../assets/Logo.png";


const Footer =()=>{
    return (
      <div className="flex flex-col relative items-center gap-[25px] shrink-0 my-14 border-t pt-8 justify-center w-1280 h-285">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="231"
          height="252"
          viewBox="0 0 231 252"
          fill="none"
          className="absolute top-0 right-0 z-0 translate-x-1/2 -translate-y-1/2"
        >
          <g opacity="0.7">
            <g opacity="0.7" filter="url(#filter0_f_231_180)">
              <ellipse
                cx="186.5"
                cy="33.5"
                rx="58.5"
                ry="60.5"
                fill="#9E00FF"
              />
            </g>
            <g opacity="0.7" filter="url(#filter1_f_231_180)">
              <ellipse
                cx="268.5"
                cy="72.5"
                rx="58.5"
                ry="60.5"
                fill="#1473E6"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_231_180"
              x="0.800003"
              y="-154.2"
              width="371.4"
              height="375.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="63.6"
                result="effect1_foregroundBlur_231_180"
              />
            </filter>
            <filter
              id="filter1_f_231_180"
              x="82.8"
              y="-115.2"
              width="371.4"
              height="375.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="63.6"
                result="effect1_foregroundBlur_231_180"
              />
            </filter>
          </defs>
        </svg>
        <div className="inline-flex items-start gap-[102px]">
          <div className="flex flex-col items-start justify-center gap-[18px] w-[303px] h-[167px]">
            <div className="flex flex-row items-center gap-[24px]">
              <img src={logo} alt="" />
              <div className="text-gray-900 font-Outfit text-30.699 font-semibold leading-normal">
                BigWigMedia.ai
              </div>
            </div>
            <div className="flex flex-col items-start gap-[21px]">
              <div className="text-black font-Outfit text-base font-medium leading-normal">
                BigWig Media AI Tools
              </div>
              <div className="text-black font-Outfit text-base font-medium leading-normal">
                S-1, 3rd Floor, Janta Market, Rajouri Garden, New Delhi, 110027
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-[83px]">
            <div className="flex flex-col items-start gap-[21px]">
              <div className="text-black font-Outfit text-22.7 font-semibold">
                Top Tools
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  X (Twitter) Bio Generator
                </div>
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  Instagram Bio Generator
                </div>
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  All Blog Writer
                </div>
                <div className="bg-gradient-to-br from-yellow-400 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  View All Tools{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[21px]">
              <div className="text-black font-Outfit text-22.7 font-semibold">
                Company
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  About Us
                </div>
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  Contact
                </div>
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  Blog
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[21px]">
              <div className="text-black font-Outfit text-22.7 font-semibold">
                Legal
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  Terms of Service
                </div>
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  Privacy Policy
                </div>
                <div className="text-black font-Outfit text-base font-medium leading-normal">
                  Secure Transaction Policy
                </div>
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