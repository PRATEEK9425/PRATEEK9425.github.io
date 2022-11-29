import React from "react";
import profile from "../assets/profile.jpeg"
import prateekresume from "../assets/prateekresume.pdf"
import "../App.css";
function Header(props) {
  return (
    <div style={{backgroundColor:""}}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8 p-5">
            <h1 className="text-white">Hi, I'm Prateek Soni👋</h1>
            <h3 className="text-white">Full-Satck Web-Developer</h3>
            <h3 className="text-white">Always Deliver Quality of work...</h3>
            <div className="header-btn">
              <a href="#connect" className="btn btn-outline-success  mt-2 ">
                Get In Touch<i class=" ms-2 fas fa-user-plus"></i>
              </a>
              <a
                href={prateekresume}
                className="btn btn-outline-warning ms-2 mt-2 "
                download={prateekresume}
              >
                Download CV<i class="ms-2 fas fa-file"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 p-5">
            <div className="img-container">
              <img
                className="rounded-circle img-fluid img-border"
                src={profile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
