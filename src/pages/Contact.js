import React from "react";
import Navigation from "../components/Navigation";
import ClipboardJS from "clipboard";
import { Link } from "react-router-dom";

const Contact = () => {
  const phoneNumber = "0602535274";
  new ClipboardJS(".fa-solid");

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Pour me contacter</h1>
          <ul>
            <li>
              <Link to={`tel:${phoneNumber}`}>
                <i className="fas fa-mobile-alt"></i>
                <span>06 02 53 52 74 </span>
              </Link>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>
                <span className="target">
                  d.sebbah@yahoo.fr
                  <i
                    title="Copie de l'adresse email"
                    style={{ marginLeft: "20px" }}
                    className="fa-regular fa-clone clickInput"
                    data-clipboard-action="copy"
                    data-clipboard-target=".target"
                    onClick={() => {
                      alert("mail copié");
                    }}
                  ></i>
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/davy-sebbah-2a2b4620b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <h4>LinkedIn</h4> */}
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/DavyHaYehoudi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <h4>Github</h4> */}
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
