import React from 'react';

const Input = ({ name, eve }) => {
  return (
    <div className="input">
      <span>{name}</span>
      <input onChange={eve} type="text" />
    </div>
  );
};

export default Input;
