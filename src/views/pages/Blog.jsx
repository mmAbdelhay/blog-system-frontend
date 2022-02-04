import React from "react";
import { axiosRequests } from "../../services/axiosRequest";
import { useLocation, useNavigate } from "react-router-dom";

export default function Blog() {
  const { blog } = useLocation().state;
  const navigate = useNavigate();

  const deleteBlog = async (blogId) => {
    const [index, res] = await axiosRequests("delete", `blog/${blogId}`);
    if (index) navigate("/");
  };

  return (
    <div className="container mt-5">
      <button className="btn" onClick={() => navigate("/")}>
        <u>Go back</u>
      </button>
      <div className="card m-4">
        <div className="card-body">
          <div className="card-title">
            <div className="d-flex justify-content-between">
              <h3>{blog.title}</h3>
              <button className="btn" onClick={() => deleteBlog(blog._id)}>
                ❌
              </button>
            </div>
          </div>
          <p>{blog.body}</p>
          <p>
            <span>
              <strong>Published at : </strong>
            </span>
            {blog.publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
}
