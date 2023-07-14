import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/loading.js'; 

function Browse() {
  const {
    data: games,
    loading,
    error,
  } = useFetch('https://bit-and-bots.volumvekt.no/wp-json/wp/v2/posts');

  if (loading) return <Loading />; 
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h2 dangerouslySetInnerHTML={{ __html: game.title.rendered }}></h2>
          {game.media_details && game.media_details.sizes.full && (
            <img
              src={game.media_details.sizes.full.source_url}
              alt={game.alt_text || 'game'}
            />
          )}
          <Link to={`/details/${game.id}`}>More info</Link>
        </div>
      ))}
    </div>
  );
}

export default Browse;

