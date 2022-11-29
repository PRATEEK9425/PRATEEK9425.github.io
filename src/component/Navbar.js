import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  " style={{position:"fixed",width:"100%",zIndex:"100",backgroundColor:"#6610f2"}}>
      <div class="container" >
        <a class="navbar-brand" href="#">
         Prateek Soni
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-primary"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home<span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills <span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#academics">
                Academics <span className=" ms-2 span"></span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects <span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn btn-outline-dark btn-sm rounded-pill"
                href="#connect"
              >
                Connect <i class=" ms-2 fas fa-envelope-open-text"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
