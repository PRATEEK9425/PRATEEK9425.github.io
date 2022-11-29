import React, { useState } from "react";
import TrueContact from "./TrueContact";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com"

function Contact(props) {
  AOS.init();
  const [contact, setContact] = useState(false);

  const submitClicked = (e) => {
    e.preventDefault();
    setContact(true);
    emailjs.sendForm('service_httncpa','template_izorrhq',e.target,'eCpDmR0tok4F_v05D')
    .then(function() {
      console.log('SUCCESS!');
  }, function(error) {
      console.log('FAILED...', error);
  });
  };
  return (
    <div data-aos="fade-right" id="contact" className="my-5">
      <div>
        <h1 className="text-center">
          Contact Us <i class="ms-2 fas fa-address-book"></i>
        </h1>
        <hr className=" border border-2 border-warning" />
      </div>
      <div className="container mt-3">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-center mt-5 mb-5">
                <h3 className="text-center mb-2">Get In Touch</h3>
                <span>
                  <i class="fas fa-map-marker-alt me-1"></i> Address:
                </span>

                <span className="ms-2 text-muted text-center">
                 Sre-19/4,vikram Nagar<br /> Nimach, Madhya Pradesh
                </span>
                <br />
                <span>
                  <i class="fas fa-phone-alt me-1"></i>Phone No:
                </span>
                <span className="ms-2 text-muted"> 7987042750</span>
                <br />
                <span>
                  <i class="far fa-envelope me-1"></i>Email:
                </span>
                <span className="ms-2 text-muted">nmpratik9425@gmail.com</span>
              </div>
              <div className="col-md-8">
                <h3 className="text-center mb-2">Send Message</h3>
                <div className="card shadow">
                  <div className="card-body">
                    <form onSubmit={(e) => submitClicked(e)}>
                      {contact ? (
                        <h1 className="text-center text-success py-3 ">
                          Success<i class="ms-2 fas fa-check-circle"></i>
                        </h1>
                      ) : (
                        <TrueContact />
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
