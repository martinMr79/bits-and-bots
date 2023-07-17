import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js'; 
import { Container, ImageGrid, Card, ProductImage } from '../../components/Browse/cardLayout.jsx';

function Browse() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://bit-and-bots.volumvekt.no/wp-json/wc/v3/products?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`);
        const data = await response.json();
        setProducts(data);
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
    <Container>
      <ImageGrid>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              {product.images[0] && (
                <ProductImage
                  src={product.images[0].src}
                  alt={product.images[0].alt || 'product'}
                />
              )}
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <p>Tags: {product.tags && product.tags.map(tag => tag.name).join(', ')}</p>
              <Link to={`/details/${product.id}`}>More info</Link>
            </Card>
          );
        })}
      </ImageGrid>
    </Container>
  );
}

export default Browse;




