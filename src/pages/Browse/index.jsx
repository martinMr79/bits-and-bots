import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, ImageGrid, Card, ProductImage, ProductInfo, CartButton, SaleBox, ProductImageContainer } from '../../components/Browse/cardLayout.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Browse = () => {
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

  const popularCategories = [
    ['Category 1', 'Category 2', 'Category 3'],
    ['Category 4', 'Category 5', 'Category 6'],
    ['Category 7', 'Category 8', 'Category 9'],
  ];

  const PopularCategoriesCarousel = ({ categories }) => {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
              Prev
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
              Next
            </button>
          )
        }
      >
        {categories.map((category, index) => (
          <div key={index}>
            {category.map((subCategory, subIndex) => (
              <div key={subIndex}>
                <h2>{subCategory}</h2>
                {/* Add your images or other content here */}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <Container>
      <PopularCategoriesCarousel categories={popularCategories} />
      <ImageGrid>
        {products.map((product) => {
          const onSale = product.sale_price !== '';
          return (
            <Card key={product.id}>
              {product.images[0] && (
                <ProductImageContainer>
                  <Link to={`/details/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ProductImage
                      src={product.images[0].src}
                      alt={product.images[0].alt || 'product'}
                    />
                  </Link>
                  {onSale && (
                    <SaleBox>
                      -{Math.round((1 - product.sale_price / product.regular_price) * 100)}%
                    </SaleBox>
                  )}
                </ProductImageContainer>
              )}
              <h2>{product.name}</h2>
              <ProductInfo>
                {onSale ? (
                  <p>
                    <s style={{ color: '#76777B', marginRight: '8px', fontSize: '18px' }}>
                      {product.regular_price} Nok
                    </s>
                    <span style={{ color: '#BEEB09', fontSize: '18px' }}>{product.sale_price} Nok</span>
                  </p>
                ) : (
                  <p style={{ fontSize: '18px' }}>{product.price} Nok</p>
                )}
                <CartButton>
                  <ShoppingCartIcon style={{ fontSize: '14px', marginRight: '8px' }} />
                  Add to Cart
                </CartButton>
              </ProductInfo>
            </Card>
          );
        })}
      </ImageGrid>
    </Container>
  );
};

export default Browse;












