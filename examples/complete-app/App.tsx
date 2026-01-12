import React from 'react';
import { 
  Button, 
  Card, 
  Input, 
  Modal, 
  Table,
  Navbar,
  Sidebar 
} from '../../src';

export const CompleteApp: React.FC = () => {
  return (
    <div className="app">
      <Navbar title="UI Components Demo" />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Card title="Dashboard">
            <Input placeholder="Search..." />
            <Table data={[]} columns={[]} />
            <Button>Load More</Button>
          </Card>
        </main>
      </div>
    </div>
  );
};
