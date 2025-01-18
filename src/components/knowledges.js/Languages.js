import React from "react";
import ProgressBar from "./ProgressBar";

const languages = [
  { id: 1, value: "Javascript", xp: 4 },
  { id: 2, value: "HTML/CSS", xp: 4 },
  { id: 3, value: "Node.js", xp: 3.5 },
  { id: 4, value: "SQL/NoSql", xp: 3 },
  { id: 4, value: "Typescript", xp: 0.5 },
  { id: 4, value: "Tailwind CSS", xp: 0.5 },
];

const frameworks = [
  { id: 1, value: "React-Redux", xp: 3.5 },
  { id: 3, value: "React-router-dom", xp: 3 },
  { id: 1, value: "Redux toolkit", xp: 2.5 },
  { id: 2, value: "React-hook-form", xp: 0.5 },
  { id: 3, value: "Zod", xp: 0.5 },
  { id: 4, value: "Shadcn UI", xp: 0.5 },
  { id: 4, value: "NextJS", xp: 0.5 },
];
const Languages = () => {
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
        title="frameworks & librairies"
      />
    </div>
  );
};

export default Languages;
