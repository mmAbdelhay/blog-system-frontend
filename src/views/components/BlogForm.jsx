import React, { useState, useContext } from "react";
import { MainContext } from "../../resources/StoreProvider";
import { axiosRequests } from "../../services/axiosRequest";
import { useNavigate } from "react-router-dom";

export default function BlogForm(props) {
  const [title, setTitle] = useState(props.blog?.title ?? "");
  const [body, setBody] = useState(props.blog?.body ?? "");
  const { setBlogs } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length > 0 && body.length > 0) {
      const payload = {
        title: title,
        body: body,
      };
      if (props.blog) {
        const [index, res] = await axiosRequests("put", `blog/${props.blog._id}`, payload);
        if (index) navigate("/");
      } else {
        const [index, res] = await axiosRequests("post", "blog", payload);
        if (index) {
          setBlogs((prevState) => [...prevState, res.data]);
          setTitle("");
          setBody("");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
        {title.length == 0 && <span className="text-danger position-absolute">Title is required</span>}
      </div>
      <div className="my-4">
        <label className="form-label">Body</label>
        <textarea row="6" className="form-control" onChange={(e) => setBody(e.target.value)} value={body} />
        {body.length == 0 && <span className="text-danger position-absolute">Body is required</span>}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button type="submit" className="btn btn-primary btn-block" disabled={title.length == 0 || body.length == 0}>
          {props.blog ? "Save changes" : "Submit"}
        </button>
      </div>
    </form>
  );
}
