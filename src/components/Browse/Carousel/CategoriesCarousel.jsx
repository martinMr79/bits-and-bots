import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import {
  StyledCategoryCard,
  StyledProductImageContainer,
  StyledProductImage,
  StyledCarouselContainer,
  Container,
  H2,
} from './styled.jsx';
import useFetch from '../../../hooks/useFetch.jsx';

const PopularCategoriesCarousel = () => {
  const { data: posts, loading, error } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts?categories=35');
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1400) {
        setItemsPerSlide(4);
      } else if (screenWidth >= 1050) {
        setItemsPerSlide(3);
      } else if (screenWidth >= 750) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const renderCarouselItems = () => {
    const numSlides = Math.ceil(popularCategories.length / itemsPerSlide);
    const carouselItems = [];

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const slideCategories = popularCategories.slice(startIndex, endIndex);

      carouselItems.push(
        <div key={i}>
          <StyledCarouselContainer itemsPerSlide={itemsPerSlide}>
            {slideCategories.map((category, index) => (
              <StyledCategoryCard key={index}>
                <StyledProductImageContainer>
                  <Link to={`/details/${category.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <StyledProductImage src={category.image} alt="Category image" />
                  </Link>
                </StyledProductImageContainer>
                <h2>{category.title}</h2>
              </StyledCategoryCard>
            ))}
          </StyledCarouselContainer>
        </div>
      );
    }

    return carouselItems;
  };

  return (
    <Container>
      <H2>Genres</H2>
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
        {renderCarouselItems()}
      </Carousel>
    </Container>
  );
};

export default PopularCategoriesCarousel;







