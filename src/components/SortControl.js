import React from "react";
import styles from "./SortControl.module.css";

const SortControl = ({ defaultSelection, onSortingCriterionChange  }) => {

  const handleSelectionChange = (event) => {
    const selectedCriterion = event.target.value;
    onSortingCriterionChange(selectedCriterion);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort-control">Sort by:</label>
      <select
        id="sort-control"
        value={defaultSelection}
        onChange={handleSelectionChange}
      >
        <option value="release-date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
