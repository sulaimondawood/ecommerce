import HeroI from "../assets/19.png";
import Frame from "../assets/Frame.svg";
import Vector from "../assets/Vector.svg";
import Secure from "../assets/secure.svg";

export default function Hero() {
  return (
    <section className="bg-m-gray relative">
      <div className="flex w-full lg:px-40 container lg:py-20 items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-head1  pb-10 font-light">Collections</h1>
          <p className="text-head4 pb-10 capitalize w-full lg:max-w-lg leading-[44px] text-black">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-m-blue flex gap-2 py-5 px-7">
            <img src={Secure.src} alt="" />
            <p className="text-white text-head4">Shop Now</p>
          </button>
        </div>
        <div className="relative w-[500px] ">
          <img
            className="rounded-tl-[30%] w-full h-[550px] object-cover object-center rounded-br-[30%] "
            src={HeroI.src}
            alt=""
          />
          <div className="w-full rounded-tl-[30%] rounded-br-[30%] h-[550px] border absolute top-5 left-5 -z-10 "></div>
        </div>
      </div>
      <img className="absolute bottom-[130px] left-0" src={Frame.src} alt="" />
      <img className="absolute bottom-32 right-0" src={Vector.src} alt="" />
    </section>
  );
}
