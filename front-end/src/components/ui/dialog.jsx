// src/components/ui/dialog.jsx
import React from 'react';

export const Dialog = ({ children, open, onOpenChange }) => {
  return (
    open && (
      <div className="dialog">
        {children}
        <button onClick={() => onOpenChange(false)}>Close</button>
      </div>
    )
  );
};

export const DialogContent = ({ children }) => {
  return <div className="dialog-content">{children}</div>;
};

export const DialogHeader = ({ children }) => {
  return <div className="dialog-header">{children}</div>;
};

export const DialogTitle = ({ children }) => {
  return <h3 className="dialog-title">{children}</h3>;
};

export const DialogFooter = ({ children }) => {
  return <div className="dialog-footer">{children}</div>;
};
