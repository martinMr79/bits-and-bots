import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';
import {
  Container,
  ImageGrid,
  Card,
  ProductImage,
  ProductInfo,
  SaleBox,
  ProductImageContainer,
  ViewDetails,
  StyledLink
} from '../../components/Browse/cardLayout.jsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CategoriesCarousel from '../../components/Browse/Carousel/CategoriesCarousel.jsx';
import BrowseAddToCartButton from '../../components/AddToCart/BrowseAddToCartButton.jsx';

const Browse = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [currentCategory, setCurrentCategory] = React.useState(null);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  React.useEffect(() => {
    if (!currentCategory) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.tags.some((tag) => tag.name === currentCategory),
        ),
      );
    }
  }, [products, currentCategory]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://bit-and-bots.volumvekt.no/wp-json/wc/v3/products?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`,
        );
        const data = await response.json();
        setProducts(data.map((product) => ({ ...product, isInCart: false })));
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

  const handleToggleCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === productId
          ? { ...prevProduct, isInCart: !prevProduct.isInCart }
          : prevProduct,
      ),
    );

  };

  return (
    <Container>
      <CategoriesCarousel setCurrentCategory={setCurrentCategory} />
      <h2 style={{ color: '#FFFFFF', textAlign: 'center', fontSize: '32px' }}>
        {currentCategory ? currentCategory : 'All Games'}
      </h2>
      <ImageGrid>
        {filteredProducts.map((product) => {
          const onSale = product.sale_price !== '';
          return (
<Card key={product.id}>
    {product.images[0] && (
        <ProductImageContainer>
            <Link
                to={`/details/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <ProductImage
                    src={product.images[0].src}
                    alt={product.images[0].alt || 'product'}
                />
            </Link>
            {onSale && (
                <SaleBox>
                    -
                    {Math.round(
                        (1 - product.sale_price / product.regular_price) * 100,
                    )}
                    %
                </SaleBox>
            )}
        </ProductImageContainer>
    )}
    <h2 style={{ textAlign: 'center' }}>{product.name}</h2>
    <ProductInfo>
        {onSale ? (
            <p>
                <s
                    style={{
                        color: '#76777B',
                        marginRight: '8px',
                        fontSize: '16px',
                    }}
                >
                    {product.regular_price} NOK
                </s>
                <span style={{ color: '#BEEB09', fontSize: '16px' }}>
                    {product.sale_price} NOK
                </span>
            </p>
        ) : (
            <p style={{ fontSize: '16px' }}>{product.price} NOK</p>
        )}
        <BrowseAddToCartButton
            product={product}
            onToggleCart={handleToggleCart}
        />
    </ProductInfo>
  
    <StyledLink to={`/details/${product.id}`}>
    <ViewDetails>view details</ViewDetails>
</StyledLink>

</Card>
          );
        })}
      </ImageGrid>
    </Container>
  );
};

export default Browse;
