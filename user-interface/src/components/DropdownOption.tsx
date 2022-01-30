import { MouseEvent } from 'react'
import styles from '../styles/DropdownOption.module.css'

interface DropdownOptionProps {
  title: string
  selectVideo: (event: MouseEvent) => void
}

const DropdownOption = (props: DropdownOptionProps) => {
  return (
    <div
      onClick={props.selectVideo}
      className={
        props.title === 'No suggestions'
          ? styles.noSuggestions
          : styles.dropdownContainer
      }
    >
      {props.title}
    </div>
  )
}

export default DropdownOption
