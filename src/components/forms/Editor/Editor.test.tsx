import { render, screen, fireEvent } from '@testing-library/react';
import { Editor } from './Editor';

describe('Editor', () => {
  it('renders editor', () => {
    render(<Editor />);
    expect(document.querySelector('.editor')).toBeInTheDocument();
  });
  
  it('handles content change', () => {
    const onChange = jest.fn();
    render(<Editor onChange={onChange} />);
    const editor = document.querySelector('.editor') as HTMLElement;
    fireEvent.input(editor, { target: { innerHTML: 'Test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
