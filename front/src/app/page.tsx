import Image from "next/image";
import { FC } from "react";
//Img
import backgroundImg from "./Img/landing_b.jpeg"

const LandingPage = () => {

  return(
    <div className="w-full flex justify-center">
      <div className="md:max-w-[1000px] flex flex-col md:flex-row md:items-baseline md:content-normal justify-center items-center content-center p-4 md:ml-6 mb-12 md:mb-0">
        <div className="w-1/2 h-1/2 flex justify-center items-center content-center">
          <Image src={backgroundImg} alt="Logo" className=" rounded-xl"></Image>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-white font-bold text-[20px] mt-3 md:mt-0 md:text-[50px] md:leading-[125px] text-left p-1 ml-4">
              <span className="block">Where</span>
              <span className="block">dreams and</span>
              <span className="block">technology</span>
              <span className="block">become reality</span>
          </h2>
          <div className="h-5 md:h-12 mt-3"> 
            <div className="w-full">
              <div className="md:w-1/2 bg-blue-700 md:h-auto md:ml-16 rounded-full p-5 flex justify-center hover:bg-blue-500">
                <a href="/Home" className="text-white font-semibold text-xl w-full text-center">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default LandingPage;
