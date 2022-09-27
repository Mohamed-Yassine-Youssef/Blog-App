import { useContext, useState } from "react";
import axios from "axios";
import "./write.css";
import { Context } from "../../context/Context";
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
      try {
        const res = await axios.post("/api/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      } catch (err) {}
    }
    axios.post("/api/posts");
  };

  return (
    <div className="write container">
      <div className="write-image-container">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
      </div>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <input
            className="writeInput title"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <select
          className="form-control mt-3"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" selected disabled hidden>
            select post category
          </option>
          <option value="music">music</option>
          <option value="sports">sports</option>
          <option value="Politics">Politics</option>
          <option value="Technologies">Technologies</option>
        </select>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
