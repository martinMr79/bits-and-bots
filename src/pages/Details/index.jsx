import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';
import { Container, H1, H2, H3, ProductDescription, useStyles, ProductContainer, ProductTags, Tag, BuyProductContainer } from '../../components/Details/styled.jsx';
import AddToCartButton from '../../components/AddToCart/AddToCartButton.jsx';

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
        <ProductTags>        
          {product.tags.map((tag, index) => (
            <Tag key={index}>{tag.name}</Tag>
          ))}
        </ProductTags>
        <H2>About this game</H2>
        <ProductDescription>{product.description}</ProductDescription>
       
        <H3>Specifications</H3>      
        <p>lorem ipsum</p>    
      </ProductContainer>    
      <BuyProductContainer>
        <H2>{product.name}</H2>
        <ProductDescription> Nok {product.price}</ProductDescription>
        <AddToCartButton product={product} />
        <H3>Player ratings</H3>
        <p>5</p>
        <p>*******</p>
      </BuyProductContainer>
    </Container>
  );

};

export default ProductDetails;

