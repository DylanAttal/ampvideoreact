import { useState } from 'react'
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

  return (
    <div className={styles.app}>
      <Header firstWord='Amp' secondWord='Video' />
      <form className={styles.form}>
        <Searchbar />
      </form>
    </div>
  )
}

export default App
