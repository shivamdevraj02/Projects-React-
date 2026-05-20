import { useRef, useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostListContext);

    const userIdRef = useRef(null);
    const titleRef = useRef(null);
    const bodyRef = useRef(null);
    const reactionRef = useRef(null);
    const tagsRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const userid = userIdRef.current.value;
        const title = titleRef.current.value;
        const body = bodyRef.current.value;
        const reaction = reactionRef.current.value;
        const tags = tagsRef.current.value.split(',').map(tag => tag.trim());

        addPost({ userid, title, body, reaction, tags });

        // clear fields
        userIdRef.current.value = '';
        titleRef.current.value = '';
        bodyRef.current.value = '';
        reactionRef.current.value = '';
        tagsRef.current.value = '';
    }

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter Your User ID</label>
                <input type="text" ref={userIdRef} className="form-control" id="userId" />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={titleRef} className="form-control" id="title" />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Body</label>
                <textarea rows="4" ref={bodyRef} className="form-control" id="body" />
            </div>

            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Post Reaction</label>
                <input type="text" ref={reactionRef} className="form-control" id="reaction" />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Post Tags</label>
                <input type="text" ref={tagsRef} className="form-control" id="tags" />
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default CreatePost;