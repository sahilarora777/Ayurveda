import { useEffect, useState } from "react";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://express-backend-f6ji.onrender.com/api/home_products")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setProducts(Array.isArray(data.products) ? data.products : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Ayurveda products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
                  <div className="flex gap-2 mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    <button className="bg-black text-white px-4 py-2 rounded-lg">Order</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
