import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
  AOS.init();
  return (
    <div id="skills" className="container" >
      <div className="row">
        <div className="col-6 m-auto">
          <div className="card shadow text-center card-skills">
            <div className="p-3 h3 title">
              Technical Skills <i class="fas fa-laptop-code"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow p-3 mb-3 " style={{backgroundColor:"white"}}>
        <div className="card-body">
          <div className="row ">
          <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                HTML5<i class="fab fa-html5 ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="ninety-five text-center text-white">95%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center my-4">
              <h4>
                Javascript<i class="fab fa-js-square ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="seventy-five text-center text-white">75%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                CSS3<i class="fab fa-css3-alt ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="eighty-five text-center text-white">85%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                Node.js <img
                  src="https://www.bing.com/th?id=OIP.r6yVel9tF5R4cJ-nc011JgAAAA&w=87&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  className="cstyle ms-2"
                />
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="sixty-five text-center text-white">65%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                React Js <i class="fab fa-react ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="seventy text-center text-white">70%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center my-4">
              <h4>
                Redux
                <img
                  src="https://img.icons8.com/color/2x/redux.png"
                  className="cstyle ms-2"
                />
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="eighty text-center text-white">70%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                Express.js <img
                  src="https://th.bing.com/th/id/OIP.HuJobFwf4Uk3U1qTntaecgHaIE?w=162&h=178&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  className="cstyle ms-2"
                />
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="eighty text-center text-white"> 80%</div>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;


