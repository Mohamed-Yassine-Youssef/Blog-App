import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="card">
      {post.photo && (
        <img className="card-img-top " src={PF + post.photo} alt="" />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text postDesc">{post.desc}</p>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <span href="#" className="btn btn-primary">
          <Link to={`/post/${post._id}`} className="link">
            View Post
          </Link>
        </span>
      </div>
    </div>
  );
}
