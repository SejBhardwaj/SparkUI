export interface EditorPlugin {
  name: string;
  execute: (editor: HTMLElement) => void;
}

export const plugins = {
  autoLink: {
    name: 'autoLink',
    execute: (editor: HTMLElement) => {
      const text = editor.textContent || '';
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const html = text.replace(urlRegex, '<a href="$1">$1</a>');
      editor.innerHTML = html;
    },
  },
  
  markdown: {
    name: 'markdown',
    execute: (editor: HTMLElement) => {
      let html = editor.innerHTML;
      html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
      editor.innerHTML = html;
    },
  },
};

export const registerPlugin = (plugin: EditorPlugin) => {
  // Plugin registration logic
};
