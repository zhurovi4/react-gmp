import React, { useState } from "react";
import styles from "./SortControl.module.css";

const SortControl = ({ defaultSelection }) => {
  const [currentSelection, setCurrentSelection] = useState(defaultSelection);

  const handleSelectionChange = (event) => {
    const newValue = event.target.value;
    setCurrentSelection(newValue);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort-control">Sort by:</label>
      <select
        id="sort-control"
        value={currentSelection}
        onChange={handleSelectionChange}
      >
        <option value="release-date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
