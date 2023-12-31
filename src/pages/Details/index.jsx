import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';
import {
  Container,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  ProductDescription,
  useStyles,
  ProductContainer,
  ProductTags,
  Tag,
  BuyProductContainer,
  ImageContainer,
  ProductPrice,
  AverageRating,
  ProductSpecificationsContainer,
  SpecificationSection,
} from '../../components/Details/styled.jsx';
import AddToCartButton from '../../components/AddToCart/DetailsAddToCartButton.jsx';
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
        const response = await fetch(
          `https://bit-and-bots.volumvekt.no/wp-json/wc/v3/products/${id}?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`,
        );
        const data = await response.json();
        const specifications = data.meta_data.find(
          (item) => item.key === '_my_custom_specifications',
        );
        setProduct({
          ...data,
          specifications: specifications ? specifications.value : '',
        });
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

  function stripPTags(content) {
    const withoutOpeningTag = content.replace(/<p>/g, '');
    const withoutClosingTag = withoutOpeningTag.replace(/<\/p>/g, '\n');
    return withoutClosingTag;
  }

  return (
    <Container>
      <ImageContainer>
        <H1>{product.name}</H1>
        <img
          className={classes.image}
          src={product.images[0]?.src}
          alt={product.images[0]?.alt || 'product'}
        />
      </ImageContainer>
      <ProductTags>
        {product.tags.map((tag, index) => (
          <Tag key={index}>{tag.name}</Tag>
        ))}
      </ProductTags>

      <BuyProductContainer>
        <H4>Buy {product.name}</H4>
        <ProductPrice> NOK {product.price}</ProductPrice>
        <AddToCartButton product={product} />
        <H5>Player Ratings</H5>
        <AverageRating>
          {parseFloat(product.average_rating).toFixed(1)}
        </AverageRating>
        <div style={{ display: 'flex' }}>
          {stars.map((star, index) => (
            <div className={classes.icon} key={index}>
              {star}
            </div>
          ))}
        </div>
      </BuyProductContainer>
      <ProductContainer>
        <H2>About this game</H2>
        <ProductDescription>
          {stripPTags(product.description)}
        </ProductDescription>

        <H3>Specifications</H3>
        <ProductSpecificationsContainer>
          <SpecificationSection>
            <H6>MINIMUM:</H6>
            <ProductDescription
              dangerouslySetInnerHTML={{
                __html: product.acf.minimum
                  ? product.acf.minimum
                  : 'No minimum specifications provided.',
              }}
            />
          </SpecificationSection>
          <SpecificationSection>
            <H6>RECOMMENDED:</H6>
            <ProductDescription
              dangerouslySetInnerHTML={{
                __html: product.acf.recommended
                  ? product.acf.recommended
                  : 'No recommended specifications provided.',
              }}
            />
          </SpecificationSection>
        </ProductSpecificationsContainer>
      </ProductContainer>
    </Container>
  );
};

export default ProductDetails;
