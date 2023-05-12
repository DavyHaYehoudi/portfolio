import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modals } from "../Modals";

const Project = ({ item }) => {
  // const [showInfo, setShowInfo] = useState(false);

  // const handleInfo = () => {
  //   setShowInfo(!showInfo);
  // };
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <Modals
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
  return (
    // <div className="project">
    //   <div className="icons">
    //     {item.languagesIcons.map((icon) => (
    //       <i className={icon} key={icon}></i>
    //     ))}
    //   </div>
    //   <h3>{item.name}</h3>
    //   <img src={item.picture} alt={item.picture} onClick={handleInfo} />
    //   <span className="infos" onClick={handleInfo}>
    //   <i class="fa-sharp fa-solid fa-circle-info"></i>     
    //    </span>

    //   {showInfo && (
    //     <div className="showInfos">
    //       <div className="infosContent">
    //         <div className="head">
    //           <h2>{item.name}</h2>
    //           {item.demo && (
    //             <div className="sourceCode">
    //               <a
    //                 href={item.demo}
    //                 rel="noopener noreferrer"
    //                 className="button"
    //                 target="_blank"
    //               >
    //                 <i className="fa-solid fa-video" ></i>
    //               </a>
    //             </div>
    //           )}
    //           {item.source&&<div className="sourceCode">
    //             <a
    //               href={item.source}
    //               rel="noopener noreferrer"
    //               className="button"
    //               target="_blank"
    //             >
    //               Source
    //             </a>
    //           </div>}
    //           {item.link&&<div className="sourceCode">
    //             <a
    //               href={item.link}
    //               rel="noopener noreferrer"
    //               className="button"
    //               target="_blank"
    //             >
    //               <i className="fa-solid fa-link" ></i>
    //             </a>
    //           </div>}
    //         </div>
    //         <p className="text">{item.info}</p>

    //         <div className="button return" onClick={handleInfo}>
    //           Back
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <Modals />
  );
};

export default Project;
