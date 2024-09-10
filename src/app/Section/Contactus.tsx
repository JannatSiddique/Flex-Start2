import { FiPhone, FiMapPin, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  const cards4 = [
    {
      icons: <FiMapPin className="text-3xl text-blue-700" />,
      title: 'Address',
      text: 'A108 Adam Street\nNew York, NY 535022',
    },
    {
      icons: <FiPhone className="text-3xl text-blue-700" />,
      title: 'Call Us',
      text: '+1 5589 55488 55\n+1 6678 254445 41',
    },
    {
      icons: <FiMail className="text-3xl text-blue-700" />,
      title: 'Email Us',
      text: 'info@example.com\ncontact@example.com',
    },
    {
      icons: <FiClock className="text-3xl text-blue-700" />,
      title: 'Open Hours',
      text: 'Monday - Friday\n9:00AM - 05:00PM',
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
          <h3 className="">CONTACT</h3>
        </div>
        <div className="mt-0 mb-8">
          <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
            <h3>Contact Us</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mb-32">
        {/* Left Section: Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {cards4.map((item, index) => (
            <div
              key={index}
              className=" bg-slate-100 w-[250px] h-[250px] p-6 flex flex-col items-center justify-center text-center"
            >
                <div className="flex items-center space-x-4">
  <div className='mb-8'>{item.icons}</div>
</div>
<h3 className="text-lg text-blue-900 font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.text.split('\n').map((line: string, index: number) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section: Form */}
        <div className="bg-slate-100 p-6 ">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Message"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 py-2 px-4 bg-blue-700 rounded-lg text-white r"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
