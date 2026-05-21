import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    addInitialPOst: () => {},
    deletePost: () => {},
});



const postListReducer = (currPostList, action) => {
    if (action.type === 'DELETE_POST') {
        return currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }

    else if (action.type === 'ADD_INITIAL_POSTS') {
        return action.payload.posts;
    }

    if (action.type === 'ADD_POST') {
        return [action.payload, ...currPostList];
    }

    return currPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
    );

    const addInitialPOst = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {

                posts,
            },
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

    return (
        <PostListContext.Provider value={{ postList, addPost, addInitialPOst, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;