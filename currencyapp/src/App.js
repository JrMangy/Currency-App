import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import ConversionComp from "./Components/ConversionComp";

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {Home} exact/>
          {/* <Route path = "/About" component = {About} /> */}
          <Route path = "/ConversionComp" component = {ConversionComp} />
          <Route component = {Error} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App