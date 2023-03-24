import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light m-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <i className="fa-solid fa-jedi"></i>
        </span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favs.length}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favs.map((item, index) => (
              <li key={index} className="dropdown-item">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-2">{item}</p>
                  <button
                    onClick={() => actions.removeFav(item)}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
