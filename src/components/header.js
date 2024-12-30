import React from "react";
import { Link } from "react-router-dom"; // Thay đổi từ "a" sang "Link"
import "./styles.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Mobi App Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/apps">Apps</Link> {/* Link đến danh sách mô tả chức năng */}
        <Link to="/downloads">Downloads</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
