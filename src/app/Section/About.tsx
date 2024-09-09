import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Cards from '../Components/layout/Card';
import Cards2 from '../Components/layout/Card2';
import Card3 from '../Components/layout/Card3';
import Card4 from '../Components/layout/Card4';
//test
const About: React.FC = () => {
  return (
    <div className="relative w-[90%] mx-auto mt-28">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Text Section */}
        <div className="relative z-10 md:w-[50%] p-4 bg-blue-100 pl-10">
          <h1 className="text-sm font-semibold text-blue-700 font-serif mt-2">WHO WE ARE</h1>
          <h2 className="text-2xl font-bold text-blue-900 leading-relaxed mt-5">
            Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mt-4 ">
            Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et.<br />
            Inventore et et dolor consequatur itaque ut voluptate sed et.<br />
            Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
          </p>
          <button className="bg-blue-700 text-white px-5 py-3 w-44 mt-5 mb-7 rounded-md flex items-center justify-center hover:bg-blue-800 transition-all">
            Read More
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Side Image Section */}
        <div className="relative md:w-[50%] mt-10 md:mt-0">
          <Image
            src="/about.jpg"
            alt="Illustration of people"
            width={600}
            height={700}
            className="shadow-lg object-cover h-[430px]"
          />
          {/* Overlap Styling */}
          <div className="absolute top-0 left-[-30px] h-full w-full  z-[-1] "></div>
        </div>
      </div>

      {/* OUR VALUES  */}
      <div className="flex flex-col items-center justify-center mt-28 ">
        <div className="w-28 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
          <h3>OUR VALUES</h3>
        </div>
        <div className="mt-0">
          <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
            <h3>What we value most</h3>
          </div>
        </div>
      </div>

     {/* Cards */}
        <Cards/> 
        <Cards2/>
        
  {/* Features */}

        <div className="flex flex-col items-center justify-center mt-28 ">
        <div className="w-28 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
          <h3>FEATURES</h3>
        </div>
        <div className="mt-0">
          <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
            <h3>Our Advacedd Features</h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between mb-24 gap-6' > 

       {/* right side content */}
       <div className="md:w-1/2 mt-10 md:mt-0 ">
        <Image
          src="/features.png" 
          alt="illustration of people fixing"
          width={600}
          height={700}
          className='mt-16'
        />
      </div>
       <Card3/>
      </div> 

       {/* alt-feature  */}

      <div className="flex flex-col md:flex-row items-start justify-between mt-10 gap-8 mb-24">

      <Card4/>

 {/* Image Section (Right Side) */}
 <div className="w-[50%] mt-10 md:mt-0">
 <Image
          src="/alt-features.png" 
          alt="Illustration of people working on a laptop"
          width={450}
          height={450}
        />
      </div>
       
</div>
    </div>
    
  );
};

export default About;
