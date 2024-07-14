import React, { useEffect, useState } from 'react';

const Loader = () => {
    const messages = [
        "Combine your PDFs seamlessly!",
        "Separate pages in seconds.",
        "Change PDFs to Word, Excel, and more.",
        "Edit PDFs like a pro.",
        "Keep your documents safe."
    ];

    const [message, setMessage] = useState('');

    useEffect(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMessage);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-50">
            <img src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-0.jpg" alt="Loading" className="w-24 h-24 mb-4" />
            <p className="text-center text-xl font-semibold">{message}</p>
        </div>
    );
};

export default Loader;