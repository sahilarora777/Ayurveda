import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./card";

const AboutAyurveda = () => {
    const navigate = useNavigate();

    return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-black text-white text-center py-12">
        <h1 className="text-4xl font-extrabold">About Ayurveda</h1>
      </div>

      {/* Introduction Section */}
      <div className="text-center py-12 px-8">
        <h2 className="text-green-700 text-3xl font-bold mb-4">What is Ayurveda?</h2>
        <p className="text-2xl gray-700 max-w-3xl mx-auto leading-relaxed">
          Ayurveda is an ancient Indian system of medicine that focuses on a natural and holistic approach to physical and mental well-being. It aims to balance the body, mind, and spirit through diet, herbal treatments, yoga, and meditation.
        </p>
        <p className="text-2xl gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
          Originating over 5,000 years ago, Ayurveda is based on the principles of three doshas: Vata, Pitta, and Kapha. These doshas represent different body constitutions and energy forces that influence our health.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="text-center py-12">
        <h2 className="text-green-700 text-3xl font-bold mb-8">Benefits of Ayurveda</h2>
        <Card/>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Embrace Ayurveda for a Healthy Life</h2>
        <p className="mt-2">Start your journey towards a balanced and natural lifestyle today.</p>
        <button 
  className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-white-600 transition" 
  onClick={() => navigate('/banner')}>
  Explore Ayurvedic Products
</button>

      </div>
    </div>
  );
};

export default AboutAyurveda;
