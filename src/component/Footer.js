import React from "react";

function Footer(props) {
  return (
    <div id="connect" className="Footer py-2 shadow mt-3 text-white">
      <div className="row">
        <div className="col text-white text-center">Follow me on</div>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto text-center text-white">
          <a
            className="text-white"
            target="_blank"
            href="https://www.linkedin.com/in/prateek-soni-b354b012a/"
          >
            <i class="fab fa-2x fa-linkedin me-2"></i>
          </a>
          <a
            className="text-white"
            target="_blank"
            href="https://github.com/PRATEEK9425"
          >
            <i class="fab fa-2x fa-github me-2"></i>
          </a>
          <a
            className="text-white"
            target="_blank"
            href=""
          >
            <i class="fab fa-2x fa-instagram me-2"></i>
          </a>
          <a
            className="text-white"
            target="_blank"
            href="https://www.facebook.com/pratik.soni.54"
          >
            <i class="fab fa-2x fa-facebook-square me-2"></i>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col  text-center">&copy; Prateek soni</div>
      </div>
    </div>
  );
}

export default Footer;
