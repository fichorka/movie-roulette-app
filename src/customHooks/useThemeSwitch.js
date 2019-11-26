import { useEffect } from 'react'

// useThemeSwitch
export default ({ theme }) => {
  useEffect(() => {
    document.getElementById('app').className = ''
    switch (theme) {
      case 1:
        document.getElementById('app').classList.add('light')
        break
      case 2:
        document.getElementById('app').classList.add('lightPlus')
        break
      case 3:
        document.getElementById('app').classList.add('dark')
        break
      case 4:
        document.getElementById('app').classList.add('darkPlus')
        break
    }
  }, [theme])
}
