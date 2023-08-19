import React, { useState } from 'react';

const DropDownItem = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown-item">
      <div className="dropdown-label" onClick={toggleDropdown}>
        {label}
      </div>
      <div className={`sub-dropdown${isOpen ? ' show' : ''}`}>
        {children}
      </div>
    </li>
  );
};

export default DropDownItem;
