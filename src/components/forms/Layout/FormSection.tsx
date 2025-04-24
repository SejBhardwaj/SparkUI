import React from 'react';

export interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, description, children }) => (
  <div className="form-section">
    {title && <h3 className="section-title">{title}</h3>}
    {description && <p className="section-description">{description}</p>}
    <div className="section-content">{children}</div>
  </div>
);
