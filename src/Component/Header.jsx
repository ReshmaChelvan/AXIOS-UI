import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="cols-sm-12 p-2 bg-dark text-white-50 d-flex justify-content-between align-items-center gap-3 ">
            <div>
              <h2>USER_MANAGEMENT</h2>
            </div>
            <div>
              <Link to="/Create" className="btn btn-info">
                New User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
