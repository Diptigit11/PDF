import React from 'react';
import {tools} from "./../Data/Data.jsx"
function Features() {

  return (
    
    <div className="container mx-auto lg:px-16 px-4 py-4 animate__animated animate__jackInTheBox">
                <div className="mb-16 text-center justify-center items-center">
            <h2 className="text-4xl font-bold pt-0 mt-0 text-red-500">What We Provide!!!</h2>
          </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 animate__animated hover:animate__jackInTheBox">
            <a href={tool.href} title={tool.title} className="flex flex-col items-center text-center">
              <div className="mb-4 ">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.heading}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
