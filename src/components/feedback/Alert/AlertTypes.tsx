import React from 'react';
import { Alert, AlertProps } from './Alert';

export const SuccessAlert: React.FC<Omit<AlertProps, 'variant'>> = (props) => (
  <Alert variant="success" {...props} />
);

export const ErrorAlert: React.FC<Omit<AlertProps, 'variant'>> = (props) => (
  <Alert variant="error" {...props} />
);

export const WarningAlert: React.FC<Omit<AlertProps, 'variant'>> = (props) => (
  <Alert variant="warning" {...props} />
);

export const InfoAlert: React.FC<Omit<AlertProps, 'variant'>> = (props) => (
  <Alert variant="info" {...props} />
);

export const alertIcons = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

export const AlertWithIcon: React.FC<AlertProps> = ({ variant = 'info', children, ...props }) => {
  return (
    <Alert variant={variant} {...props}>
      <div className="alert-with-icon">
        <span className="alert-icon">{alertIcons[variant]}</span>
        <span className="alert-text">{children}</span>
      </div>
    </Alert>
  );
};
