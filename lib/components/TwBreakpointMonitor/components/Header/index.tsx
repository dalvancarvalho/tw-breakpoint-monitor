/* Header/index.tsx */

import type { HeaderProps } from '../../../../utils/types'
import styles from './styles.module.scss'
import display from '../../../../assets/icons/display.svg'
import mobile from '../../../../assets/icons/mobile-screen.svg'

export function Header({ screenProps, ...props }: HeaderProps) {
  // Displays the viewport resolution and active breakpoint when the monitor is collapsed

  return (
    <div className={styles.header} {...props}>
      <p>Screen properties</p>
      <p>
        <img
          alt="Display icon"
          src={screenProps.breakpoint === 'mobile' ? mobile : display}
        />
        {screenProps.viewportSize}
        <span>{screenProps.breakpoint}</span>
      </p>
    </div>
  )
}
