/* useScreenProps.ts */

import { useEffect, useState } from 'react'

export function useScreenProps() {
  // Custom hook that returns several screen properties

  const [isPortrait, setIsPortrait] = useState(false)
  const [viewportDimensions, setViewportDimensions] = useState({
    height: 0,
    width: 0,
  })
  const [tailwindBreakpoints, setTailwindBreakpoints] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  })

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    // Event listener cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsPortrait(viewportDimensions.height > viewportDimensions.width)
    setTailwindBreakpoints({
      sm: viewportDimensions.width >= 640,
      md: viewportDimensions.width >= 768,
      lg: viewportDimensions.width >= 1024,
      xl: viewportDimensions.width >= 1280,
      '2xl': viewportDimensions.width >= 1536,
    })
  }, [viewportDimensions])

  function handleResize() {
    // Sets the viewport dimensions to state

    setViewportDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  return { isPortrait, tailwindBreakpoints, viewportDimensions }
}
