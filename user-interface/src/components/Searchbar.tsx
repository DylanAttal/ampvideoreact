import { ChangeEvent, useState } from 'react';
import styles from '../styles/Searchbar.module.css';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const updateUserSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className={styles.topLevelDiv}>
      <input type="text" placeholder='Search...' className={styles.searchbar} onChange={updateUserSearchTerm} />
    </div>
  )
}

export default Searchbar;