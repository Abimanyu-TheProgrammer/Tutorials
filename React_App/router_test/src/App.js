import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import post from "./components/post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* the switch tag will make the '/:id' route display post only, 
        if we don't use that, then the browser will display other components as well 
        because 'id' can be anything, numbers or letters */}
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path ='/:id' component = {post}/>
        {/* this becomes the params in post.js */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
