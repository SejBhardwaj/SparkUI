import React from 'react';

export interface AlertAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export interface AlertWithActionsProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  actions?: AlertAction[];
  onClose?: () => void;
  children: React.ReactNode;
}

export const AlertWithActions: React.FC<AlertWithActionsProps> = ({ 
  variant = 'info',
  title,
  actions,
  onClose,
  children 
}) => {
  return (
    <div className={`alert alert-${variant} alert-with-actions`} role="alert">
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
        {actions && actions.length > 0 && (
          <div className="alert-actions">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`alert-action-btn alert-action-${action.variant || 'primary'}`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {onClose && (
        <button 
          className="alert-close" 
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};
