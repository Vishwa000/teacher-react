import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="box">
            <div className="header">
              <div className="left">
                <Link to="/about">
                  <button>About</button>
                </Link>
                <Link to="/">
                  <button>Student</button>
                </Link>
                <Link to="/teacher">
                  <button>Teacher</button>
                </Link>
              </div>
              <div className="right">
                <span>
                  <Link to="/addstudent">
                    <button>Add Student</button>
                  </Link>
                </span>
                <span>
                  <Link to="/addteacher">
                    <button>Add Teacher</button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
