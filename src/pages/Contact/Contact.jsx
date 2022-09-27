import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <section className="contact_us">
        <div className="container">
          <div className="contact_inner">
            <div className="row">
              <div className="col-md-10 ">
                <div className="contact_field ">
                  <h3>Contatc Us</h3>
                  <p>
                    Feel Free to contact us any time. We will get back to you as
                    soon as we can!.
                  </p>
                </div>
              </div>

              <div className="col-md-2">
                <div className="right_conatct_social_icon d-flex align-items-end">
                  <div className="socil_item_inner d-flex">
                    <li>
                      <a href="#f">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#i">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#t">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
