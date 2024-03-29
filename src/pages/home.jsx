import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTitle from "../components/productTitle/ProductTitle";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchListOfProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Circles height={80} width={80} color="#4A90E2" visible={true} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto p-6">
          {products.map((productItem) => (
            <ProductTitle key={productItem.id} product={productItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
