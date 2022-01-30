import axios from 'axios'
import { ChangeEvent, MouseEvent, useState } from 'react'
import styles from '../styles/App.module.css'
import DropdownOption from './DropdownOption'
import Header from './Header'
import Searchbar from './Searchbar'
import Video from './Video'

interface InitialFormData {
  searchTerm: string
}

const initialFormData: InitialFormData = {
  searchTerm: '',
}

export interface VideoInfo {
  title: string
  thumbnail: string
  owner: string
  views: number
  rank: number
}

const initialVideo: VideoInfo = {
  title: '',
  thumbnail: '',
  owner: '',
  views: 0,
  rank: 0,
}

const initialVideos: VideoInfo[] = []

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [videos, setVideos] = useState(initialVideos)
  const [selectedVideo, setSelectedVideo] = useState(initialVideo)
  const [showVideoList, setShowVideoList] = useState(false)

  const updateSearchTerm = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, searchTerm: event.target.value })
    await axios
      .get(`http://localhost:3000/videos?search_term=${event.target.value}`)
      .then((resp) => setVideos(resp.data))
      .catch(console.error)
    setShowVideoList(true)
  }

  const selectVideo = (event: MouseEvent, index: number) => {
    const selectedVideo = videos.filter((x, i) => i === index)[0]
    setSelectedVideo(selectedVideo)
    console.log('hey')
    setShowVideoList(false)
  }

  return (
    <div className={styles.app}>
      <Header firstWord='Amp' secondWord='Video' />
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Searchbar
          updateSearchTerm={updateSearchTerm}
          searchTerm={formData.searchTerm}
        />
      </form>
      <section className={styles.section}>
        {showVideoList &&
          videos.map((video, index) => {
            return (
              <DropdownOption
                key={index}
                title={video.title}
                selectVideo={(e) => selectVideo(e, index)}
              />
            )
          })}
      </section>

      {selectedVideo.title !== '' && <Video videoInfo={selectedVideo} />}
    </div>
  )
}

export default App
