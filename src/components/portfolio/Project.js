import React, { useState } from "react";

const Project = ({ item }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo=()=>{
    setShowInfo(true);
    window.scrollTo({ top:0,behavior: "smooth"})
  }

  return (
    <div className="project">
      <div className="icons">
        {item.languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{item.name}</h3>
      <img
        src={item.picture}
        alt={item.picture}
        onClick={handleInfo}
      />
      <span className="infos" onClick={handleInfo}>
        <i className="fa-sharp fa-solid fa-circle-info"></i>
      </span>

      {showInfo && (
        <div className="showInfos">
          <div className="modalBg" onClick={() => setShowInfo(false)}></div>
          <div className="infosContent">
            <div className="head">
              <h2>{item.name}</h2>
              {item.demo && (
                <div className="sourceCode">
                  <a
                    href={item.demo}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    <i className="fa-solid fa-video"></i>
                  </a>
                </div>
              )}
              {item.source && (
                <div className="sourceCode">
                  <a
                    href={item.source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                    title="< code source />"
                  >
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              )}
              {item.link && (
                <div className="sourceCode">
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                    title="voir le site"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              )}
            </div>
            <p className="text">{item.info}</p>

            <div className="button return" onClick={() => setShowInfo(false)}>
              Fermer
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
