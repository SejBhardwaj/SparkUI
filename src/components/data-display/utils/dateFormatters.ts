export const formatDate = (date: Date): string => date.toLocaleDateString();
export const formatRelativeTime = (date: Date): string => {
  const diff = Date.now() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  return `${days} days ago`;
};
