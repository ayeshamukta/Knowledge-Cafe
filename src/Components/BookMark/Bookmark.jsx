import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title} = bookmark;
    
    return (
        <div className="rounded p-2 font-bold text-4xl  bg-white my-6">
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;