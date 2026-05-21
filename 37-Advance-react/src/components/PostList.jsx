import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/Post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
    const { postList, addInitialPOst } = useContext(PostListContext);

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addInitialPOst(data.posts);
                setFetching(false);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted");
                }
            });


        return () => {
            controller.abort();
        };

    }, []);


    return (
        <>
            {fetching && <LoadingSpinner />}

            {!fetching && postList.length === 0 && (
                <Welcome />
            )}

            {!fetching &&
                postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
        </>
    );
}

export default PostList;