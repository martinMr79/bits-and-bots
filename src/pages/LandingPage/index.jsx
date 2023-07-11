import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useFetch from '../../hooks/useFetch';
import Register from '../../components/LandingPage/Form/register';
import styled from 'styled-components';

// Define a styled component to set the positioning of the Register form
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
  } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts');

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const extractImageSrcs = (htmlString) => {
        const parser = new DOMParser();
        const html = parser.parseFromString(htmlString, 'text/html');
        const imgTags = html.getElementsByTagName('img');
        return Array.from(imgTags).map((img) => img.getAttribute('src'));
      };

      setImageUrls(
        posts.flatMap((post) => extractImageSrcs(post.content.rendered)),
      );
    }
  }, [posts]);

  if (loading) return <p>Loading...</p>;
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
