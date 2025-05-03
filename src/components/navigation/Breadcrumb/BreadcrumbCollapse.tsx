import React, { useState } from 'react';

export interface BreadcrumbCollapseProps {
  items: Array<{ label: string; href?: string }>;
  maxItems?: number;
}

export const BreadcrumbCollapse: React.FC<BreadcrumbCollapseProps> = ({ 
  items, 
  maxItems = 3 
}) => {
  const [expanded, setExpanded] = useState(false);
  
  if (items.length <= maxItems) {
    return (
      <>
        {items.map((item, index) => (
          <span key={index}>{item.label}</span>
        ))}
      </>
    );
  }
  
  if (!expanded) {
    return (
      <>
        <span>{items[0].label}</span>
        <button 
          onClick={() => setExpanded(true)}
          className="breadcrumb-ellipsis"
          aria-label="Show all breadcrumbs"
        >
          ...
        </button>
        <span>{items[items.length - 1].label}</span>
      </>
    );
  }
  
  return (
    <>
      {items.map((item, index) => (
        <span key={index}>{item.label}</span>
      ))}
    </>
  );
};
