import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import React, { createContext, useEffect, useState } from 'react';
import PostDetails from './components/PostDetails/PostDetails';

export const MainContext = createContext(); 


function App() {
  const [allPosts, setAllPosts] = useState([]);

  // fetch all posts
  useEffect(()=>{
      const url ='https://jsonplaceholder.typicode.com/posts';
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setAllPosts(data);
      });
  },[]);
  // console.log(posts);

  return (
    <div className="App">
      <Header></Header>
      <MainContext.Provider value={allPosts}>
        <BrowserRouter>
          <Routes>
            <Route path='/main' element={<Main/>} />
            <Route exact path='/' element={<Main/>} />
            <Route path='/post/:postId' element={<PostDetails/>} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
