import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Police Nationale</h4>
        <h5>2002-2017</h5>
        <p>
          Agent de police pendant 15 ans en France, j'ai expérimenté le terrain
          sur la voie publique tant la nuit que le jour, appris le
          fonctionnement des lois, enquêté sur les empreintes digitales, vu de
          l'intérieur le système de la Justice dans les tribunaux. J'ai exercé
          en banlieue parisienne et Marseille dans les zones difficiles. J'ai dû
          travailler la maîtrise, l'adaptabilité, la cohésion d'équipe, la
          discipline et la rigueur.
        </p>
      </div>
      <div className="exp-2">
        <h4>Développeur WEB -Israel France</h4>
        <h5>2021-2023</h5>
        <p>
          En février 2021, j'ai commencé de zéro à apprendre la programmation.
          J'ai suivi la formation Openclassrooms de
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
            Développeur WEB fullstack
          </a>{" "}
          puis celle de Developers Institute à Tel Aviv de
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
            Fullstack coding JS
          </a>
          . J'ai intégré la société francophone Alon Active dans laquelle j'ai
          réalisé des projets pour sa clientèle. Récemment, depuis mon retour en
          France en août 2023, j'ai décroché une certification RNCP6 avec
          Openclassrooms
          <a
            href="./media/OCR-RNCP6.pdf"
            rel="noopener ,noreferrer"
            className="button"
            target="_blank"
            style={{
              textDecoration: "underline",
              color: "#ddd",
              marginLeft: "5px",
            }}
          >
            Concepteur d'applications WEB avec React
          </a>
          .{" "}
        </p>
      </div>
    </div>
  );
};

export default Experience;
