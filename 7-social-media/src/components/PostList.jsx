import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";
import Post from "./Post";

function PostList() {
    const { postList } = useContext(PostListContext);
    console.log("postList", postList);

    return (
        <>
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}

export default PostList;