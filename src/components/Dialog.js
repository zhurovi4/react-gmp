import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import Portal from "react-portal";

const Dialog = ({ isOpen, onClose, children }) => {
  const dialogNode = document.createElement("div");

  const handleClose = () => {
    document.body.removeChild(dialogNode);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Portal isOpened={isOpen}>
      <FocusTrap active={isOpen}>
        <div className="dialog-overlay">
          <div className="dialog">
            <button className="dialog-close" onClick={handleClose}>
              ×
            </button>
            {children}
          </div>
        </div>
      </FocusTrap>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="dialog-backdrop" onClick={handleClose}></div>,
          dialogNode
        )}
    </Portal>
  );
};

export default Dialog;
