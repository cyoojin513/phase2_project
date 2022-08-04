import React from 'react'
import Card from './Styles/Card.style'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

function HomeCard({song, toggleFavoritedSong}) {

  return (
    <Card>
      <img src={song.image} alt='Album cover'/>
      <div id="container">
        <h3>{song.album}</h3>
        <h4>{song.songName}</h4>
        <h4>{song.artist}</h4>
        <h4 className='favorite' onClick={() => 
        toggleFavoritedSong(song.id, !song.favorited)}>
          {song.favorited ? <HiHeart color='#1dd761'/> : <HiOutlineHeart/>}
      </h4>
      </div>
    </Card>
  )
}

export default HomeCard