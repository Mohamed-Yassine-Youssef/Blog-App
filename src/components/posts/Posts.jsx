import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts row">
      {posts.map((p) => (
        <div className="post col-md-6 col-lg-4 " key={p._id}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
}
