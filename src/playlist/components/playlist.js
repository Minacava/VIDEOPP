import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play'
import Titles from './titles';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    const playlistTwo = props.data.categories[1].playlist
    const playlistThree = props.data.categories[2].playlist
    console.log(props.data);
    return (
        <div className='Playlist'>
            <Play
                size={30}
                color="red"
            />
            <Titles
                text="TRAILERS"
            />
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
             <Titles
                text="MIXES"
            />
            {
                playlistTwo.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
             <Titles
                text="MUSIC"
            />
             {
                playlistThree.map((item) => {
                    return <Media {...item} key={item.id} />
                })
                }
        </div>
    )
}
export default Playlist;