/**
 * Grid Layout System
 */

export const gridColumns = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
} as const;

export type GridColumns = keyof typeof gridColumns;

export const createGrid = (columns: GridColumns, gap?: number) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${gridColumns[columns]}, minmax(0, 1fr))`,
  ...(gap && { gap: `${gap}rem` }),
});

export const gridSpan = (span: number) => ({
  gridColumn: `span ${span} / span ${span}`,
});

export const gridAutoFlow = {
  row: { gridAutoFlow: 'row' },
  column: { gridAutoFlow: 'column' },
  dense: { gridAutoFlow: 'dense' },
};
