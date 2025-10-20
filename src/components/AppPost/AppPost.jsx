import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../redux/slices/postsSlice";
import AppButton from "../AppButton/AppButton";
import "./AppPost.css";
import { useNavigate } from "react-router-dom";

export default function AppPost({post}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isLiked = useSelector((state) => state.likes.likesByPost[post.id]);
    const totalLikes = post.likes + (isLiked ? 1 : 0);

    function handleToggleLike() {
        dispatch(toggleLike(post.id));
    }
    
    function handleNavigate() {
        navigate(`/post/${post.id}`);
    }

    return (
    <div key={post.id} className="postContainer">
        <img src={post.url} style={{borderRadius: "20px", width: "100%", height: "350px"}} alt={post.title}/>
        <div className="postText" onClick={handleNavigate}>
           <h2 className="postNavigate">{post.title}</h2>
            <p>{post.excerpt}</p> 
        </div> 
        <div className="likes_comment">
            <AppButton onClick={handleToggleLike}>
                <img src="likes-logo.png" height={30} alt="likes"/>
                <p style={{color: isLiked ? '#4f7e49ff' : 'inherit', fontWeight: isLiked ? '700' : 'normal'}}>{totalLikes}</p>
            </AppButton>
            <AppButton onClick={handleNavigate}>
                <img src="comment-logo.png" height={30} alt="comments"/>
                <p>{post.comments.length}</p>
            </AppButton>
        </div>
    </div>
    );
}