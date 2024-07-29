/* Heading/index.tsx */

// import { faDisplay, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { HeadingProps } from '../../../../utils/types'
import styles from './styles.module.css'

export function Heading({ isMonitorExpanded, screenProps, toggleMonitor }: HeadingProps) {
  //

  return (
    <div
      // className={styles.heading}
      onClick={(event) => toggleMonitor(event)}
      data-monitor-expanded={isMonitorExpanded}
    >
      <p>Screen properties</p>
      <p>
        {/* <FontAwesomeIcon
          className="scale-[1.2]"
          icon={screenProps.breakpoint === 'mobile' ? faMobileScreen : faDisplay}
        /> */}
        {screenProps.viewportSize} ({screenProps.breakpoint})
      </p>
    </div>
  )
}
