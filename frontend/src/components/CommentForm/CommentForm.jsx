import React, { useState } from "react";
import { useParams } from "react-router-dom";

//This component makes the comment box and handles the submit function
const CommentForm = (props) => {
    let videoId = useParams();

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
        name: name,
        comment: comment,
        videoId: {videoId},
    };

    props.addNewComment(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            className="form-control"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="button" style={{ "margin-top": "1em" }}>
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
