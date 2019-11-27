import React from 'react'

// ThemeSwitch
export default ({ dispatch }) => {
  return (
    <div className='theme-switch' onClick={() => dispatch({ type: 'SWITCH_THEME' })}>
          ☀
    </div>
  )
}
