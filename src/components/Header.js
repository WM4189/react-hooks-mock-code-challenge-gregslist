import React from "react";
import Search from "./Search";

function Header({onListFormSubmit}) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onListFormSubmit={onListFormSubmit}  />
    </header>
  );
}

export default Header;
