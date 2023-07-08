import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import useFetch from '../../hooks/useFetch';
import {HiddenIndicator, Paper} from "./styles"

const LandingPage = () => {
    const { data: posts, loading, error } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts');
  
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        if (posts && posts.length > 0) {
            const extractImageSrcs = htmlString => {
                const parser = new DOMParser();
                const html = parser.parseFromString(htmlString, 'text/html');
                const imgTags = html.getElementsByTagName('img');
                return Array.from(imgTags).map(img => img.getAttribute('src'));
            };

            setImageUrls(posts.flatMap(post => extractImageSrcs(post.content.rendered)));
        }
    }, [posts]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll('.MuiPaper-root');
            elements.forEach(el => el.removeAttribute('tabIndex'));
        }, 0);
        return () => clearTimeout(timer);
    }, [imageUrls]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <HiddenIndicator>
        <Carousel navButtonsAlwaysInvisible={true}>
          {imageUrls.map((imageUrl, index) => (
            <Paper key={index} style={{ height: '100vh', overflow: 'hidden' }}>
              <img src={imageUrl} alt={`slide-${index}`} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
            </Paper>
          ))}
        </Carousel>
      </HiddenIndicator>
    );
}
  
export default LandingPage;
