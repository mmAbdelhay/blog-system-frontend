import React from "react";
import BlogForm from "../components/BlogForm";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditBlog() {
  const { blog } = useLocation().state;
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <button className="btn float-end" onClick={() => navigate("/")}>
        <u>Go back</u>
      </button>
      <br />
      <BlogForm blog={blog} />
    </div>
  );
}
