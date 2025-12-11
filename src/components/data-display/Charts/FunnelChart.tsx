import React from 'react';

export interface FunnelStage {
  label: string;
  value: number;
  color?: string;
}

export interface FunnelChartProps {
  stages: FunnelStage[];
}

export const FunnelChart: React.FC<FunnelChartProps> = ({ stages }) => {
  const maxValue = Math.max(...stages.map(s => s.value));
  
  return (
    <div className="funnel-chart space-y-2">
      {stages.map((stage, index) => {
        const width = (stage.value / maxValue) * 100;
        return (
          <div key={index} className="funnel-stage">
            <div className="flex justify-between mb-1">
              <span className="text-sm">{stage.label}</span>
              <span className="text-sm font-semibold">{stage.value}</span>
            </div>
            <div
              className="h-12 flex items-center justify-center text-white font-semibold"
              style={{ 
                width: `${width}%`,
                backgroundColor: stage.color || '#3B82F6',
                margin: '0 auto'
              }}
            >
              {((stage.value / maxValue) * 100).toFixed(0)}%
            </div>
          </div>
        );
      })}
    </div>
  );
};
