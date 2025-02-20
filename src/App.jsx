import { useState } from 'react'
// "authorimg": "https://i.ibb.co.com/LhQJjtjR/bike-shop-with-shop-assistant.jpg",
import './App.css'
import Header from './Components/header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/BookMark/Bookmark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className=' w-11/12 mx-auto my-[20px]'>
        <Header></Header>
        <div className='flex my-[10px]'>
          <Blogs></Blogs>
          <Bookmark></Bookmark>
        </div>
      </div>
      
      
    </>
  )
}


export default App
