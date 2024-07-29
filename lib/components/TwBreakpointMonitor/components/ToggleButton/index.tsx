/* ToggleButton/index.tsx */

// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { ToggleButtonProps } from '../../../../utils/types'
import styles from './styles.module.css'

export function ToggleButton({
  isMonitorExpanded,
  position,
  toggleMonitor,
  transparency,
}: ToggleButtonProps) {
  // Toggles the panel between collapsed/expanded state

  return (
    <button
      // className={styles.button}
      onClick={(event) => toggleMonitor(event)}
      title={isMonitorExpanded ? 'Collapse panel' : 'Expand panel'}
      data-position={position}
      data-transparency={transparency}
    >
      {/* <FontAwesomeIcon
        className="transition-rotate duration-150 delay-300
        group-data-[position|=top]/panel:group-data-[panel-expanded=true]/panel:rotate-180
        group-data-[position|=bottom]/panel:group-data-[panel-expanded=false]/panel:rotate-180"
        icon={faChevronDown}
        size="sm"
      /> */}
    </button>
  )
}
