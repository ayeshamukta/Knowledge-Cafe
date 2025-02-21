import { useState } from 'react'

import './App.css'
import Header from './Components/header/Header'
import Blogs from './Components/Blogs/Blogs'

import BookMarks from './Components/BookMarks/Bookmarks'

function App() {
  

  const[bookmarks,setBookmarks] = useState([]);

  const handleBookmark = blog=>
  {
    // console.log(blog);
    
    const updatedBookMarks = [...bookmarks,blog];
    setBookmarks(updatedBookMarks);
  }
  return (
    <>
      
      <div className=' w-11/12 mx-auto my-[20px]'>
        <Header></Header>
        <div className='flex my-[10px]'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <BookMarks bookmarks={bookmarks}></BookMarks>
        </div>
      </div>
      
      
    </>
  )
}


export default App
