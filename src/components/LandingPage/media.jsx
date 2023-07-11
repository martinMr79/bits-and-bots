import React from 'react';
import useFetch from '../../hooks/useFetch';

function Media() {
  const {
    data: Images,
    loading,
    error,
  } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/media');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {Images.map((image) => (
        <div key={image.id}>
          <h2 dangerouslySetInnerHTML={{ __html: image.title.rendered }}></h2>
          {image.media_details && image.media_details.sizes.full && (
            <img
              src={image.media_details.sizes.full.source_url}
              alt={image.alt_text || 'image'}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Media;
