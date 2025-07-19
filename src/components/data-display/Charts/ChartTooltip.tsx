import React from 'react';
export interface ChartTooltipProps {
  visible: boolean;
  content: React.ReactNode;
}
export const ChartTooltip: React.FC<ChartTooltipProps> = ({ visible, content }) => (
  visible ? <div className="chart-tooltip">{content}</div> : null
);
