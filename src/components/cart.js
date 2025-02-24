import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-4">
      {loading ? (
        <p>Loading products, please wait...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
                <div key={product._id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-auto">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-lg text-gray-500 mt-1">{product.description}</p>
                  <p className="text-green-600 font-bold text-lg mt-2">₹{product.price}</p>
                </div>
                <div className="p-4 mt-auto">
                  <button
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      )}

      <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-2xl mt-12">
        <h2 className="text-2xl font-extrabold text-green-700">🛒 Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-4">Your cart is empty. Start adding some amazing products!</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <span className="text-lg text-gray-800">{item.name} - ₹{item.price}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
                  onClick={() => removeFromCart(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <p className="text-2xl font-bold text-green-700 mt-6 text-center">💰 Total: ₹{totalAmount}</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
