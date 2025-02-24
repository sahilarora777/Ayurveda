import React from 'react';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-300">
      <div className="text-center">
        <div className="flex items-center justify-center w-24 h-24 bg-green-200 rounded-full mx-auto shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[40vh] w-[40vh] text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-8xl font-extrabold text-green-700 mt-6">Success!</h1>
        <p className="text-5xl text-gray-800 mt-4">Your form has been submitted successfully. Thank you for choosing the path of wellness with Ayurveda!</p>
        <p className="text-4xl text-gray-600 mt-2">Our team will review your submission and get back to you shortly. Stay tuned for a healthier, balanced life!</p>
        <button
          className="mt-8 px-8 py-4 bg-green-600 text-white rounded-full text-lg font-bold hover:bg-green-700 transition shadow-md"
          onClick={() => window.history.back()}
        >
          Go Back to Wellness
        </button>
      </div>
    </div>
  );
};

export default Success;
