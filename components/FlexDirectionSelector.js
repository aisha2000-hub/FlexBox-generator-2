import React from "react";

const FlexDirectionSelector = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="selector-box">
      flex-direction
      <input
        type="radio"
        name="flex-direction"
        id="row"
        value="row"
        checked={value === "row"}
        onChange={handleChange}
      />
      <label htmlFor="row">row</label>
      <input
        type="radio"
        name="flex-direction"
        id="row-reverse"
        value="row-reverse"
        checked={value === "row-reverse"}
        onChange={handleChange}
      />
      <label htmlFor="row-reverse">row-reverse</label>
      <input
        type="radio"
        name="flex-direction"
        id="column"
        value="column"
        checked={value === "column"}
        onChange={handleChange}
      />
      <label htmlFor="column">column</label>
      <input
        type="radio"
        name="flex-direction"
        id="column-reverse"
        value="column-reverse"
        checked={value === "column-reverse"}
        onChange={handleChange}
      />
      <label htmlFor="column-reverse">column-reverse</label>
    </div>
  );
};

export default FlexDirectionSelector;
