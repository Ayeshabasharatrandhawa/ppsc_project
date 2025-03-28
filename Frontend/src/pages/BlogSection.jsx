import React from "react";
import { User, Calendar } from "lucide-react"; // Importing icons

const blogs = [
  {
    title: "Everything You Need To Know About these PPSC",
    image: "/img1.png",
    date: "January 22, 2025",
  },
  {
    title: "Boost Your Exam Performance about these  Strategies",
    image: "/img1.png",
    date: "January 22, 2025",
  },
  {
    title: "Top Career Choices For A Bright  Future Future",
    image: "/img1.png",
    date: "January 22, 2025",
  },
];

const BlogSection = () => {
  return (
    <div className="pb-12 px-4 sm:px-6 lg:px-12 mb-10">
      <h2 className="text-center text-3xl font-bold mb-8 font-merriweather">
        Our Blog
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-sm w-full mx-auto border border-green-400 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            
            <div className="p-4">
              <p className="text-gray-800 font-semibold text-lg">{blog.title}</p>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <User className="w-4 h-4 text-gray-400 mr-1" />
                <span className="mr-3">By Admin</span>
                <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                <span>{blog.date}</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
