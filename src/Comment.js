import React from 'react';

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment }) =>
    <li>{text}
        <span>votes: {votes}</span>
        <div className="rating">
            <button onClick={() => thumbUpComment(id)}>Thumb up</button>
            <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        </div>
        <div className="edit-comment">
          
            <button onClick={() => editComment(prompt("Enter the new text below"), id)}>Edit this comment</button>
            <button onClick={() => removeComment(id)}>Remove this comment</button>
        </div>
    </li>;

export default Comment;