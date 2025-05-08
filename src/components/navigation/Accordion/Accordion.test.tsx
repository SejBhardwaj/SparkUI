import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

describe('Accordion', () => {
  it('renders accordion items', () => {
    render(
      <Accordion>
        <AccordionItem id="item1" title="Item 1">Content 1</AccordionItem>
        <AccordionItem id="item2" title="Item 2">Content 2</AccordionItem>
      </Accordion>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
  
  it('expands and collapses items', () => {
    render(
      <Accordion>
        <AccordionItem id="item1" title="Item 1">Content 1</AccordionItem>
      </Accordion>
    );
    
    const button = screen.getByText('Item 1');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Content 1')).toBeVisible();
  });
  
  it('allows multiple items open when allowMultiple is true', () => {
    render(
      <Accordion allowMultiple>
        <AccordionItem id="item1" title="Item 1">Content 1</AccordionItem>
        <AccordionItem id="item2" title="Item 2">Content 2</AccordionItem>
      </Accordion>
    );
    
    fireEvent.click(screen.getByText('Item 1'));
    fireEvent.click(screen.getByText('Item 2'));
    
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });
});
