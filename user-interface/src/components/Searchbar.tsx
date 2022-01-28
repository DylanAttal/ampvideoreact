import { ChangeEvent } from 'react'
import styles from '../styles/Searchbar.module.css'

interface SearchbarProps {
  searchTerm: string
  updateSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = (props: SearchbarProps) => {
  return (
    <div className={styles.topLevelDiv}>
      <label htmlFor='searchTerm' className={styles.searchbarLabel}>
        Search for a video
      </label>
      <input
        id='searchTerm'
        type='text'
        placeholder='Search...'
        value={props.searchTerm}
        className={styles.searchbar}
        onChange={props.updateSearchTerm}
      />
    </div>
  )
}

export default Searchbar
