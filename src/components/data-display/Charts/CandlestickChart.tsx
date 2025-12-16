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
