import React from "react";

const AlignItemsSelector = ({ value, onChange }) => {
  return (
    <div className="selector-box">
      <label htmlFor="align-items">align-items</label>
      <select
        name="align-items"
        id="align-items"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value="stretch">stretch</option>
        <option value="center">center</option>
        <option value="start">start</option>
        <option value="end">end</option>
      </select>
    </div>
  );
};

export default AlignItemsSelector;
