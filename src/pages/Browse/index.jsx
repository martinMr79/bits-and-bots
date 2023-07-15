import React from 'react';
import useFetchWithAdditionalData from '../../hooks/fetchAdditionalData';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js'; 

const fetchMedia = async (posts) => {
  const promises = posts.map(async (post) => {
    const mediaResponse = await fetch(
      `https://bit-and-bots.volumvekt.no/wp-json/wp/v2/media/${post.featured_media}`,
    );
    const mediaData = await mediaResponse.json();
    return { ...post, media: mediaData };
  });
  return Promise.all(promises);
};

function Browse() {
  const {
    data: games,
    loading,
    error,
  } = useFetchWithAdditionalData('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts', fetchMedia);

  if (loading) return <Loading />; 
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {games.map((game) => {
        console.log(game);  // Move this line before the return statement
        return (
          <div key={game.id}>
            <h2 dangerouslySetInnerHTML={{ __html: game.title.rendered }}></h2>
            {game.media && game.media.media_details && game.media.media_details.sizes.full && (
              <img
                src={game.media.media_details.sizes.full.source_url}
                alt={game.alt_text || 'game'}
              />
            )}
            <Link to={`/details/${game.id}`}>More info</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Browse;



