import { useState } from 'react'

import './App.css'
import Header from './Components/header/Header'
import Blogs from './Components/Blogs/Blogs'

import BookMarks from './Components/BookMarks/Bookmarks'

function App() {
  

  const[bookmarks,setBookmarks] = useState([]);
  const[readingTime,setReadingtime] = useState(0);

  const handleBookmark = blog=>
  {
    // console.log(blog);
    
    const updatedBookMarks = [...bookmarks,blog];
    setBookmarks(updatedBookMarks);
  }

  const handleReadingTime = (id,time) =>
  {
    
    // console.log("Mark as read connected",blg);
    // console.log(time);
    
    setReadingtime(readingTime+time);
    // console.log(id);
    
    //  handle removing
    const newBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(newBookmarks);
    // console.log(newBookmarks);
    
    
  }

  return (
    <>
      
      <div className=' w-11/12 mx-auto my-[20px]'>
        <Header></Header>
        <div className='flex my-[10px]'>
          <Blogs handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Blogs>
          <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
        </div>
      </div>
      
      
    </>
  );
};


export default App
