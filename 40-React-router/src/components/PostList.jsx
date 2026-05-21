import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <LoadingSpinner />}

      {!fetching && postList.length === 0 && <Welcome />}

      {!fetching &&
        postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </>
  );
}

export default PostList;