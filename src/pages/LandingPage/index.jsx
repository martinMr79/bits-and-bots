import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useFetch from '../../hooks/useFetch';
import Register from '../../components/LandingPage/Form/register';
import styled from 'styled-components';
import Loading from '../../components/Loading/loading.js'; 

const RegisterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LandingPage = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/media');

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setImageUrls(
        posts.map((post) => post.media_details.sizes.full.source_url),
      );
    }
  }, [posts]);

  if (loading) return <Loading />; 
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ position: 'relative' }}>
      {imageUrls.length > 0 && (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index} style={{ height: '100vh', overflow: 'hidden' }}>
              <img
                src={imageUrl}
                alt={`slide-${index}`}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Carousel>
      )}
      <RegisterWrapper>
        <Register />
      </RegisterWrapper>
    </div>
  );
};

export default LandingPage;

