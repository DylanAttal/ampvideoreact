import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <h1><span className={styles.amp}>Amp</span><span className={styles.video}>Video</span></h1>
  )
}

export default Header;