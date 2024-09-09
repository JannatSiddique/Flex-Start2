"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number; // Rating out of 5
  image: string;
  icon: React.ComponentType;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    icon: FaStar,
    name: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/test/testimonials-1.jpg",
    rating: 4, // Adjust rating as needed
  },
  {
    id: 2,
    name: "Jane Smith",
    icon: FaStar,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/test/testimonials-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sam Wilson",
    icon: FaStar,
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/test/testimonials-3.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Sara Lee",
    icon: FaStar,
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/test/testimonials-4.jpg",
    rating: 2,
  },
  {
    id: 5,
    name: "Alex Johnson",
    icon: FaStar,
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/test/testimonials-5.jpg",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    dots: true,
    customPaging: (i: number) => (
      <button className="dot" />
    ),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    
    <div className="">
      <div className="flex flex-col items-center justify-center mt-28">
      <div className="w-32 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2">
        <h3>TESTIMONIALS</h3>
      </div>
      <div className="mt-0">
        <div className="text-center text-3xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
          <h3>What they are saying about us</h3>
        </div>
      </div>
      </div>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => {
          // Create an array of stars based on the rating
          const stars = Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ));

          return (
            <div key={testimonial.id} className="px-12">
              <div className="relative p-6 rounded-lg h-95 w-80 mt-16 mb-8 bg-white shadow-lg transform transition-all duration-300 ease-in-out">
                <div className="flex justify-center mb-4">
                  {stars} 
                </div>
                <p className="text-center text-gray-700 mb-4">
                  {testimonial.content}
                </p>
                <h3 className="text-center text-lg font-semibold mb-4">
                  {testimonial.name}
                </h3>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={80}
                    width={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
