import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/Post-list-store'

function App() {
  const [selectTab, setSelectTab] = useState('home');

  return (
    <>

      <PostListProvider>   
      <div className="app-container">
        <Sidebar  selectTab={selectTab} setSelectTab={setSelectTab} />

      <div className="content">
        <Header />
        {selectTab === 'home'  ?(<PostList />) : (<CreatePost />)}
        
        <Footer />

      </div>
      </div>

      </PostListProvider>  
    </>

  )
}

export default App
