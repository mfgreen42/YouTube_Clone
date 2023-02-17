
//this component maps over the comments and displays them


const CommentList = (props) => {



    return ( 
    <div className="table">
        
        <div>
            {props.postComment.map((comment) => {
                return (
                    <div key = {comment.id}>
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