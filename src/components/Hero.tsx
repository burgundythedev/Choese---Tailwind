import { useState } from "react";
import { shoes, statistics } from "../models";
import ShoeSlide from "./CardComponents/ShoeSlide";
import bigShoe1 from "../assets/images/big-shoe1.png";
import arrowRight from "../assets/icons/arrow-right.svg";
import Button from "../Layout/Button";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat">Our Limited collections</p>
        <h1 className="mt-10 font-Sixtyfour text-4xl max-sm:text-[30px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 py-4 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-custom-blue inline-block mt-3">All</span> Brands
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover new stylish Brands arrivals, quality comfort, and innovation
          for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-blue-background">
        <img
          src={bigShoeImg}
          alt="shoecollection"
          width={500}
          height={500}
          className="object-contain relative z-10 animate-spin-slow stop-animation"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeSlide
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
