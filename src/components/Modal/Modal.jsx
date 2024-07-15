import { FaTimes } from "react-icons/fa";
import "./modal.css";
const Modal = ({ header, body, footer, setShow, show }) => {
  return (
    <div className="custom-modal-container">
      <div className="custom-modal-header">
        <button>
          <FaTimes
            onClick={() => {
              setShow(!show);
            }}
          />
        </button>
        <h1>{header ? header : "Pass Header Here"}</h1>
      </div>
      <div className="custom-modal-body">
        <h4>{body ? body : "Pass Body Here"}</h4>
      </div>
      <div className="custom-modal-footer">
        <h5>{footer ? footer : "Pass Footer Here"}</h5>
      </div>
    </div>
  );
};

export default Modal;
