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
