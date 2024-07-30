/* Heading/index.tsx */

import type { HeadingProps } from '../../../../utils/types'
import styles from './styles.module.scss'
import display from '../../../../assets/display-solid.svg'
import mobile from '../../../../assets/mobile-screen-solid.svg'

export function Heading({ screenProps, ...props }: HeadingProps) {
  // Displays the viewport resolution and active breakpoint when the monitor is collapsed

  return (
    <header className={styles.header} {...props}>
      <p>Screen properties</p>
      <p>
        <img
          alt="Display icon"
          src={screenProps.breakpoint === 'mobile' ? mobile : display}
        />
        {screenProps.viewportSize}
        <span>{screenProps.breakpoint}</span>
      </p>
    </header>
  )
}
