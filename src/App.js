import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import postList from './components/postList'
import blogPost from './components/blogPost'
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={postList} />
        <Route path="/post/:post_id?" component={blogPost} />
      </Router>
    </div>
  );
}

export default App;
