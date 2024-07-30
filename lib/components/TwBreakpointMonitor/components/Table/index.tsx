/* Table/index.tsx */

import type { TableProps } from '../../../../utils/types'
import styles from './styles.module.scss'
import circleQuestion from '../../../../assets/circle-question-solid.svg'

export function Table({ screenProps, ...props }: TableProps) {
  // Displays several screen properties when the monitor is expanded

  return (
    <table className={styles.table} {...props}>
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
              <img src={circleQuestion} alt="Learn more icon" />
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
              <img src={circleQuestion} alt="Learn more icon" />
            </a>
          </th>
          <td>{screenProps.breakpoint}</td>
        </tr>
      </tbody>
    </table>
  )
}
