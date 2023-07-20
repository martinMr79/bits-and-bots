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

const popularCategories = [
  ['Category 1', 'Category 2', 'Category 3'],
  ['Category 4', 'Category 5', 'Category 6'],
];

const PopularCategoriesCarousel = () => {
  return (
    <Container>
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
              {category.map((subCategory, subIndex) => (
                <StyledCategoryCard key={subIndex}>
                  <StyledProductImageContainer>
                    <Link to={`/details/${subCategory}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <StyledProductImage src="https://placehold.co/350x250" alt="Category image" />
                    </Link>
                  </StyledProductImageContainer>
                  <h2>{subCategory}</h2>
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

