import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import modsen from "../assets/modsen.png"
import myntra from "../assets/myntra.png"
import outlook from "../assets/outlook.png"
import Appletv from "../assets/Appletv.png"
function Projects(props) {
  AOS.init();
  return (
    <div data-aos="fade-right" id="projects" className="project-body my-5">
      <div>
        <h1 className="text-center">
          Projects <i class="fas fa-paper-plane ms-2"></i>
        </h1>
        <hr className=" border border-2 border-warning" />
      </div>
      {/* Mobile View */}
      <div className=" mt-3">
        <div className="row m-auto">
          <div className="col-sm-12   d-md-none mb-3  ">
            <div className="card shadow">
              <a
                className="m-auto"
                href={modsen}
                target="_blank"
              >
                <img
                  src={modsen}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">
                 Modsens
                </div>
                <br />
                <div className="mb-3">
                  <span className="h5">Descriptions:</span>
                  <span className="text-muted ms-2 fs-6">
                  An E-commerce site using Html,CSS, Javascripts
                    <br />
                   carausel
                    <br /> 
                    Navbar,Footer-section
                    <br />
                Home Page ,womens Page
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>

                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://fastidious-dusk-a78f9a.netlify.app/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/VaibhavBedarkar/Team-ModSena"
                >
                  Github Link <i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href={myntra}
                target="_blank"
              >
                <img
                  src={myntra}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3"> Myntra</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                 Myntra App using ReactJs Using UseState Hooks.
                    <br />
                    Mens , womens , children page 
                    <br /> Search Funcitionality
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://elaborate-beijinho-c56d33.netlify.app/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/PRATEEK9425/Wonderful-Basket-8873"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href={outlook}
                target="_blank"
              >
                <img
                  src={outlook}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">outlook India </div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    Html ,CSS ,javascript
                    <br />
                    cryptopage ,Travel ,sports and Agritech Page
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://subtle-gaufre-77426e.netlify.app/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/PRATEEK9425/oulookindia"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href={Appletv}
                target="_blank"
              >
                <img
                  src={Appletv}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3"> Apple Tv+</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">

                Apple Tv is online movies streaming website 
                from Apple , free for apple Users .
                    <br />
                  Features Devloped :
                    <br /> Carausel, Single Movie-Page ,Footer

                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://appletv-phi.vercel.app/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/priyanshu1120/bent-tail-4615"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>





        </div>
      </div>
      {/* Mobile End */}
      <div className="timeline d-none d-md-block">
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={modsen}
              target="_blank"
            >
              <img
                src={modsen}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Modsens</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                An E-commerce site using Html,CSS, Javascripts
                    <br />
                   carausel
                    <br /> 
                    Navbar,Footer-section
                    <br />
                Home Page ,womens Page
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>

              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://fastidious-dusk-a78f9a.netlify.app/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/VaibhavBedarkar/Team-ModSena"
              >
                Github Link <i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={myntra}
              target="_blank"
            >
              <img
                src={myntra}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Myntra</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                Myntra App using ReactJs Using UseState Hooks.
                    <br />
                    Mens , womens , children page 
                    <br /> Search Funcitionality
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://elaborate-beijinho-c56d33.netlify.app/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/PRATEEK9425/Wonderful-Basket-8873"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={outlook}
              target="_blank"
            >
              <img
                src={outlook}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Outlook India</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                Html ,CSS ,javascript
                    <br />
                    cryptopage ,Travel ,sports and Agritech Page
                  </span>
                  <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://subtle-gaufre-77426e.netlify.app/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/PRATEEK9425/oulookindia"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
          
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={Appletv}
              target="_blank"
            >
              <img
                src={Appletv}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Myntra</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                Apple Tv is online movies streaming website 
                from Apple , free for apple Users .
                    <br />
                  Features Devloped :
                    <br /> Carausel, Single Movie-Page ,Footer
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://appletv-phi.vercel.app/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/priyanshu1120/bent-tail-4615"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-divider">
          <div className="timeline-traveller">
            <i class="fas fa-car fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
