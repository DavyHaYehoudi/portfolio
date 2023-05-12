import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/profil.png" alt="profil" />
          <h3>Davy SEBBAH</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "navActive":""}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/knowledges"
              className={({ isActive }) => isActive ? "navActive":""}
            >
              <i className="fas fa-mountain"></i>
              <span>Connaissances</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => isActive ? "navActive":""}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "navActive":""}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/davy-sebbah-2a2b4620b/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DavyHaYehoudi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davy-sebbah-2a2b4620b/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davy-sebbah-2a2b4620b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>
            <a href="https://openclassrooms.com/fr/dashboard/paths">
              Développeur WEB full-stack - 2023
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
