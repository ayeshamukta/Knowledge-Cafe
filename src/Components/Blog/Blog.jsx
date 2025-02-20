
import PropTypes from 'prop-types';
import './Blog.css'
const Blog = ({blog}) => {
    console.log(blog);
    const {cover,title,author,authorimg,posteddate,readingtime,hashtags} = blog;
    
    return (
        <div className='my-[20px]'>
            <img className='w-full h-[500px] object-cover rounded-lg' src={cover} alt="" />
            <div className='my-[10px] flex justify-between items-center'>
                <div className='flex '>
                    <img className='author-pic rounded-full ' src={authorimg} alt="" />
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p>{posteddate}</p>

                    </div>
                </div>
                <p>{readingtime}</p>
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