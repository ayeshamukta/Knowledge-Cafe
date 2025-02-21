// import React from 'react';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark,handleReadingTime}) => {
    // console.log(handleReadingTime);
    

    const [blogs,setBlogs] = useState([]);
    useEffect(()=>
        {
            fetch('blogs.json')
            .then(res=>res.json())
            .then(data=>setBlogs(data))
            // .then(data=>console.log(data))
        },[]);

    return (
        <div className="w-2/3">
            <p>Blogs : {blogs.length}</p>
            {
                blogs.map(blog=><Blog handleReadingTime={handleReadingTime} handleBookmark={handleBookmark} key={blog.id}
                    blog={blog} ></Blog>
                    // console.log(blog);
                 
                )
            }
        </div>
    );
};


Blogs.propTypes={
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;