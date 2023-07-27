import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';
import { Container, H1, H2, H3, H4, H5, ProductDescription, useStyles, ProductContainer, ProductTags, Tag, BuyProductContainer, ImageContainer, ProductPrice, AverageRating } from '../../components/Details/styled.jsx';
import AddToCartButton from '../../components/AddToCart/AddToCartButton.jsx';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

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

let stars = [];
let rating = parseFloat(product.average_rating);
let isHalf = false;
if (rating % 1 !== 0) {
  rating = Math.floor(rating);
  isHalf = true;
}

for (let i = 0; i < rating; i++) {
  stars.push(<StarIcon key={i} className={classes.icon} />);
}

if (isHalf) {
  stars.push(<StarHalfIcon key={rating} className={classes.icon} />);
}


return (
  <Container>
    <ImageContainer>
      <H1>{product.name}</H1>
      <img className={classes.image} src={product.images[0]?.src} alt={product.images[0]?.alt || 'product'} />
    </ImageContainer>
    <BuyProductContainer>
      <H4>Buy {product.name}</H4>
      <ProductPrice> Nok {product.price}</ProductPrice>
      <AddToCartButton product={product} />
      <H5>Player Ratings</H5>
      <AverageRating>{parseFloat(product.average_rating).toFixed(1)}</AverageRating>

      <div style={{ display: "flex" }}>
        {stars.map((star, index) => (
          <div className={classes.icon} key={index}>{star}</div>
        ))}
      </div>
    </BuyProductContainer>
    <ProductContainer>
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
  </Container>
);



  
  

};

export default ProductDetails;

