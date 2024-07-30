/* TwBreakpointMonitor/index.tsx */

import type { TwBreakpointMonitorProps } from '../../utils/types'
import { forwardRef } from 'react'
import { useBreakpointMonitor } from './hooks/useBreakpointMonitor'
import { Heading } from './components/Heading'
import { ToggleButton } from './components/ToggleButton'
import { Table } from './components/Table'
import styles from './styles.module.scss'

export const TwBreakpointMonitor = forwardRef<HTMLDivElement, TwBreakpointMonitorProps>(
  function TwBreakpointMonitor(
    { className, position = 'bottom-right', transparency = true, ...props },
    ref
  ) {
    // Displays several screen properties with emphasis in the current breakpoint

    const { isMonitorExpanded, toggleMonitor, ...screenProps } = useBreakpointMonitor()

    return (
      <div
        className={`${styles.monitor} ${className}`}
        data-monitor-expanded={isMonitorExpanded}
        data-position={position}
        data-transparency={transparency}
        ref={ref}
        {...props}
      >
        <Heading
          data-monitor-expanded={isMonitorExpanded}
          onClick={(event) => toggleMonitor(event)}
          screenProps={screenProps}
        />

        <ToggleButton
          data-monitor-expanded={isMonitorExpanded}
          data-position={position}
          data-transparency={transparency}
          onClick={(event) => toggleMonitor(event)}
          title={isMonitorExpanded ? 'Collapse monitor' : 'Expand monitor'}
        />

        <Table data-position={position} screenProps={screenProps} />
      </div>
    )
  }
)
TwBreakpointMonitor.displayName = 'TwBreakpointMonitor'
