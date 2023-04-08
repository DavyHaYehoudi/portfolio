import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Languages = () => {
  const [languages, setLanguages] = useState([
    { id: 1, value: "Javascript", xp: 2 },
    { id: 2, value: "HTML/CSS", xp: 2 },
    { id: 3, value: "Node.js", xp: 1.5 },
    { id: 4, value: "SQL/NoSql", xp: 1 },
  ]);

  const [frameworks, setFrameworks] = useState([
    { id: 1, value: "React-Redux", xp: 1.5 },
    { id: 2, value: "Sass", xp: 0.5 },
    { id: 3, value: "Vue", xp: 0.3 },
    { id: 4, value: "Bootstrap", xp: 1 },
  ]);

  return (
    <div className="languagesFrameworks">
      <ProgressBar
        languages={languages}
        className="languagesDisplay"
        title="langages"
      />
      <ProgressBar
        languages={frameworks}
        className="frameworksDisplay"
        title="frameworks & bibliothèques"
      />
    </div>
  );
};

export default Languages;
