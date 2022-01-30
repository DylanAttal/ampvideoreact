import { VideoInfo } from '../components/App'
import styles from '../styles/Video.module.css'

interface VideoProps {
  videoInfo: VideoInfo
}

const Video = (props: VideoProps) => {
  return (
    <div className={styles.selectedVideoContainer}>
      <div className={styles.thumbnailContainer}>
        <img
          src={props.videoInfo.thumbnail}
          alt={`Thumbnail image of video: ${props.videoInfo.title}`}
        />
      </div>
      <div className={styles.videoTextContainer}>
        <p className={styles.videoTitle}>{props.videoInfo.title}</p>
        <p>
          {props.videoInfo.views} views - {props.videoInfo.owner}
        </p>
      </div>
    </div>
  )
}

export default Video
