import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Police Nationale</h4>
        <h5>2002-2016</h5>
        <p>
        Agent de police pendant 14 ans en France, j'ai expérimenté le terrain sur la voie publique tant la nuit que le jour, appris le fonctionnement des lois, enquêté sur les empreintes digitales, vu de l'intérieur le système de la Justice dans les tribunaux. J'ai exercé en banlieue parisienne et Marseille dans les zones difficiles. J'ai dû travailler la maîtrise, l'adaptabilité, la cohésion d'équipe, la discipline et la rigueur.
        </p>
      </div>
      <div className="exp-2">
        <h4>Développeur WEB -Israel</h4>
        <h5>2021-2023</h5>
        <p>
          En février 2021, j'ai commencé de zéro à apprendre la programmation. J'ai pour cela suivi plusieurs formations tant en ligne qu'en présentiel avec l'obtention de certificats de réussite reconnus par l' Etat.
          L'une d'elle est {" "}
          <a
            href="./media/diplomeOCR.pdf"
            rel="noopener noreferrer"
            className="button"
            target="_blank"
            style={{
              textDecoration: "underline",
              color: "#ddd",
              marginLeft: "5px",
            }}
          >
            Openclassrooms
          </a>{" "}
          (France) tandis qu'une autre est
          <a
            href="./media/diplomeDI.png"
            rel="noopener ,noreferrer"
            className="button"
            target="_blank"
            style={{
              textDecoration: "underline",
              color: "#ddd",
              marginLeft: "5px",
            }}
          >
            Developers Institute
          </a>{" "}
          en Israel (Tel Aviv). J'ai rapidement intégré la société francophone Alon Active dans laquelle j'ai réalisé des projets pour sa clientèle.
        </p>
      </div>
    </div>
  );
};

export default Experience;
