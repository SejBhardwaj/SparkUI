import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

describe('Menu', () => {
  it('renders menu with trigger', () => {
    render(
      <Menu trigger="Open Menu">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Menu>
    );
    
    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });
  
  it('opens menu on trigger click', () => {
    render(
      <Menu trigger="Open Menu">
        <MenuItem>Item 1</MenuItem>
      </Menu>
    );
    
    fireEvent.click(screen.getByText('Open Menu'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
  
  it('closes menu after item click', () => {
    const onClick = jest.fn();
    render(
      <Menu trigger="Open Menu">
        <MenuItem onClick={onClick}>Item 1</MenuItem>
      </Menu>
    );
    
    fireEvent.click(screen.getByText('Open Menu'));
    fireEvent.click(screen.getByText('Item 1'));
    
    expect(onClick).toHaveBeenCalled();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });
});
