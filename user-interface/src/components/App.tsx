import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import styles from '../styles/App.module.css'
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

const initialVideos: VideoInfo[] = []

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [videos, setVideos] = useState(initialVideos)

  const updateSearchTerm = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, searchTerm: event.target.value })
    await axios
      .get(`http://localhost:3000/videos?search_term=${event.target.value}`)
      .then((resp) => setVideos(resp.data))
      .catch(console.error)
  }

  return (
    <div className={styles.app}>
      <Header firstWord='Amp' secondWord='Video' />
      <form className={styles.form}>
        <Searchbar
          updateSearchTerm={updateSearchTerm}
          searchTerm={formData.searchTerm}
        />
      </form>
      {videos.length !== 0 &&
        videos.map((video, index) => {
          return <Video key={index} videoInfo={video} />
        })}
    </div>
  )
}

export default App
