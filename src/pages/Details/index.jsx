import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://bit-and-bots.volumvekt.no/wp-json/wc/v3/products/${id}?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images[0]?.src} alt={product.images[0]?.alt || 'product'} />
      <p>{product.description}</p>
      <p>Price: {product.price} Nok</p>
    </div>
  );
};

export default ProductDetails;
