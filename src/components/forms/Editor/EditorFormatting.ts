export const formatBold = () => document.execCommand('bold');
export const formatItalic = () => document.execCommand('italic');
export const formatUnderline = () => document.execCommand('underline');
export const formatStrikethrough = () => document.execCommand('strikeThrough');
export const formatHeading = (level: 1 | 2 | 3) => document.execCommand('formatBlock', false, `h${level}`);
export const formatParagraph = () => document.execCommand('formatBlock', false, 'p');
export const insertLink = (url: string) => document.execCommand('createLink', false, url);
export const insertImage = (url: string) => document.execCommand('insertImage', false, url);
