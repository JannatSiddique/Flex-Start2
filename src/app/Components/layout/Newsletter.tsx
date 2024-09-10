const Newsletter = () => {
    return (
      <section className="bg-gray-50 py-10 border-t ">
        <div className="text-center mb-8 mt-2">
          <h2 className="text-xl font-bold text-blue-900">Join Our Newsletter</h2>
          <p className="text-gray-600 text-sm">Subscribe to our newsletter and receive the latest news about our products and services!</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md relative">
            <input
              type="email"
              className="w-full h-12 p-4 border border-gray-300 shadow-sm  "
              placeholder="Enter your email"
            />
            <button className="absolute top-0 right-0 h-full px-6 text-white bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    );
  };
  export default Newsletter;