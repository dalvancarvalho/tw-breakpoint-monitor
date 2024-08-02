# Tailwind Breakpoint Monitor

![license type](https://img.shields.io/badge/license-MIT-blue)

**Tailwind Breakpoint Monitor** is a React component that displays the current Tailwind CSS breakpoint in the corner of the screen. It is ideal for developers who want to quickly identify the active breakpoint during development.

<div align="center">
  <img
    style="width: 700px"
    src="./public/banner.png"
    alt="banner"
  />
</div>

### Installation

```bash
npm i tw-breakpoint-monitor
```

### Usage

```javascript
import { TwBreakpointMonitor } from 'tw-breakpoint-monitor'

export default function App() {
  return (
    <>
      ...
      <TwBreakpointMonitor />
    </>
  )
}
```

<br />

> 💡 Tip: You can also import the `isDevEnvironment` constant and conditionally render the component only if the app is running in development mode. This way, it will not appear when you run the preview build with `npm run preview`, for example.

```diff
- import { TwBreakpointMonitor } from 'tw-breakpoint-monitor'
+ import { isDevEnvironment, TwBreakpointMonitor } from 'tw-breakpoint-monitor'
```

```javascript
export default function App() {
  return (
    <>
      ...
      {isDevEnvironment && <TwBreakpointMonitor />}
    </>
  )
}
```

### API Reference

| Property     |                                                                              Description                                                                              |    Default     |
| ------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------: |
| position     | Place of the screen where the component will be rendered. Available options are `bottom-left`, `bottom-center`, `bottom-right`, `top-left`, `top-center`, `top-right` | `bottom-right` |
| transparency |                                  Determines whether the component will have a level of transparency. Can be either `true` or `false`                                  |     `true`     |
