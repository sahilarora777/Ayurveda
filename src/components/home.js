import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import Homepage from './slider';

const HomeProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('https://express-backend-f6ji.onrender.com/api/home_products')
      .then(response => response.json())
      .then(data => {
        const latestProducts = Array.isArray(data.products) ? data.products.slice(0, 5) : [];
        setProducts(latestProducts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products');
        setLoading(false);
      });

    fetch('https://express-backend-f6ji.onrender.com/api/banners')
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const productSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...bannerSettings}>
        {banners.length > 0 ? (
          banners.map(banner => (
            <div key={banner._id}>
              <img src={banner.imageUrl} alt="Banner" className="w-full h-[70vh] object-cover" />
            </div>
          ))
        ) : (
          <p>No banners available</p>
        )}
      </Slider>

      <h2 className="text-3xl text-center font-bold mb-6 mt-8">Ayurveda Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Slider {...productSettings}>
          {products.length > 0 ? (
            products.map(product => (
              <div key={product._id} className="px-4">
                <div className="bg-white border-2 border-green-600 rounded-2xl shadow-lg overflow-hidden p-4 object-contain">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-contain cursor-pointer"
                    onClick={() => setSelectedImage(product.imageUrl)}
                  />
                  <div>
                    <h3 className="text-4xl font-semibold">{product.name}</h3>
                    <p className="text-2xl text-gray-600">{product.description}</p>
                    <p className="text-2xl text-green-600 font-bold mt-2">₹{product.price}</p>
                    <div className="flex gap-2 mt-4">
                      <button
                        className="bg-black text-white px-6 py-3 text-lg rounded-lg"
                        onClick={() => navigate('/cart')}
                      >
                        Add to Cart
                      </button>
                      <button className="bg-black text-white px-6 py-3 text-lg rounded-lg">Order</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </Slider>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center" onClick={() => setSelectedImage(null)}>
          <div className="relative">
            <img src={selectedImage} alt="Product" className="max-w-full max-h-screen rounded-lg shadow-lg" />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {<Homepage />}
    </div>
  );
};

export default HomeProducts;
