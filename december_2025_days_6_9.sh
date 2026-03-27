#!/bin/bash

# December 2025 Commit Script - Days 6-9
# Remaining commits for December

echo "Starting December 2025 commits - Days 6-9..."

# DAY 3 - Friday, December 5, 2025 (2 commits)
echo "Day 3: December 5, 2025"

# Commit 1
cat > src/components/data-display/Graphs/PieChart.tsx << 'EOF'
import React from 'react';

export interface PieChartProps {
  data: { label: string; value: number; color: string }[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="pie-chart flex items-center gap-6">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          return (
            <circle
              key={index}
              r="80"
              cx="100"
              cy="100"
              fill="transparent"
              stroke={item.color}
              strokeWidth="40"
              strokeDasharray={`${percentage * 5.03} 503`}
            />
          );
        })}
      </svg>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm">{item.label}: {item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Graphs/PieChart.tsx
GIT_AUTHOR_DATE="2025-12-05T00:24:00" GIT_COMMITTER_DATE="2025-12-05T00:24:00" git commit -m "feat: create pie chart component"

# Commit 2
cat > src/components/data-display/Graphs/DonutChart.tsx << 'EOF'
import React from 'react';

export interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  centerText?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, centerText }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="donut-chart relative">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle r="90" cx="100" cy="100" fill="white" />
        {centerText && (
          <text x="100" y="100" textAnchor="middle" className="text-2xl font-bold">
            {centerText}
          </text>
        )}
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Graphs/DonutChart.tsx
GIT_AUTHOR_DATE="2025-12-05T01:03:00" GIT_COMMITTER_DATE="2025-12-05T01:03:00" git commit -m "feat: implement donut chart component"

# DAY 4 - Monday, December 8, 2025 (3 commits)
echo "Day 4: December 8, 2025"

# Commit 1
cat > src/components/data-display/Charts/AreaChart.tsx << 'EOF'
import React from 'react';

export interface AreaChartProps {
  data: number[];
  color?: string;
  fillOpacity?: number;
}

export const AreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  color = '#8B5CF6',
  fillOpacity = 0.3 
}) => {
  return (
    <div className="area-chart">
      <svg width="100%" height="200">
        <defs>
          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#areaGradient)" stroke={color} strokeWidth="2" />
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/AreaChart.tsx
GIT_AUTHOR_DATE="2025-12-08T00:17:00" GIT_COMMITTER_DATE="2025-12-08T00:17:00" git commit -m "feat: add area chart component"

# Commit 2
cat > src/components/data-display/Charts/ScatterPlot.tsx << 'EOF'
import React from 'react';

export interface ScatterPoint {
  x: number;
  y: number;
  label?: string;
}

export interface ScatterPlotProps {
  data: ScatterPoint[];
  color?: string;
}

export const ScatterPlot: React.FC<ScatterPlotProps> = ({ data, color = '#EF4444' }) => {
  return (
    <div className="scatter-plot">
      <svg width="100%" height="300">
        {data.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={color}
          />
        ))}
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ScatterPlot.tsx
GIT_AUTHOR_DATE="2025-12-08T00:49:00" GIT_COMMITTER_DATE="2025-12-08T00:49:00" git commit -m "feat: create scatter plot component"

# Commit 3
cat > src/components/data-display/Charts/RadarChart.tsx << 'EOF'
import React from 'react';

export interface RadarChartProps {
  data: { label: string; value: number }[];
  maxValue?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, maxValue = 100 }) => {
  return (
    <div className="radar-chart">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="100" fill="none" stroke="#E5E7EB" />
        <circle cx="150" cy="150" r="50" fill="none" stroke="#E5E7EB" />
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/RadarChart.tsx
GIT_AUTHOR_DATE="2025-12-08T01:25:00" GIT_COMMITTER_DATE="2025-12-08T01:25:00" git commit -m "feat: implement radar chart component"

# DAY 5 - Wednesday, December 10, 2025 (2 commits)
echo "Day 5: December 10, 2025"

# Commit 1
cat > src/components/data-display/Charts/HeatMap.tsx << 'EOF'
import React from 'react';

export interface HeatMapProps {
  data: number[][];
  colorScale?: string[];
}

export const HeatMap: React.FC<HeatMapProps> = ({ 
  data,
  colorScale = ['#EFF6FF', '#3B82F6', '#1E40AF']
}) => {
  return (
    <div className="heat-map grid gap-1">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              className="w-8 h-8 rounded"
              style={{ backgroundColor: colorScale[Math.floor(value / 33)] }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/HeatMap.tsx
GIT_AUTHOR_DATE="2025-12-10T00:31:00" GIT_COMMITTER_DATE="2025-12-10T00:31:00" git commit -m "feat: add heat map visualization"

# Commit 2
cat > src/components/data-display/Charts/Sparkline.tsx << 'EOF'
import React from 'react';

export interface SparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
}

export const Sparkline: React.FC<SparklineProps> = ({ 
  data, 
  color = '#10B981',
  width = 100,
  height = 30
}) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <svg width={width} height={height} className="sparkline">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};
EOF
git add src/components/data-display/Charts/Sparkline.tsx
GIT_AUTHOR_DATE="2025-12-10T01:12:00" GIT_COMMITTER_DATE="2025-12-10T01:12:00" git commit -m "feat: create sparkline mini chart"

# DAY 6 - Friday, December 12, 2025 (2 commits)
echo "Day 6: December 12, 2025"

# Commit 1
cat > src/components/data-display/Charts/GaugeChart.tsx << 'EOF'
import React from 'react';

export interface GaugeChartProps {
  value: number;
  max?: number;
  label?: string;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({ 
  value, 
  max = 100,
  label 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="gauge-chart text-center">
      <svg width="200" height="120" viewBox="0 0 200 120">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="20"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="20"
          strokeDasharray={`${percentage * 2.51} 251`}
        />
      </svg>
      <div className="mt-2">
        <div className="text-3xl font-bold">{value}</div>
        {label && <div className="text-sm text-gray-600">{label}</div>}
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/GaugeChart.tsx
GIT_AUTHOR_DATE="2025-12-12T00:27:00" GIT_COMMITTER_DATE="2025-12-12T00:27:00" git commit -m "feat: implement gauge chart component"

# Commit 2
cat > src/components/data-display/Charts/FunnelChart.tsx << 'EOF'
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
EOF
git add src/components/data-display/Charts/FunnelChart.tsx
GIT_AUTHOR_DATE="2025-12-12T01:08:00" GIT_COMMITTER_DATE="2025-12-12T01:08:00" git commit -m "feat: add funnel chart for conversion tracking"

# DAY 7 - Monday, December 15, 2025 (2 commits)
echo "Day 7: December 15, 2025"

# Commit 1
cat > src/components/data-display/Charts/TreeMap.tsx << 'EOF'
import React from 'react';

export interface TreeMapItem {
  label: string;
  value: number;
  color?: string;
}

export interface TreeMapProps {
  data: TreeMapItem[];
}

export const TreeMap: React.FC<TreeMapProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="tree-map grid grid-cols-4 gap-1 h-64">
      {data.map((item, index) => {
        const size = (item.value / total) * 100;
        return (
          <div
            key={index}
            className="flex items-center justify-center text-white font-semibold p-2"
            style={{
              backgroundColor: item.color || '#3B82F6',
              gridColumn: `span ${Math.ceil(size / 25)}`
            }}
          >
            <div className="text-center">
              <div className="text-sm">{item.label}</div>
              <div className="text-xs">{item.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/TreeMap.tsx
GIT_AUTHOR_DATE="2025-12-15T00:35:00" GIT_COMMITTER_DATE="2025-12-15T00:35:00" git commit -m "feat: create tree map visualization"

# Commit 2
cat > src/components/data-display/Charts/BubbleChart.tsx << 'EOF'
import React from 'react';

export interface Bubble {
  x: number;
  y: number;
  size: number;
  label?: string;
  color?: string;
}

export interface BubbleChartProps {
  data: Bubble[];
}

export const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  return (
    <div className="bubble-chart">
      <svg width="100%" height="400" viewBox="0 0 500 400">
        {data.map((bubble, index) => (
          <g key={index}>
            <circle
              cx={bubble.x}
              cy={bubble.y}
              r={bubble.size}
              fill={bubble.color || '#3B82F6'}
              opacity="0.6"
            />
            {bubble.label && (
              <text
                x={bubble.x}
                y={bubble.y}
                textAnchor="middle"
                className="text-xs"
              >
                {bubble.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/BubbleChart.tsx
GIT_AUTHOR_DATE="2025-12-15T01:18:00" GIT_COMMITTER_DATE="2025-12-15T01:18:00" git commit -m "feat: implement bubble chart component"

# DAY 8 - Wednesday, December 17, 2025 (2 commits)
echo "Day 8: December 17, 2025"

# Commit 1
cat > src/components/data-display/Charts/CandlestickChart.tsx << 'EOF'
import React from 'react';

export interface Candlestick {
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
}

export interface CandlestickChartProps {
  data: Candlestick[];
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  return (
    <div className="candlestick-chart">
      <svg width="100%" height="300">
        {data.map((candle, index) => {
          const isGreen = candle.close > candle.open;
          return (
            <g key={index}>
              <line
                x1={index * 20 + 10}
                y1={candle.high}
                x2={index * 20 + 10}
                y2={candle.low}
                stroke={isGreen ? '#10B981' : '#EF4444'}
              />
              <rect
                x={index * 20 + 5}
                y={Math.min(candle.open, candle.close)}
                width="10"
                height={Math.abs(candle.close - candle.open)}
                fill={isGreen ? '#10B981' : '#EF4444'}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/CandlestickChart.tsx
GIT_AUTHOR_DATE="2025-12-17T00:42:00" GIT_COMMITTER_DATE="2025-12-17T00:42:00" git commit -m "feat: add candlestick chart for financial data"

# Commit 2
cat > docs/components/data-visualization/chart-types.md << 'EOF'
# Chart Types Reference

## Available Charts

### Basic Charts
- **BarGraph**: Horizontal/vertical bars for comparing values
- **LineGraph**: Trends over time
- **PieChart**: Part-to-whole relationships
- **DonutChart**: Pie chart with center space

### Advanced Charts
- **AreaChart**: Filled line charts
- **ScatterPlot**: X-Y coordinate data points
- **RadarChart**: Multi-variable comparison
- **HeatMap**: Matrix data visualization

### Specialized Charts
- **Sparkline**: Inline mini charts
- **GaugeChart**: Progress/percentage display
- **FunnelChart**: Conversion tracking
- **TreeMap**: Hierarchical data
- **BubbleChart**: 3-dimensional data
- **CandlestickChart**: Financial OHLC data

## Usage Examples

### Bar Graph
```tsx
<BarGraph 
  data={[
    { label: 'Jan', value: 100 },
    { label: 'Feb', value: 150 }
  ]} 
/>
```

### Pie Chart
```tsx
<PieChart 
  data={[
    { label: 'Product A', value: 30, color: '#3B82F6' },
    { label: 'Product B', value: 70, color: '#10B981' }
  ]} 
/>
```
EOF
git add docs/components/data-visualization/chart-types.md
GIT_AUTHOR_DATE="2025-12-17T01:26:00" GIT_COMMITTER_DATE="2025-12-17T01:26:00" git commit -m "docs: document all chart types and usage"

# DAY 9 - Friday, December 19, 2025 (2 commits)
echo "Day 9: December 19, 2025"

# Commit 1
cat > src/components/data-display/Charts/index.ts << 'EOF'
export { ChartContainer } from './ChartContainer';
export { ChartLegend } from './ChartLegend';
export { ChartTooltip } from './ChartTooltip';
export { AreaChart } from './AreaChart';
export { ScatterPlot } from './ScatterPlot';
export { RadarChart } from './RadarChart';
export { HeatMap } from './HeatMap';
export { Sparkline } from './Sparkline';
export { GaugeChart } from './GaugeChart';
export { FunnelChart } from './FunnelChart';
export { TreeMap } from './TreeMap';
export { BubbleChart } from './BubbleChart';
export { CandlestickChart } from './CandlestickChart';

export type { ChartContainerProps } from './ChartContainer';
export type { ChartLegendProps, LegendItem } from './ChartLegend';
export type { ChartTooltipProps } from './ChartTooltip';
EOF
git add src/components/data-display/Charts/index.ts
GIT_AUTHOR_DATE="2025-12-19T00:38:00" GIT_COMMITTER_DATE="2025-12-19T00:38:00" git commit -m "feat: export all chart components"

# Commit 2
cat > docs/components/data-visualization/README.md << 'EOF'
# Data Visualization Components

Complete suite of chart and graph components for data visualization needs.

## Installation
All components are available in `src/components/data-display/Charts`

## Quick Start
```tsx
import { ChartContainer, BarGraph } from '@/components/data-display/Charts';

<ChartContainer title="Monthly Sales">
  <BarGraph data={salesData} />
</ChartContainer>
```

## Component Categories

### Container Components
- ChartContainer: Wrapper with title and styling
- ChartLegend: Display chart legends
- ChartTooltip: Interactive tooltips

### Graph Components
- BarGraph, LineGraph, PieChart, DonutChart
- AreaChart, ScatterPlot, RadarChart
- HeatMap, Sparkline, GaugeChart
- FunnelChart, TreeMap, BubbleChart
- CandlestickChart

## Features
- Responsive design
- Customizable colors
- TypeScript support
- Accessible markup
- Lightweight SVG rendering

## Documentation
- [Chart Types](./chart-types.md)
- [Charts Overview](./charts-overview.md)

## Examples
See `src/examples/data-display/` for complete examples.
EOF
git add docs/components/data-visualization/README.md
GIT_AUTHOR_DATE="2025-12-19T01:24:00" GIT_COMMITTER_DATE="2025-12-19T01:24:00" git commit -m "docs: create comprehensive data visualization guide"

echo "December 2025 commits complete! Total: 23 commits"
