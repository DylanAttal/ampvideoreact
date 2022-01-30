import { ChangeEvent, KeyboardEvent } from 'react'
import styles from '../styles/Searchbar.module.css'

interface SearchbarProps {
  searchTerm: string
  updateSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void
  handleEnter: (event: KeyboardEvent<HTMLInputElement>) => void
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
        onKeyPress={props.handleEnter}
      />
    </div>
  )
}

export default Searchbar
