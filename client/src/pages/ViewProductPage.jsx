import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    const results = await axios.get(
      `http://localhost:4001/products/${productId}`
    );
    setProducts(results.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {products.name}</h2>
        <p>Price: {products.price}</p>
        <p>Description: {products.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
