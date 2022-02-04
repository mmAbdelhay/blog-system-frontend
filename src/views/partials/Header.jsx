import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Blog system
        </a>
      </div>
    </nav>
  );
}
