/* TwBreakpointMonitor/index.tsx */

// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { TwBreakpointMonitorProps } from '../../utils/types'
import { forwardRef } from 'react'
import { useBreakpointMonitor } from './hooks/useBreakpointMonitor'
import { Heading } from './components/Heading'
import { ToggleButton } from './components/ToggleButton'
import styles from './styles.module.css'

export const TwBreakpointMonitor = forwardRef<HTMLDivElement, TwBreakpointMonitorProps>(
  function TwBreakpointMonitor(
    { position = 'bottom-right', transparency = true, ...props },
    ref
  ) {
    // Displays several screen properties with emphasis in the current breakpoint

    const { isMonitorExpanded, toggleMonitor, ...screenProps } = useBreakpointMonitor()

    return (
      <div
        className={styles.monitor}
        data-monitor-expanded={isMonitorExpanded}
        data-position={position}
        data-transparency={transparency}
        ref={ref}
        {...props}
      >
        <ToggleButton
          isMonitorExpanded={isMonitorExpanded}
          toggleMonitor={toggleMonitor}
          position={position}
          transparency={transparency}
        />

        <Heading
          isMonitorExpanded={isMonitorExpanded}
          screenProps={screenProps}
          toggleMonitor={toggleMonitor}
        />

        <table>
          <tbody>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Value</th>
            </tr>

            {/* DPR */}
            <tr>
              <th scope="row">
                DPR
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Learn more about Device Pixel Ratio"
                >
                  {/* <FontAwesomeIcon
                    className="w-6 opacity-70 group-hover/link:opacity-100 transition-all duration-300"
                    icon={faQuestionCircle}
                    size="sm"
                  /> */}
                </a>
              </th>
              <td>{screenProps.dpr}</td>
            </tr>

            {/* Orientation */}
            <tr>
              <th scope="row">Orientation</th>
              <td>{screenProps.orientation}</td>
            </tr>

            {/* Screen size */}
            <tr>
              <th scope="row">Screen size</th>
              <td>{screenProps.screenSize}</td>
            </tr>

            {/* Viewport size */}
            <tr>
              <th scope="row">Viewport size</th>
              <td>{screenProps.viewportSize}</td>
            </tr>

            {/* Breakpoint */}
            <tr>
              <th scope="row">
                Breakpoint
                <a
                  href="https://tailwindcss.com/docs/responsive-design"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Learn more about breakpoints in Tailwind CSS"
                >
                  {/* <FontAwesomeIcon
                    className="w-6 opacity-70 group-hover/link:opacity-100 transition-all duration-300"
                    icon={faQuestionCircle}
                    size="sm"
                  /> */}
                </a>
              </th>
              <td>{screenProps.breakpoint}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
)
// TwBreakpointChecker.displayName = 'TwBreakpointChecker'
