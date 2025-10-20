import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../../assets/data.json";
import AppButton from "../../components/AppButton/AppButton";
import './PostPage.css';

export default function PostPage() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  
  const post = data.find((p) => p.id.toString() === id);
  
  const isLiked = useSelector((state) => state.likes.likesByPost[post?.id]);

  const handleAddComment = () => {
    if (inputValue.trim()) {
      const newComment = {
        id: Date.now(),
        text: inputValue,
        author: "User",
      };
      setComments([...comments, newComment]);
      setInputValue("");
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  const allComments = [...post.comments, ...comments];
  const totalLikes = post.likes + (isLiked ? 1 : 0);

  return (
    <div className="postPage">
      <div key={post.id}>
        <img src={`../${post.url}`} width={"100%"} alt={post.title}/>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <span style={{fontSize: '18px', color: isLiked ? '#ff6b6b' : '#667eea'}}>
            ❤️ {totalLikes} {totalLikes === 1 ? 'like' : 'likes'}
          </span>
        </div>
        <h3>Comments:</h3>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="inputComment"
          placeholder="Write a comment..."
          onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
        />
        <AppButton onClick={handleAddComment} className="addCommentButton">
          Add Comment
        </AppButton>
        <div>
          {allComments.length > 0 ? (
            allComments.map((comment) => (
              <div key={comment.id} style={{marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
                <strong>{comment.author}:</strong> {comment.text}
              </div>
            ))
          ) : (
            <p style={{color: '#666', fontStyle: 'italic'}}>No comments yet. Be the first!</p>
          )}
        </div>
      </div>
      <Link to="/" style={{display: "flex", justifyContent: "flex-end", marginTop: '20px'}} className="backButton">
        Back to Home
      </Link>
    </div>
  );
}