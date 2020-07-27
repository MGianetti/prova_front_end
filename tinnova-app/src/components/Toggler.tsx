import React from "react";

interface TogglerProps {
  onToggleClick: () => void;
}

const Toggler: React.FC<TogglerProps> = ({ onToggleClick }) => {
  return (
    <label className="toggle">
      <span className="toggle-label">Form</span>
      <input
        className="toggle-checkbox"
        onChange={onToggleClick}
        type="checkbox"
      />
      <div className="toggle-switch"></div>
      <span className="toggle-label">Table</span>
    </label>
  );
};

export default Toggler;
