import { ChangeEvent, useState } from 'react'
import styles from '../styles/Searchbar.module.css'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const updateUserSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className={styles.topLevelDiv}>
      <label htmlFor='searchTerm' className={styles.searchbarLabel}>
        Search for a video
      </label>
      <input
        id='searchTerm'
        type='text'
        placeholder='Search...'
        className={styles.searchbar}
        onChange={updateUserSearchTerm}
      />
    </div>
  )
}

export default Searchbar
