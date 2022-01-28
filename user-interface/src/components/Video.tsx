import { VideoInfo } from '../components/App'

interface VideoProps {
  videoInfo: VideoInfo
}

const Video = (props: VideoProps) => {
  return (
    <div>
      <p>{props.videoInfo.title}</p>
      <p>{props.videoInfo.thumbnail}</p>
      <p>{props.videoInfo.owner}</p>
      <p>{props.videoInfo.rank}</p>
      <p>{props.videoInfo.views}</p>
    </div>
  )
}

export default Video
