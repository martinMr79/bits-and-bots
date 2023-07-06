import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import useFetch from '../../hooks/useFetch';

const LandingPage = () => {
  const { data: posts, loading, error } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const extractImageSrcs = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    const imgTags = html.getElementsByTagName('img');
    return Array.from(imgTags).map(img => img.getAttribute('src'));
  };

  const imageUrls = posts.flatMap(post => extractImageSrcs(post.content.rendered));

  return (
    <div style={{height: '100vh'}}>
      <AwesomeSlider>
        {imageUrls.map((imageUrl, index) => <div key={index} data-src={imageUrl} />)}
      </AwesomeSlider>
    </div>
  );
}

export default LandingPage;

