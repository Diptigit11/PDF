import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '/hero.png'

export default function Hero() {
    return (
        <div className="mx-auto ">
            <aside className="relative overflow-hidden text-red-500 rounded-lg mx-2 sm:mx-0 sm:py-16">
                <div className="max-w-screen px-10 pb-16 pt-12 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="sm:w-1/2 w-50% sm:pr-8 sm:pt-2">
                        <img
                            className="w-50% sm:mt-10 object-cover animate__animated animate__zoomIn"
                            src={image1}
                            alt="image1"
                        />
                    </div>
                    <div className="sm:w-1/2 w-full max-w-2xl space-y-4 text-center sm:text-right sm:ml-auto mt-5 sm:mt-0 relative lg:pt-10 lg:mt-10">
                        <h2 className="text-4xl font-bold sm:text-5xl mt-0 animate__animated animate__zoomIn leading-tight">
                            Master PDF Tasks Effortlessly
                        </h2>
                        <p className="text-lg sm:text-xl">
                            Unlock the power of PDFs with our free, intuitive tools. Merge, split, compress, convert, rotate, and watermark—all in one place!
                        </p>
                        <div className="flex justify-center mt-4">
                            <Link
                                className=" text-white inline-flex items-center animate__animated animate__fadeIn px-4 py-3 font-medium bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-purple-200 rounded-lg hover:opacity-75"
                                to="/signup"
                            >
                                Start For Free
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
