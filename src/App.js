import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import 'bulma/css/bulma.css'

import Main from './components/master';
// import HeaderText from  './components/titles';
import TopNav from './components/topHeader';
import BottomNav from './components/bottomHeader';
import Home from './components/home'
import About from './components/about'
import Products from './components/cartegories/allCartegories'

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
          <Route component={BottomNav} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact strict path="/about" component={About}/>
            <Route exact strict path="/all-products" component={Products}/>
          </Switch>
        </Router>
      </Main>
    </div>
  );
}

export default App;
