import React from 'react'
import * as C from './style'

const input = ({ type, placeholder, value, onChange}) => {
  return (
    <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
    />
  );
};

export default input