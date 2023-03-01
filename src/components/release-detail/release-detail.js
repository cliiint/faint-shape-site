import * as React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

function ReleaseDetail({ release }) {
  const tracks = release.songs.map(song => Object.assign({}, { src: song.file.url }));
  const [currentTrack, setTrackIndex] = React.useState(0);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) => currentTrack < tracks.length - 1 ? currentTrack + 1 : 0);
  };
  
  const handleEnd = () => {
    setTrackIndex((currentTrack) => currentTrack < tracks.length - 1 ? currentTrack + 1 : 0);
  };

  return (
    <>
      <h1>{release.title}</h1>
      <div>welcome to relese view</div>
      <AudioPlayer
        style={{color: 'black'}}
        src={tracks[currentTrack].src}
        showSkipControls
        onClickNext={handleClickNext}
        onEnded={handleEnd}
      />
    </>
  )
}

export default ReleaseDetail
