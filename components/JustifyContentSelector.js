import React from "react";

const JustifyContentSelector = ({ value, onChange }) => {
  return (
    <div className="selector-box">
      <label htmlFor="justify">justify-content</label>
      <select
        name="justify"
        id="justify"
        value={value}
        onChange={(e) => {
          console.log("onChange in JustifyContentSelector");
          console.log(`Wert: ${e.target.value}`);
          onChange(e.target.value);
        }}
      >
        <option value="flex-start">flex-start</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
        <option value="flex-end">flex-end</option>
      </select>
    </div>
  );
};

export default JustifyContentSelector;
