// import React from 'react';
import { useEffect, useState } from "react";

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
        </div>
    );
};

export default Blogs;