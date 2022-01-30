import styles from '../styles/DropdownOption.module.css'

interface DropdownOptionProps {
  title: string
}

const DropdownOption = (props: DropdownOptionProps) => {
  return (
    <div
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
