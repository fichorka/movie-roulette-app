import React from 'react'

// ThemeSwitch
export default ({ dispatch }) => {
  return (
    <div className='ui-button' onClick={() => dispatch({ type: 'SWITCH_THEME' })}>
          ☀
    </div>
  )
}
