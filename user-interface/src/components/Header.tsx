import styles from '../styles/Header.module.css'

interface HeaderProps {
  firstWord: string
  secondWord: string
}

const Header = (props: HeaderProps) => {
  return (
    <h1>
      <span className={styles.amp}>{props.firstWord}</span>
      <span className={styles.video}>{props.secondWord}</span>
    </h1>
  )
}

export default Header
