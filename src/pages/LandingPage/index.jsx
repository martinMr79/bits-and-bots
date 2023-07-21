import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const mediaResponse = await fetch(
          'https://bit-and-bots.volumvekt.no/wp-json/wp/v2/media?per_page=30'
        );
        if (!mediaResponse.ok) {
          throw new Error(`Failed to fetch media, status: ${mediaResponse.status}`);
        }

        const mediaData = await mediaResponse.json();
        const landingPageSliderMedia = mediaData.filter(
          (media) => media.title.rendered === 'Landing-page-slider'
        );

        const mediaUrls = landingPageSliderMedia.map((media) => media.source_url);
        setImageUrls(mediaUrls);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

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


