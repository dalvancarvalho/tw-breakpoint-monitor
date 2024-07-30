/* ToggleButton/index.tsx */

import type { ToggleButtonProps } from '../../../../utils/types'
import styles from './styles.module.scss'
import chevronDown from '../../../../assets/chevron-down-solid.svg'

export function ToggleButton(props: ToggleButtonProps) {
  // Toggles the panel between collapsed/expanded state

  return (
    <button className={styles.button} {...props}>
      <img src={chevronDown} alt="Chevron down icon" />
    </button>
  )
}
