import React from 'react';
import { Button } from '../../components/feedback/Button/Button';
import { ButtonGroup } from '../../components/feedback/Button/ButtonGroup';
import { IconButton } from '../../components/feedback/Button/IconButton';

export const ButtonExamples: React.FC = () => {
  return (
    <div className="examples-container">
      <section>
        <h2>Button Variants</h2>
        <div className="example-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
      
      <section>
        <h2>Button Sizes</h2>
        <div className="example-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>
      
      <section>
        <h2>Button States</h2>
        <div className="example-row">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
      
      <section>
        <h2>Button Group</h2>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </section>
      
      <section>
        <h2>Icon Buttons</h2>
        <div className="example-row">
          <IconButton icon="🔍" aria-label="Search" />
          <IconButton icon="⚙️" aria-label="Settings" />
          <IconButton icon="❤️" aria-label="Like" />
        </div>
      </section>
    </div>
  );
};
