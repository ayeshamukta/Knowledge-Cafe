// import React from 'react';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

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
                blogs.map(blog=><Blog blog={blog} ></Blog>
                    // console.log(blog);
                    
                
                )
            }
        </div>
    );
};

export default Blogs;