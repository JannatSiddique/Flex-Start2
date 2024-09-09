import Image from "next/image";
import React from "react";
import { FaArrowRight } from 'react-icons/fa';



const Pricing: React.FC = () => {
  const pricing = [
    {
      src: '/cube.png',
      alt: 'cubeicon',
      title: 'Free Plan',
      price: '$0 / mo',
      Color:'text-green-700',
      description: 'Aida dere\nNec feugiat nisl\nNulla at volutpat dola\nPharetra massa\nMassa ultricies mi',
      
    },
    {
      src: '/paper.png',
      alt: 'papericon',
      title: 'Starter Plan',
      price: '$19 / mo',
      Color:'text-blue-500',
      description: 'Aida dere\nNec feugiat nisl\nNulla at volutpat dola\nPharetra massa\nMassa ultricies mi',
    },
    {
      src: '/plane.png',
      alt: 'planeicon',
      title: 'Business Plan',
      price: '$29 / mo',
      Color:'text-orange-600',
      description: 'Aida dere\nNec feugiat nisl\nNulla at volutpat dola\nPharetra massa\nMassa ultricies mi',
    },
    {
      src: '/rocket.png',
      alt: 'rocketicon',
      title: 'Ultimate Plan',
      price: '$49 / mo',
      Color:'text-blue-700',
      description: 'Aida dere\nNec feugiat nisl\nNulla at volutpat dola\nPharetra massa\nMassa ultricies mi',
      
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <div className="w-28 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
        <h3>PRICING</h3>
      </div>
      <div className="mt-0">
        <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
          <h3>Check Our Affordable Pricing</h3>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
  {pricing.map((item, index) => (
    <div
      key={index}
      className={`border p-6 shadow-2xl rounded-md w-[280px] h-[500px] flex flex-col items-center text-center mt-8 transition-transform duration-500 transform hover:scale-110 `}
    >
    <h3 className={`text-lg font-bold  mt-2 ${item.Color}`}>
        {item.title}
      </h3>
       
      <h3 className="text-3xl font-semibold  mt-4 text-blue-900">
        {item.price}
      </h3> 

      <Image
        src={item.src}
        alt={item.alt}
        width={60}
        height={60}
        className="object-cover rounded-lg  mt-6 "
      />
      
      <p className=" mt-4 leading-relaxed font-normal">
      {item.description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
      </p>
      <button className=' mt-10 outline outline-2 outline-blue-500 font-semibold py-2 px-10 text-blue-700 rounded-2xl bg-transparent group hover:bg-blue-700 hover:text-white duration-300 hover:font-bold' > 
             Buy Now
    </button>


      

    </div>
  ))}
</div>
</div>
)};

export default Pricing;
