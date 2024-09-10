import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';


const iconStyle = 'text-blue-900 bg-white rounded-lg shadow-lg';
const Footer = () => {
    return (
      <footer className="bg-white border-t py-12 ">
        <div className="container w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div>
            <h3 className="text-2xl text-blue-900 mb-4">FlexStart</h3>
            <p className="text-sm">A108 Adam Street</p>
            <p className="text-sm">New York, NY 535022</p>
            <p className="mt-2 text-sm">
              <span className="font-semibold text-sm ">Phone:</span> +1 5589 55488 55
            </p>
            <p>
              <span className="font-semibold text-sm">Email:</span> info@example.com
            </p>
          </div>
  
         
          <div>
            <h3 className="font-semibold text-blue-900 mb-4 text-sm">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-500 ">
              <li className="hover:text-blue-800">Home</li>
              <li className="hover:text-blue-800">About us</li>
              <li className="hover:text-blue-800">Services</li>
              <li className="hover:text-blue-800">Terms of service</li>
            </ul>
          </div>
  
          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-4 ">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-800">Web Design</li>
              <li className="hover:text-blue-800">Web Development</li>
              <li className="hover:text-blue-800">Product Management</li>
              <li className="hover:text-blue-800">Marketing</li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies.
            </p>
            <div className="flex space-x-4">
        <div className={iconStyle}>
          <FaFacebookF size={24} />
        </div>
        <div className={iconStyle}>
          <FaInstagram size={24} />
        </div>
        <div className={iconStyle}>
          <AiOutlineTwitter size={24} />
        </div>
        <div className={iconStyle}>
          <FaLinkedinIn size={24} />
        </div>
          </div>
        </div>
        </div>
      </footer>
    );
  };
export default Footer;  