import React, { useState } from 'react';

export interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export const Editor: React.FC<EditorProps> = ({ value = '', onChange, placeholder, readOnly }) => {
  const [content, setContent] = useState(value);
  
  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    setContent(newContent);
    onChange?.(newContent);
  };
  
  return (
    <div
      className="editor"
      contentEditable={!readOnly}
      onInput={handleChange}
      dangerouslySetInnerHTML={{ __html: content }}
      data-placeholder={placeholder}
    />
  );
};
