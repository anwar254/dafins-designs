import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import 'bulma/css/bulma.css'

import Main from './components/master';
// import HeaderText from  './components/titles';
import TopNav from './components/topHeader';
import BottomNav from './components/bottomHeader';
import Home from './components/home'
import Login from './components/login'

const theme = {
  font: 'Work Sans',
  fontTwo: 'Montserrat',
  primaryFont: true
}

function App() {
  return (
    <div className="App">
      <Main>
        <ThemeProvider theme={theme}>
          <TopNav />
        </ThemeProvider>
        <Router>
          <Switch>
            <Route component={BottomNav} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/session/login" component={Login}/>
          </Switch>
        </Router>
      </Main>
    </div>
  );
}

export default App;
