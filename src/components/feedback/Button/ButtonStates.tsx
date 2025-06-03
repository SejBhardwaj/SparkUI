import React from 'react';

export interface ButtonStateProps {
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
}

export const ButtonWithStates: React.FC<ButtonStateProps> = ({ 
  loading, 
  disabled, 
  active, 
  children 
}) => {
  return (
    <button
      className={`btn ${active ? 'btn-active' : ''}`}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-pressed={active}
    >
      {loading && <span className="spinner" aria-label="Loading" />}
      {children}
    </button>
  );
};

export const buttonStateStyles = {
  loading: 'opacity-75 cursor-wait',
  disabled: 'opacity-50 cursor-not-allowed',
  active: 'ring-2 ring-blue-500 ring-offset-2',
};
