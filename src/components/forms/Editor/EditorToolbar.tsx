import React from 'react';

export interface EditorToolbarProps {
  onFormat: (command: string, value?: string) => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({ onFormat }) => (
  <div className="editor-toolbar">
    <button onClick={() => onFormat('bold')} title="Bold">B</button>
    <button onClick={() => onFormat('italic')} title="Italic">I</button>
    <button onClick={() => onFormat('underline')} title="Underline">U</button>
    <button onClick={() => onFormat('insertUnorderedList')} title="Bullet List">•</button>
    <button onClick={() => onFormat('insertOrderedList')} title="Numbered List">1.</button>
    <button onClick={() => onFormat('createLink', prompt('URL:') || '')} title="Link">🔗</button>
  </div>
);

export const formatText = (command: string, value?: string) => {
  document.execCommand(command, false, value);
};
