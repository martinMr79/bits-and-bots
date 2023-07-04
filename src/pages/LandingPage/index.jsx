import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import useFetch from './hooks/useFetch';

const LandingPage = () => {
  const { data: images, loading, error } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/media');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{height: '100vh'}}>
      <AwesomeSlider>
        {images.map(image => (
          image.media_details && image.media_details.sizes.full &&
          <div data-src={image.media_details.sizes.full.source_url} key={image.id}/>
        ))}
      </AwesomeSlider>
    </div>
  );
}

export default LandingPage;

