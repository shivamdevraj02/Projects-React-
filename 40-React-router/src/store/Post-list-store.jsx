import { createContext, useReducer, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPOst: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } 
 else if (action.type === "ADD_INITIAL_POSTS") {
  return [...action.payload.posts, ...currPostList]; 
}
  else if (action.type === "ADD_POST") {
    return [action.payload, ...currPostList];
  }

  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addInitialPOst = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  
  useEffect(() => {
    setFetching(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPOst(data.posts);
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  return (
    <PostListContext.Provider
      value={{ postList, addPost, addInitialPOst, fetching, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;