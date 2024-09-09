"use client"
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; 


const ArrowIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <FaChevronDown
    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
  />
);

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div><p>hhkkn</p>
      <div className="flex flex-col items-center justify-center mt-28">
        <div className="w-20 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
          <h3>F.A.Q</h3>
        </div>
        <div className="mt-0">
          <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
            <h3>Frequently Asked Question</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-8">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
      
          <div className="border-b pb-4">
            <h3
              className="cursor-pointer hover:text-blue-700 font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(0)}
            >
              Non consectetur a erat nam at lectus urna duis?
              <ArrowIcon isOpen={openIndex === 0} />
            </h3>
            {openIndex === 0 && (
              <p className="text-gray-600 mt-2">
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.
              </p>
            )}
          </div>

          <div className="border-b pb-4">
            <h3
              className="cursor-pointer hover:text-blue-700 font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(1)}
            >
              Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
              <ArrowIcon isOpen={openIndex === 1} />
            </h3>
            {openIndex === 1 && (
              <p className="text-gray-600 mt-2">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.
              </p>
            )}
          </div>

        
          <div className="border-b pb-4">
            <h3
              className="cursor-pointer hover:text-blue-700 font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(2)}
            >
              Dolor sit amet consectetur adipiscing elit pellentesque?
              <ArrowIcon isOpen={openIndex === 2} />
            </h3>
            {openIndex === 2 && (
              <p className="text-gray-600 mt-2">
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
              </p>
            )}
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-4">
         
          <div className="border-b pb-4">
            <h3
              className="cursor-pointer hover:text-blue-700 font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(3)}
            >
              Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              <ArrowIcon isOpen={openIndex === 3} />
            </h3>
            {openIndex === 3 && (
              <p className="text-gray-600 mt-2">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.
              </p>
            )}
          </div>

      
          <div className="border-b pb-4">
            <h3
              className="cursor-pointer hover:text-blue-700 font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(4)}
            >
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
              <ArrowIcon isOpen={openIndex === 4} />
            </h3>
            {openIndex === 4 && (
              <p className="text-gray-600 mt-2">
                Molestie a iaculis at erat pellentesque adipiscing commodo.
              </p>
            )}
          </div>

   
          <div className="border-b pb-4">
            <h3
              className="cursor-pointer hover:text-blue-700 font-semibold flex justify-between items-center"
              onClick={() => toggleFaq(5)}
            >
              Perspiciatis quod quo quos nulla quo illum ullam?
              <ArrowIcon isOpen={openIndex === 5} />
            </h3>
            {openIndex === 5 && (
              <p className="text-gray-600 mt-2">
                Enim ea facilis quaerat voluptas quidem et dolorem.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
