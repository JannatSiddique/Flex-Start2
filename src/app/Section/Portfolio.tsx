"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineLink, AiOutlineZoomIn } from "react-icons/ai";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalCaption, setModalCaption] = useState<string | null>(null);

  const imagesData = [
    { id: 1, category: "Branding", url: "/portfolio/branding-1.jpg", caption: "Branding 1" },
    { id: 2, category: "Branding", url: "/portfolio/branding-2.jpg", caption: "Branding 2" },
    { id: 3, category: "App", url: "/portfolio/app-1.jpg", caption: "App 1" },
    { id: 4, category: "App", url: "/portfolio/app-2.jpg", caption: "App 2" },
    { id: 5, category: "Product", url: "/portfolio/product-1.jpg", caption: "Product 1" },
    { id: 6, category: "Books", url: "/portfolio/books-1.jpg", caption: "Books 1" },
    { id: 7, category: "Branding", url: "/portfolio/branding-3.jpg", caption: "Branding 3" },
    { id: 8, category: "App", url: "/portfolio/app-3.jpg", caption: "App 3" },
    { id: 9, category: "Product", url: "/portfolio/product-2.jpg", caption: "Product 2" },
    { id: 10, category: "Books", url: "/portfolio/books-2.jpg", caption: "Books 2" },
    { id: 11, category: "Books", url: "/portfolio/books-3.jpg", caption: "Books 3" },
    { id: 12, category: "Branding", url: "/portfolio/app-3.jpg", caption: "Branding 4" },
  ];

  const filteredImages =
    filter === "All"
      ? imagesData
      : imagesData.filter((image) => image.category === filter);

  const handleZoomClick = (url: string, caption: string) => {
    setModalImage(url);
    setModalCaption(caption);
  };

  const handleCloseModal = () => {
    setModalImage(null);
    setModalCaption(null);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-col items-center justify-center mt-28">
        <div className="w-28 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
          <h3>PORTFOLIO</h3>
        </div>
        <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2">
          <h3>Check our latest work</h3>
        </div>
      </div>

      <div className="navbar w-[90%] mx-auto">
        <ul className="flex justify-center items-center space-x-4 w-full">
          {["All", "App", "Product", "Branding", "Books"].map((category) => (
            <li
              key={category}
              className={`hover:bg-transparent hover:text-blue-500 cursor-pointer ${
                filter === category ? "text-blue-700" : ""
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative w-full h-64 group">
            <Image
              src={image.url}
              alt={`Portfolio image ${image.id}`}
              fill
              className="object-cover"
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <div className="flex space-x-4">
                <button
                  onClick={() => handleZoomClick(image.url, image.caption)}
                  className="text-white text-2xl"
                >
                  <AiOutlineZoomIn/>
                </button>
                <button className="text-white text-2xl">
                  <AiOutlineLink />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for zoomed image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-2xl text-gray-700"
            >
              ✖
            </button>
            <div className="relative w-[750px] h-[500px]">
              <Image
                src={modalImage}
                alt="Zoomed portfolio"
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="text-center mt-4 text-lg font-semibold">{modalCaption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
