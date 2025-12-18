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
