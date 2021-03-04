import './App.css'
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core'
import theme from './constants/theme'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App