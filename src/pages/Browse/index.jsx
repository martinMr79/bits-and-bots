import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, ImageGrid, Card, ProductImage, ProductInfo, CartButton } from '../../components/Browse/cardLayout.jsx';

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
          const onSale = product.sale_price !== '';
          return (
            <Link to={`/details/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                {product.images[0] && (
                  <ProductImage
                    src={product.images[0].src}
                    alt={product.images[0].alt || 'product'}
                  />
                )}
                <h2>{product.name}</h2>
                <ProductInfo>
                  {onSale ? (
                    <p>
                      <s style={{color: '#76777B'}}>{product.regular_price} Nok </s> 
                      <span style={{color: '#BEEB09'}}>{product.sale_price} Nok</span>
                    </p>
                  ) : (
                    <p>{product.price} Nok</p>
                  )}
                  <CartButton>
                    <ShoppingCartIcon style={{ fontSize: "1rem" }} />
                    Add to Cart
                  </CartButton>
                </ProductInfo>
                {/*<p>Tags: {product.tags && product.tags.map(tag => tag.name).join(', ')}</p>*/}
              </Card>
            </Link>
          );
        })}
      </ImageGrid>
    </Container>
  );
}

export default Browse;




