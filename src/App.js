import React, { useEffect, useContext } from "react";
import Blogs from "./views/components/Blogs";
import BlogForm from "./views/components/BlogForm";
import { MainContext } from "./resources/StoreProvider";
import { axiosRequests } from "./services/axiosRequest";

export default function App() {
  const { setBlogs } = useContext(MainContext);
  useEffect(async () => {
    const [index, res] = await axiosRequests("get", "blogs");
    if (index) setBlogs(res.data);
  }, []);

  return (
    <div className="container mt-5">
      <BlogForm />
      <hr />
      <Blogs />
    </div>
  );
}
