import { Switch } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './cmps/Header'
import Coinpage from './pages/Coinpage'
import Homepage from './pages/Homepage'
import { makeStyles } from '@material-ui/core'

function App () {
  const useStyles = makeStyles(() => ({
    App: {
      background: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route path='/coin/:id' component={Coinpage} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
