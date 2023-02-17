
//this component maps over the comments and displays them


const CommentList = (props) => {



    return ( 
    <div className="table">
        
        <div>
            {props.postComment.map((comment) => {
                return (
                    <div key = {comment.id}>
                        <hr></hr>
                        <p className="p-comment">{comment.name}</p>
                        <p className="p-comment">{comment.comment}</p>
                        <hr></hr>
                    </div>
                )
            })}
        </div>

    </div> );
}
 
export default CommentList;