import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../resources/StoreProvider";
import { axiosRequests } from "../../services/axiosRequest";

export default function Blogs() {
  const { blogs, setBlogs } = useContext(MainContext);

  const deleteBlog = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog")) {
      const [index, res] = await axiosRequests("delete", `blog/${blogId}`);
      if (index) {
        setBlogs((prevState) => prevState.filter((blog) => blog._id !== blogId));
      }
    }
  };

  return (
    <div>
      {blogs.length > 0 ? (
        blogs?.map((blog, index) => (
          <div key={index} className="card m-4">
            <div className="card-body">
              <div className="card-title">
                <div className="d-flex justify-content-between">
                  <h3>{blog.title}</h3>
                  <div>
                    <Link to="editBlog" className="btn" title="see more" state={{ blog: blog }}>
                      📝
                    </Link>
                    <button className="btn" title="delete" onClick={() => deleteBlog(blog._id)}>
                      ❌
                    </button>
                  </div>
                </div>
              </div>
              <p style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", whiteSpace: "nowrap" }}>
                {blog.body}
              </p>
              <div className="d-flex justify-content-between">
                <p>
                  <span>
                    <strong>Published at : </strong>
                  </span>
                  {blog.publishedAt}
                </p>
                {blog.body.length > 400 && (
                  <Link to="blog" title="see more" state={{ blog: blog }}>
                    see more
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No posts</p>
      )}
    </div>
  );
}
