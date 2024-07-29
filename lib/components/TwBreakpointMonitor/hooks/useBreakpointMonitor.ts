/* useBreakpointMonitor.ts */

import { useEffect, useState } from 'react'

import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { useScreenProps } from '../../../hooks/useScreenProps'

export function useBreakpointMonitor() {
  // Defines the properties displayed in the Tailwind Breakpoint Monitor

  const [breakpoint, setBreakpoint] = useState('n/a')
  const [isMonitorExpanded, setMonitorExpanded] = useLocalStorage(
    'tw-breakpoint-monitor-expanded',
    false
  )
  const { isPortrait, tailwindBreakpoints, viewportDimensions } = useScreenProps()
  const { width, height } = viewportDimensions

  const dpr = window.devicePixelRatio.toFixed(2)
  const orientation = isPortrait ? 'Portrait' : 'Landscape'
  const screenSize = window.screen.width + ' x ' + window.screen.height
  const viewportSize = width + ' x ' + height

  useEffect(() => {
    const breakpointsList = Object.keys(tailwindBreakpoints)
    const statusList = Object.values(tailwindBreakpoints)
    const currentBreakpoint = statusList.lastIndexOf(true)

    if (currentBreakpoint === -1) {
      setBreakpoint('mobile')
      return
    }

    setBreakpoint(breakpointsList[currentBreakpoint])
  }, [tailwindBreakpoints])

  function toggleMonitor(
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation()
    setMonitorExpanded((current) => !current)
  }

  return {
    isMonitorExpanded,
    toggleMonitor,
    dpr,
    orientation,
    screenSize,
    viewportSize,
    breakpoint,
  }
}
