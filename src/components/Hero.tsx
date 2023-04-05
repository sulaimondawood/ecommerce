import HeroI from "../assets/19.png";
import Frame from "../assets/Frame.svg";
import Vector from "../assets/Vector.svg";
import Secure from "../assets/secure.svg";

export default function Hero() {
  return (
    <section className="bg-m-gray px-4 relative">
      <div className="flex flex-col md:flex-row w-full lg:px-40 container py-14 lg:py-20 items-center space-y-6 lg:space-y-0 justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-body2 lg:text-head1 uppercase  font-light">
            Collections
          </h1>
          <p className=" lg:text-head4 sm:w-4/5 pb-6 lg:pb-10 capitalize w-full md:max-w-md lg:leading-[44px] text-center text-black">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-m-blue flex gap-2 py-4 lg:py-5 px-4 lg:px-7">
            <img src={Secure.src} alt="" />
            <p className="text-white lg:text-head4">Shop Now</p>
          </button>
        </div>
        <div className="relative w-auto lg:w-[500px] ">
          <img
            className="rounded-tl-[20%] w-full h-[450px]  lg:h-[550px] object-cover object-center rounded-br-[20%] "
            src={HeroI.src}
            alt=""
          />
          <div className="w-full rounded-tl-[20%] rounded-br-[20%] h-[450px] border absolute top-3 left-3 lg:top-5 lg:left-5 -z-10 "></div>
        </div>
      </div>
      <img
        className="w-24 -z-10 absolute -bottom-8 lg:bottom-[130px] left-0"
        src={Frame.src}
        alt=""
      />
      <img
        className="absolute -z-10 bottom-32 right-0"
        src={Vector.src}
        alt=""
      />
    </section>
  );
}
