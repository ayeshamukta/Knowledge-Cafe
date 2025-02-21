
import PropTypes from 'prop-types';
import './Blog.css'
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookmark}) => {
    console.log(blog);
    const {cover,title,author,authorimg,posteddate,readingtime,hashtags} = blog;
    
    return (
        <div className='my-[20px] mb-12'>
            <img className='w-full h-[500px] object-cover rounded-lg' src={cover} alt="" />
            <div className='my-[10px] flex justify-between items-center'>
                <div className='flex '>
                    <img className='author-pic rounded-full ' src={authorimg} alt="" />
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p>{posteddate}</p>

                    </div>
                </div>
                <div className='flex gap-3 justify-center text-xl items-center'>
                    <p >{readingtime} </p>
                    <button onClick={handleBookmark}><FaBookmark className='items-center text-blue-400'/></button>
                </div>
                
            </div>
            <div>
                <h2 className='font-bold text-3xl'>{title}</h2>
                {
                    hashtags.map((tag,idx) => <a key={idx} href={tag}> {tag} </a>)
                }
                <br />
                <button><a href="">Mark as Read</a></button>
            </div>
            
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;