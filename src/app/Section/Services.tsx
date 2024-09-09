import Image from "next/image";
import React from "react";
import { FaArrowRight } from 'react-icons/fa';

const Services: React.FC = () => {
  const service = [
    {
      src: '/rate.jpeg',
      alt: 'rate',
      title: 'Nesciunt Mete',
      description: 'Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.',
      hoverColor: 'hover:bg-blue-400',
      lineColor: 'bg-blue-500',
    },
    {
      src: '/signal.jpeg',
      alt: 'signal',
      title: 'Eosle Commodi',
      description: 'Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.',
      hoverColor: 'hover:bg-orange-500',
      lineColor: 'bg-orange-400',
    },
    {
      src: '/market.jpeg',
      alt: 'market',
      title: 'Ledo Markt',
      description: 'Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.',
      hoverColor: 'hover:bg-green-500',
      lineColor: 'bg-green-600',
    },
    {
      src: '/connect.png',
      alt: 'connect',
      title: 'Asperiores Commodi',
      hoverColor: 'hover:bg-red-800',
      lineColor: 'bg-red-600',
      description: 'Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.',
      
    },
    {
      src: '/temp.png',
      alt: 'temp',
      title: 'Velit Doloremque',
      description: 'Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.',
      hoverColor: 'hover:bg-purple-500',
      lineColor: 'bg-purple-400',
    },
    {
      src: '/text.png',
      alt: 'blacktee',
      title: 'Dolori Architecto',
      description: 'Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.',
      hoverColor: 'hover:bg-yellow-500',
      lineColor: 'bg-yellow-400',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <div className="w-28 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
        <h3>SERVICES</h3>
      </div>
      <div className="mt-0">
        <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
          <h3>Check Our Services</h3>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-14">
  {service.map((item, index) => (
    <div
      key={index}
      className={`border p-6 shadow-2xl rounded-md w-[350px] h-[400px] flex flex-col items-center text-center group transition duration-500 transform ${item.hoverColor}`}
    >
    
      <Image
        src={item.src}
        alt={item.alt}
        width={80}
        height={80}
        className="object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-90 mt-6"
      />
      <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-white">
        {item.title}
      </h3>
      <p className=" mb-4 leading-relaxed font-normal transition-colors group-hover:text-white">
        {item.description}
      </p>
      <button className={`mt-1 px-3 py-3 font-semibold bg-transparent flex items-center text-${item.hoverColor}`}>
  Read More <FaArrowRight className="ml-2" />
</button>


      {/* Unique hover color bottom line
      <div className="flex mt-32 w-[900px]">
  <div
    className="w-[80px] h-1 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-white"
    style={{ backgroundColor: item.lineColor }} // Use inline style for color
  />
</div> */}

    </div>
  ))}
</div>
</div>
)};

export default Services;
