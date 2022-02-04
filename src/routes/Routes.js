import React from "react";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Blog from "../views/pages/Blog";
import EditBlog from "../views/pages/EditBlog";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/editBlog" element={<EditBlog />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  );
}
