
import PropTypes from "prop-types";
import Bookmark from "../BookMark/Bookmark";
const BookMarks = ({bookmarks,readingTime}) => {
    // console.log(bookmarks.length);
    
    return (
        <div className='w-1/3  m-3 p-3 rounded-lg'>
            <div className="ml-6 mb-3 p-3 border border-blue-900 rounded-lg font-bold bg-blue-100 text-center">
                <h3 className="text-xl text-blue-900">Spend Time on Reading : {readingTime} min</h3>
            </div>
            <div className='ml-6 mb-3 p-3 bg-gray-200 rounded-lg text-center'>
                <h2 className="text-2xl font-bold p-2">Bookmarked Blogs : {bookmarks.length}</h2>
                
                {/* {bookmarks.map(bookmark =>console.log(bookmark))} */}
                
                {
                    bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;