import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://express-backend-f6ji.onrender.com/api/home_products")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setProducts(Array.isArray(data.products) ? data.products : []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch products. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full p-0">
      <h2 className="text-4xl text-center font-bold mb-10">Ayurveda All Products</h2>
      {loading ? (
        <p className="text-center">Loading products, please wait...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-2xl text-gray-600 ">{product.description}</p>
                  <p className="text-2xl green-600 font-bold ">₹{product.price}</p>
                  <button className="bg-green-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-green-600 transition">Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
