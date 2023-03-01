import * as React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { coverPlayer, content } from './release-detail.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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
      <div className={coverPlayer}>
        <img src={release.cover.file.url}></img>
        <div className={content}>
          <div>{renderRichText(release.description, {})}</div>
          <AudioPlayer
            style={{color: 'black'}}
            src={tracks[currentTrack].src}
            showSkipControls
            onClickNext={handleClickNext}
            onEnded={handleEnd}
          />
        </div>
      </div>
    </>
  )
}

export default ReleaseDetail
