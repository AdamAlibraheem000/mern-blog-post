import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('/articles')
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  })

  
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Routes>
      <Route path='/' element={ <Articles posts={posts}/>}/>
      <Route path='/add-article' element={ <AddArticle/> }/>
     </Routes>
     <Footer/>
     </div>
  );
}

export default App;
