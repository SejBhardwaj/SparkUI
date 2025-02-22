/**
 * Layout Utility Functions
 */

export const flexbox = {
  row: { display: 'flex', flexDirection: 'row' as const },
  column: { display: 'flex', flexDirection: 'column' as const },
  center: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  between: { display: 'flex', justifyContent: 'space-between' },
  around: { display: 'flex', justifyContent: 'space-around' },
  evenly: { display: 'flex', justifyContent: 'space-evenly' },
};

export const position = {
  relative: { position: 'relative' as const },
  absolute: { position: 'absolute' as const },
  fixed: { position: 'fixed' as const },
  sticky: { position: 'sticky' as const },
};

export const display = {
  block: { display: 'block' },
  inline: { display: 'inline' },
  inlineBlock: { display: 'inline-block' },
  flex: { display: 'flex' },
  inlineFlex: { display: 'inline-flex' },
  grid: { display: 'grid' },
  none: { display: 'none' },
};

export const overflow = {
  auto: { overflow: 'auto' },
  hidden: { overflow: 'hidden' },
  visible: { overflow: 'visible' },
  scroll: { overflow: 'scroll' },
};
