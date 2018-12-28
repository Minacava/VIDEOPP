import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import FullScreen from '../../icons/components/full-screen'
import Volume from '../../icons/components/volume'
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
            <Pause
                size={30}
                color="black"
            />
            <FullScreen
                size={30}
                color="#47cf73"
            />
            <Volume
                size={30}
                color="#0ebeff" 
            />
            <Titles
                text="TRAILER"
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