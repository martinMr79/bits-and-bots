import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import {
  StyledCategoryCard,
  StyledProductImageContainer,
  StyledProductImage,
  StyledCarouselContainer,
  Container,
} from './styled.jsx';
import useFetch from '../../../hooks/useFetch.jsx';

const PopularCategoriesCarousel = () => {
  const { data: posts, loading, error } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts?categories=35');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const popularCategories = posts.map((post) => ({
    title: post.title.rendered,
    image: post.jetpack_featured_media_url,
  }));

  return (
    <Container>
      <h1>Categories</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
            >
              Prev
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
            >
              Next
            </button>
          )
        }
      >
        {popularCategories.map((category, index) => (
          <div key={index}>
            <StyledCarouselContainer>
              {popularCategories.slice(index, index + 3).map((subCategory, subIndex) => (
                <StyledCategoryCard key={subIndex}>
                  <StyledProductImageContainer>
                    <Link to={`/details/${subCategory.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <StyledProductImage src={subCategory.image} alt="Category image" />
                    </Link>
                  </StyledProductImageContainer>
                  <h2>{subCategory.title}</h2>
                </StyledCategoryCard>
              ))}
            </StyledCarouselContainer>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default PopularCategoriesCarousel;



