import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Davy SEBBAH</h1>
          <h2>Développeur WEB full-stack</h2>
          <div className="pdf">
            <a href="./media/cv.pdf" target="_blank" rel="noopener noreferrer">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
