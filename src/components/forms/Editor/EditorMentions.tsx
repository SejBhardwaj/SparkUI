import React, { useState } from 'react';

export interface Mention {
  id: string;
  name: string;
  avatar?: string;
}

export interface EditorMentionsProps {
  mentions: Mention[];
  onSelect: (mention: Mention) => void;
}

export const EditorMentions: React.FC<EditorMentionsProps> = ({ mentions, onSelect }) => {
  const [query, setQuery] = useState('');
  const filtered = mentions.filter(m => m.name.toLowerCase().includes(query.toLowerCase()));
  
  return (
    <div className="editor-mentions">
      {filtered.map(mention => (
        <div key={mention.id} onClick={() => onSelect(mention)} className="mention-item">
          {mention.avatar && <img src={mention.avatar} alt={mention.name} />}
          <span>{mention.name}</span>
        </div>
      ))}
    </div>
  );
};
