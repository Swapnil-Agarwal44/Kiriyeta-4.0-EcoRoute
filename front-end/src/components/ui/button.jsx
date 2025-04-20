// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ variant, children, ...props }) => {
  return (
    <button
      className={`btn ${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`}
      {...props}
    >
      {children}
    </button>
  );
};
