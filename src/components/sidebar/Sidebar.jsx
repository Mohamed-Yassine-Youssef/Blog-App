import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      await axios.get("/api/categories").then((res) => {
        setCats(res.data);
      });
    };
    getCats();
  }, []);
  var links = document.querySelectorAll(".link");
  function addActive(el) {
    el.onclick = function () {
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      this.classList.add("active");
    };
  }
  links.forEach((elem) => addActive(elem));
  return (
    <div className="categories container">
      <ul className="catList">
        <li>
          <Link to="/" className="active link">
            Home
          </Link>
        </li>
        {cats.map((c) => (
          <li className="catListItem" key={c._id}>
            <Link to={`/?cat=${c.name}`} className=" link">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
