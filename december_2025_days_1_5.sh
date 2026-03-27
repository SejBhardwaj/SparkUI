#!/bin/bash

# December 2025 Commit Script - Days 1-5
# Phase 5: Data Visualization Components
# Total: 23 commits across 9 working days

echo "Starting December 2025 commits - Days 1-5..."

# Create directories
mkdir -p src/components/data-display/Charts
mkdir -p src/components/data-display/Graphs
mkdir -p docs/components/data-visualization

# DAY 1 - Monday, December 1, 2025 (3 commits)
echo "Day 1: December 1, 2025"

# Commit 1
cat > src/components/data-display/Charts/ChartContainer.tsx << 'EOF'
import React from 'react';

export interface ChartContainerProps {
  title?: string;
  children: React.ReactNode;
  height?: number;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  height = 300
}) => {
  return (
    <div className="chart-container bg-white rounded-lg shadow p-6">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div style={{ height: `${height}px` }}>{children}</div>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ChartContainer.tsx
GIT_AUTHOR_DATE="2025-12-01T00:15:00" GIT_COMMITTER_DATE="2025-12-01T00:15:00" git commit -m "feat: create chart container component"

# Commit 2
cat > src/components/data-display/Charts/ChartLegend.tsx << 'EOF'
import React from 'react';

export interface LegendItem {
  label: string;
  color: string;
}

export interface ChartLegendProps {
  items: LegendItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ items, position = 'bottom' }) => {
  return (
    <div className={`chart-legend flex gap-4 ${position === 'bottom' ? 'mt-4' : ''}`}>
      {items.map((item, index) => (
        <div key={index} className="legend-item flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ChartLegend.tsx
GIT_AUTHOR_DATE="2025-12-01T00:48:00" GIT_COMMITTER_DATE="2025-12-01T00:48:00" git commit -m "feat: implement chart legend component"

# Commit 3
cat > src/components/data-display/Charts/ChartTooltip.tsx << 'EOF'
import React from 'react';

export interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  
  return (
    <div className="chart-tooltip bg-white p-3 rounded shadow-lg border">
      <p className="font-semibold mb-2">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} className="text-sm" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ChartTooltip.tsx
GIT_AUTHOR_DATE="2025-12-01T01:22:00" GIT_COMMITTER_DATE="2025-12-01T01:22:00" git commit -m "feat: add chart tooltip component"

# DAY 2 - Wednesday, December 3, 2025 (3 commits)
echo "Day 2: December 3, 2025"

# Commit 1
cat > src/components/data-display/Graphs/BarGraph.tsx << 'EOF'
import React from 'react';

export interface BarGraphProps {
  data: { label: string; value: number }[];
  color?: string;
}

export const BarGraph: React.FC<BarGraphProps> = ({ data, color = '#3B82F6' }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bar-graph space-y-2">
      {data.map((item, index) => (
        <div key={index} className="bar-item">
          <div className="flex justify-between mb-1">
            <span className="text-sm">{item.label}</span>
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full"
              style={{ width: `${(item.value / maxValue) * 100}%`, backgroundColor: color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Graphs/BarGraph.tsx
GIT_AUTHOR_DATE="2025-12-03T00:19:00" GIT_COMMITTER_DATE="2025-12-03T00:19:00" git commit -m "feat: create bar graph component"

# Commit 2
cat > src/components/data-display/Graphs/LineGraph.tsx << 'EOF'
import React from 'react';

export interface LineGraphProps {
  data: number[];
  labels?: string[];
  color?: string;
}

export const LineGraph: React.FC<LineGraphProps> = ({ data, labels, color = '#10B981' }) => {
  return (
    <div className="line-graph">
      <svg width="100%" height="200" className="overflow-visible">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={data.map((value, index) => 
            `${(index / (data.length - 1)) * 100}%,${100 - value}%`
          ).join(' ')}
        />
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Graphs/LineGraph.tsx
GIT_AUTHOR_DATE="2025-12-03T00:51:00" GIT_COMMITTER_DATE="2025-12-03T00:51:00" git commit -m "feat: implement line graph component"

# Commit 3
cat > docs/components/data-visualization/charts-overview.md << 'EOF'
# Data Visualization Components

## Overview
Comprehensive chart and graph components for data visualization.

## Components
- ChartContainer: Wrapper for all chart types
- ChartLegend: Display chart legends
- ChartTooltip: Interactive tooltips
- BarGraph: Horizontal/vertical bar charts
- LineGraph: Line charts for trends

## Usage
```tsx
<ChartContainer title="Sales Data">
  <BarGraph data={salesData} />
</ChartContainer>
```
EOF
git add docs/components/data-visualization/charts-overview.md
GIT_AUTHOR_DATE="2025-12-03T01:28:00" GIT_COMMITTER_DATE="2025-12-03T01:28:00" git commit -m "docs: add data visualization overview"

echo "December Days 1-5 complete!"
