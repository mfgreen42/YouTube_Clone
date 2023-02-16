
//this component maps over the comments for a video and displays them


const CommentList = (props) => {


    return ( 
    <div className="table">
        <div>
            {props.postComment.map((comment) => {
                return (
                    <div>
                        <p>{comment.name}</p>
                        <p>{comment.comment}</p>
                        <hr></hr>
                    </div>
                )
            })}
        </div>

    </div> );
}
 
export default CommentList;