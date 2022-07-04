import video from "../data/video.js";
import CommentSection from "./CommentSection.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [showcomments, setShowComments] = useState(false)
  const [show, setShow] = useState(true)

  const onClick = () => {
    setShowComments(!showcomments)
    setShow(!show)
  }
  function upclick(){
   return setUpvotes(upvotes + 1)
  }
  function downclick(){
    return setDownvotes(downvotes - 1)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <h3>
        {video.views} views | Uploaded {video.createdAt}
      </h3>
      <button onClick={upclick}>{upvotes}👍</button>
      <button onClick={downclick}>{downvotes}👎</button>
      {show ? <button onClick={onClick}>Show Comments</button> :<button onClick={onClick}>Hide Comments</button>}
      <hr></hr>
      <h1>{video.comments.length} Comments</h1>
      {showcomments ?<CommentSection comments={video.comments} /> : null}
      
    </div>
  );
}

export default App;
