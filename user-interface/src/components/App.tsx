import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import styles from '../styles/App.module.css'
import Header from './Header'
import Searchbar from './Searchbar'

interface InitialFormData {
  searchTerm: string
}

const initialFormData: InitialFormData = {
  searchTerm: '',
}

interface Video {
  title: string
  thumbnail: string
  owner: string
  views: number
  rank: number
}

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [videos, setVideos] = useState([])

  const updateSearchTerm = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, searchTerm: event.target.value })
    await axios
      .get(`http://localhost:3000/videos?search_term=${formData.searchTerm}`)
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
    </div>
  )
}

export default App
