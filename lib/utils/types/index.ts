/* types/index.ts */

import { ComponentProps } from 'react'

interface ScreenProps {
  breakpoint: string
  dpr: string
  orientation: string
  screenSize: string
  viewportSize: string
}

export interface TwBreakpointMonitorProps {
  className?: string
  position?:
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
  transparency?: boolean
}

export interface HeaderProps extends ComponentProps<'div'> {
  screenProps: ScreenProps
}

export interface ToggleButtonProps extends ComponentProps<'button'> {}

export interface TableProps extends ComponentProps<'table'> {
  screenProps: ScreenProps
}
