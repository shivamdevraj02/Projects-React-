import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to mumbai',
        body: 'I am very pleasure to going to mumbai. It is a great city with many attractions and things to do.  I am looking forward to exploring the city and experiencing all it has to offer.  ',
        reactions: 2,
        userId: "user-9",
        tags: ["travel", "mumbai"],
    },
    {
        id: '2',
        title: 'Exploring new places',
        body: 'I am very pleasure to exploring new places and meeting new people. It is a great way to learn about different cultures and ways of life.  I am looking forward to my next adventure and the new experiences it will bring.',
        reactions: 5,
        userId: "user-19",
        tags: ["travel", "adventure"],
    },
];

const postListReducer = (currPostList, action) => {
    if (action.type === 'DELETE_POST') {
        return currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }

    if (action.type === 'ADD_POST') {
        return [action.payload, ...currPostList];
    }

    return currPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST
    );

    const addPost = ({ userid, title, body, reaction, tags }) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: `post-${Date.now()}`,
                title,
                userId: userid,
                body,
                reactions: Number(reaction),
                tags,
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        });
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;