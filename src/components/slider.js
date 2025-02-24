import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  {
    title: "Beauty",
    description: "How to Avoid Dry and Itchy Scalp during Winter Season",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Beauty",
    description: "The Ultimate Guide to Hair Serums, Benefits, and Usage Tips",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Intrinsically Indian Reads",
    description: "MARKA SANSKRANTI - SIGNIFICANCE OF THE FESTIVAL AS PER THE VEDA BASA",
    image: "https://via.placeholder.com/150",
  },
];

const AyurvedaSlides = [
  {
    title: "Experience Ayurveda",
    description:
      "Forest Essential products are handcrafted using 100% natural ingredients, sourced from the vast Indian landscape, to ensure the highest standards of purity.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Holistic Healing",
    description:
      "Ayurveda promotes holistic healing through natural remedies and balanced living.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Ancient Wisdom",
    description:
      "Harnessing the power of ancient Ayurvedic wisdom for modern-day wellness.",
    image: "https://via.placeholder.com/300",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const HomePage = () => {
  return (
    <div className="p-0">
      {/* Latest Reads Section */}
      <h2 className="text-center text-2xl font-bold mb-4">LATEST READS</h2>
      <div className="flex justify-center gap-6">
        {articles.map((article, index) => (
          <div key={index} className="w-80 shadow-lg p-4 bg-white">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Ayurveda Section */}
      <div className="mt-12 bg-green-50 p-8 text-center w-full">
        <h2 className="text-xl font-bold text-green-700">Experience Ayurveda</h2>
        <Slider {...sliderSettings} className="mt-4">
          {AyurvedaSlides.map((slide, index) => (
            <div key={index} className="w-full shadow-lg p-4 bg-white">
              <img src={slide.image} alt={slide.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-700">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
