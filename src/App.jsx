import { useState } from 'react'

import './App.css'
import Header from './Components/header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/BookMark/Bookmark'

function App() {
  

  const[bookmark,setBookmark] = useState([]);

  const handleBookmark = id=>
  {
    console.log('clicked handle bookmark');
    
  }
  return (
    <>
      
      <div className=' w-11/12 mx-auto my-[20px]'>
        <Header></Header>
        <div className='flex my-[10px]'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <Bookmark></Bookmark>
        </div>
      </div>
      
      
    </>
  )
}


export default App
