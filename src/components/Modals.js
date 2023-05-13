import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function Modals(props) {
  const { item } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="showInfos"
    >
      <Modal.Header closeButton className="infosContent">
        <Modal.Title id="contained-modal-title-vcenter" className="head">
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
                >
                  Source
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
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            )}
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text">{item.info}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="button return">
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
