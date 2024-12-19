import React from "react";
import { FaAlignJustify } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>All Movies</h1>
        <div className="h2">
          <h2>Bizimlə Əlaqə</h2>
          <span><FaAlignJustify /></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
