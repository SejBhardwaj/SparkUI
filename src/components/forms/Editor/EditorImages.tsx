import React from 'react';

export interface EditorImagesProps {
  onUpload: (file: File) => Promise<string>;
}

export const EditorImages: React.FC<EditorImagesProps> = ({ onUpload }) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await onUpload(file);
      document.execCommand('insertImage', false, url);
    }
  };
  
  return (
    <div className="editor-images">
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};
