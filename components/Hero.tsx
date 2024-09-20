import BlueArrow from "@/public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "@/public/assets/Gradient.svg";
import HeroImage from "@/public/assets/Image.svg";
import Google from "@/public/assets/Google.svg";
import Trustpilot from "@/public/assets/Trustpilot.svg";
import Slack from "@/public/assets/Slack.svg";
import CNN from "@/public/assets/CNN.svg";
import Clutch from "@/public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8 pb-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-5 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlueArrow} alt="blue-btn" />
            </span>
          </button>
        </div>
       
      </div>
      <div className="relative flex h-full w-full justify-center">
          <Image
            src={Gradient}
            alt="Gradient"
            className="min-h-[500px] w-full object-cover lg:h-auto"
          />
          <div className="absolute bottom-5 flex w-full flex-col items-center">
            <Image
              src={HeroImage}
              alt="hero-image"
              className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28x lg:h-auto xl:w-[70%]"
            />
            <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between">
              <p className="text-center text-[#ffffff] lg:text-[18px]">
                Trusted by this companies
              </p>
              <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                <Image src={Google} alt="Google" />
                <Image src={Trustpilot} alt="Trustpilot" />
                <Image src={Slack} alt="Slack" />
                <Image src={CNN} alt="CNN" />
                <Image src={Clutch} alt="Clutch" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
