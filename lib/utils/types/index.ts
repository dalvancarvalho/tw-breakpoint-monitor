/* types/index.ts */

type Position =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right'

interface ScreenProps {
  breakpoint: string
  dpr: string
  orientation: string
  screenSize: string
  viewportSize: string
}

export interface TwBreakpointMonitorProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: Position
  transparency?: boolean
}

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isMonitorExpanded: boolean
  screenProps: ScreenProps
  toggleMonitor: (event: React.MouseEvent<HTMLDivElement>) => void
}

export interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isMonitorExpanded: boolean
  position: string
  toggleMonitor: (event: React.MouseEvent<HTMLButtonElement>) => void
  transparency: boolean
}
