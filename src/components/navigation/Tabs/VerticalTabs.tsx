import React from 'react';
import { Tabs, TabsProps } from './Tabs';

export const VerticalTabs: React.FC<TabsProps> = (props) => {
  return (
    <div className="tabs-vertical">
      <Tabs {...props} />
    </div>
  );
};

export const verticalTabStyles = {
  container: 'flex flex-row',
  tabList: 'flex flex-col border-r',
  tabPanel: 'flex-1 pl-4',
};
