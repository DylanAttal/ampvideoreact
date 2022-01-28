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

const App = () => {
  const [formData, setFormData] = useState(initialFormData)

  const updateSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, searchTerm: event.target.value })
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
