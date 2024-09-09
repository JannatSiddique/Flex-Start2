import React from "react";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
import { FaRegPlayCircle } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row items-center mt-10 w-[90%] mx-auto">

      {/* Left Side Text Section */}
      <div className="md:w-1/2 md:mr-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
          We offer modern solutions for growing your business
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          We are a team of talented designers making websites with Bootstrap.
        </p>

        <div className="flex space-x-4">
          <button className="bg-blue-700 text-white px-3 py-3 w-44 mt-1 rounded-md flex items-center justify-center">
            Get Started 
            <FaArrowRight className="ml-2" />
          </button>
          <button className="flex items-center px-5 py-2 rounded-full">
            <FaRegPlayCircle className="text-3xl mr-2 text-blue-700" />
            Watch Video
          </button>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 animate-upDown">
        <Image
          src="/hero-img.png" 
          alt="Illustration of people working on a laptop"
          width={500}
          height={400}
        />
      </div>
    </main>
  );
};

export default HeroSection;
