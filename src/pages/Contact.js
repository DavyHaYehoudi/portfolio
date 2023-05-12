import React from "react";
import Navigation from "../components/Navigation";
import ClipboardJS from "clipboard";
import { Link } from "react-router-dom";

const Contact = () => {
  const phoneNumber = "0538640333";
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
              <Link
                to="https://www.google.com/maps/place/5+All.+Charles+Dullin,+13500+Martigues,+France/@43.4287281,5.0412549,17z/data=!3m1!4b1!4m6!3m5!1s0x12b61e3e70f4ea2b:0xa1fd47f8ab7c05a9!8m2!3d43.4287281!4d5.0438298!16s%2Fg%2F11c4kc5n0n?authuser=0"
                rel="noopener noreferrer"
                target="_blanck"
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  05 allée Charles Dullin <br />
                  13 500 Martigues
                </span>
              </Link>
            </li>
            <li>
              <Link to={`tel:${phoneNumber}`}>
                <i className="fas fa-mobile-alt"></i>
                <span>053 8640333 </span>
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

            <a href="" target="_blank" rel="noopener noreferrer">
              {/* <h4>Twitter</h4> */}
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/davy-sebbah-2a2b4620b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <h4>Facebook</h4> */}
              <i className="fab fa-facebook"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
