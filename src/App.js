import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import About from './components/about/About';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';
import ErrorRoute from './components/errorRoute/ErrorRoute';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorRoute} />
      </Switch>
    </div>
  );
}

export default App;
