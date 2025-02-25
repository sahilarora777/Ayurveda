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
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const openProductPopup = (product) => {
    setSelectedProduct(product);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <Slider dots autoplay autoplaySpeed={3000}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product._id} className="cursor-pointer bg-white border rounded-2xl shadow-lg p-4" onClick={() => openProductPopup(product)}>
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-contain" />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
      {<Homepage/>}

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-2 right-2 text-xl" onClick={closeProductPopup}>&times;</button>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-48 object-contain" />
            <h3 className="text-xl font-semibold mt-2">{selectedProduct.name}</h3>
            <p className="text-gray-600">{selectedProduct.description}</p>
            <p className="text-green-600 font-bold mt-2">₹{selectedProduct.price}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg" onClick={() => navigate('/cart')}>Add to Cart</button>
              <button className="bg-black text-white px-6 py-3 rounded-lg">Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
