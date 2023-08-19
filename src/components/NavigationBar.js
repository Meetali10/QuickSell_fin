import React from 'react';

const NavigationBar = ({ handleGroupingChange, handleOrderingChange, ordering }) => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <label htmlFor="grouping">Grouping:</label>
        <select id="grouping" onChange={(event) => handleGroupingChange(event.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="ordering">Ordering:</label>
        <select id="ordering" onChange={(event) => handleOrderingChange(event.target.value)} value={ordering}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default NavigationBar;
