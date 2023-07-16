import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js'; 
import { ImageGrid } from '../../components/Browse/cardLayout';

function Browse() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://bit-and-bots.volumvekt.no/wp-json/wc/v3/products?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`);
        const data = await response.json();
        
        // check if data is an array before setting state
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error("Data is not an array");
        }
  
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  if (loading) return <Loading />; 
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ImageGrid>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            {product.images[0] && (
              <img
                src={product.images[0].src}
                alt={product.images[0].alt || 'product'}
              />
            )}
            <Link to={`/details/${product.id}`}>More info</Link>
          </div>
        );
      })}
    </ImageGrid>
  );
}

export default Browse;





