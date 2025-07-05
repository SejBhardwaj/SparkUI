import React, { useState } from 'react';
export interface ExpandableRowProps {
  children: React.ReactNode;
  expandedContent: React.ReactNode;
}
export const ExpandableRow: React.FC<ExpandableRowProps> = ({ children, expandedContent }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <tr onClick={() => setExpanded(!expanded)}>{children}</tr>
      {expanded && <tr><td colSpan={100}>{expandedContent}</td></tr>}
    </>
  );
};
