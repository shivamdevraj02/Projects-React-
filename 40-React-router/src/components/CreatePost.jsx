import { useRef, useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const reactionRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userid = userIdRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const reaction = Number(reactionRef.current.value);
    const tags = tagsRef.current.value.split(",").map(tag => tag.trim());

    fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title,
    body,
    reactions: { likes: Number(reaction), dislikes: 0 },
    userId: userid,
    tags,
  }),
})
  .then((res) => res.json())
  .then((post) => {
    addPost({
      ...post,
      id: Date.now(), 
    });
  });

    // Clear form
    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    reactionRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">User ID</label>
        <input type="text" ref={userIdRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" ref={titleRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea ref={bodyRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Reactions</label>
        <input type="text" ref={reactionRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Tags</label>
        <input type="text" ref={tagsRef} className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Post
      </button>
    </form>
  );
};

export default CreatePost;