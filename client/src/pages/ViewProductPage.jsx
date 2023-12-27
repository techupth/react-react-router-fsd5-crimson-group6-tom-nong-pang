import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewProductPage() {
  const params = useParams();

  const [product, setProduct] = useState("");

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:4001/products/${params.id}`
    );
    setProduct(response.data.data);
  };

  useEffect(() => {
    getProduct();
  }, [params.id]);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default ViewProductPage;
