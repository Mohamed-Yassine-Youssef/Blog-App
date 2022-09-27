import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      await axios.get("/api/posts" + search).then((res) => {
        setPosts(res.data);
      });
    }
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />

      <Sidebar />
      <div className="container">
        <Posts posts={posts} />
      </div>
    </>
  );
}
