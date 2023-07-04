import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Media() {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/media')
      .then(response => setImages(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {Images.map(image => (
        <div key={image.id}>
          <h2 dangerouslySetInnerHTML={{__html: image.title.rendered}}></h2>
          {image.media_details && image.media_details.sizes.full && 
            <img src={image.media_details.sizes.full.source_url} alt={image.alt_text || 'image'}/>
          }
        </div>
      ))}
    </div>
  );
}

export default Media;

