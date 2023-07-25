import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';
import { Container, H1, ProductDescription, useStyles, ProductContainer } from '../../components/Details/styled.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const classes = useStyles();

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
    <Container>
      <ProductContainer>
      <H1>{product.name}</H1>
      <img className={classes.image} src={product.images[0]?.src} alt={product.images[0]?.alt || 'product'} />
      <div>        
        {product.tags.map((tag, index) => (
          <span key={index}>{tag.name}</span>
        ))}
      </div>
      <h2>About this game</h2>
      <ProductDescription>{product.description}</ProductDescription>
     {/*<ProductDescription>Price: {product.price} Nok</ProductDescription>*/} 
      </ProductContainer>    
    </Container>

  );
};

export default ProductDetails;

