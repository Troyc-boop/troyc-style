import React from "react";

type Props = {

}

const NavBar:React.FC<Props> = (props) =>{
  return(
      <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
              <button className="btn btn-outline-secondary m-2" type="button">+ New</button>
              <button className="btn btn-outline-secondary m-2" type="button">Save</button>
              <button className="btn btn-outline-secondary m-2" type="button">Favorites</button>
              <button className="btn btn-outline-secondary m-2" type="button">Add new item</button>
          </form>
      </nav>
  );
};

export default NavBar;