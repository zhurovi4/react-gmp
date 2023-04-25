import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { Portal } from "react-portal";
import styles from "./Dialog.module.css";

const Dialog = ({ isOpen, onClose, children, title }) => {
  const dialogNode = document.createElement("div");

  const handleClose = () => {
    document.body.removeChild(dialogNode);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Portal isOpened={isOpen}>
      <FocusTrap active={isOpen}>
        <div className={styles["dialog-overlay"]}>
          <div className={styles.dialog}>
            <h2>{title}</h2>
            <button className={styles["dialog-close"]} onClick={handleClose}>
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
