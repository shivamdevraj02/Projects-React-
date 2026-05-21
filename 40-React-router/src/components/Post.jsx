import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

function Post({ post }) {

    const { deletePost } = useContext(PostListContext);

    return (
        <div className="card post-card">

            <div className="card-body">

                <h5 className="card-title d-flex justify-content-between align-items-center">
                    {post.title}

                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => deletePost(post.id)}
                    >
                        <AiFillDelete />
                    </button>
                </h5>

                <p className="card-text">{post.body}</p>

                {/* Tags */}
                {post.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-primary me-1">
                        {tag}
                    </span>
                ))}

                {/* Reactions */}
               <div className="alert alert-success mt-3" role="alert">
  Likes: {post.reactions?.likes || 0} | 
  Dislikes: {post.reactions?.dislikes || 0}
</div>

            </div>
        </div>
    )
}

export default Post;