import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  StyledCategoryCard,
  StyledProductImageContainer,
  StyledProductImage,
  StyledCarouselContainer,
  Container,
  H2,
  ArrowButtonContainer
} from './styled.jsx';
import useFetch from '../../../hooks/useFetch.jsx';

const PopularCategoriesCarousel = ({ setCurrentCategory }) => {
  const { data: posts, loading, error } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts?categories=35');
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const ArrowButton = ({ children, onClick, title, right }) => (
    <ArrowButtonContainer onClick={onClick} title={title} right={right}>
      {children}
    </ArrowButtonContainer>
  );


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

    // Call the handleResize function on initial mount
    handleResize();

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

  const handleCategoryClick = (category) => {
    setCurrentCategory(category.title);
  };

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
              <StyledCategoryCard key={index} onClick={() => handleCategoryClick(category)}>
                <StyledProductImageContainer>            
                    <StyledProductImage src={category.image} alt="Category image" />              
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

  const renderArrowPrev = (onClickHandler, hasPrev, label) => (
    hasPrev && (
      <ArrowButton onClick={onClickHandler} title={label}>
        <IconButton sx={{ position: 'absolute', left: -30, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <KeyboardArrowLeft sx={{ fontSize: 100, color: '#000', opacity: 0.8 }} />
        </IconButton>
      </ArrowButton>
    )
  );

  const renderArrowNext = (onClickHandler, hasNext, label) => (
    hasNext && (
      <ArrowButton onClick={onClickHandler} title={label} right>
        <IconButton sx={{ position: 'absolute', right: -30, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <KeyboardArrowRight sx={{ fontSize: 100, color: '#000', opacity: 0.8 }} />
        </IconButton>
      </ArrowButton>
    )
  );

  return (
    <Container>
      <H2>Genres</H2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        {renderCarouselItems()}
      </Carousel>
    </Container>
  );
};

export default PopularCategoriesCarousel;








