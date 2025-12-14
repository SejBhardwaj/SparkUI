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
