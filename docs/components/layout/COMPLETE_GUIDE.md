# Complete Layout System Guide

## Overview
Comprehensive guide to the layout component system covering grids, flexbox, containers, spacing, alignment, positioning, responsive utilities, display controls, sizing, patterns, dashboards, pages, and wrappers.

## Component Categories

### Grid Systems
- MasonryLayout, AutoFitGrid, GridGap, GridTemplateAreas, ResponsiveColumns
- Advanced grid patterns for complex layouts

### Flexbox Utilities
- FlexGap, FlexOrder, FlexBasis, FlexShrinkGrow
- Complete flexbox control system

### Containers
- MaxWidthContainer, CenteredContainer, PaddedContainer, ConstrainedContainer, BreakoutContainer
- Content width management

### Spacing & Alignment
- MarginUtils, PaddingUtils, GapUtils, SpaceBetween, SpacingScale
- TextAlign, VerticalAlign, JustifyContent, AlignItems

### Position Utilities
- PositionUtils, StickyPosition, FixedPosition, AbsolutePosition, RelativePosition, ZIndex
- Complete positioning control

### Responsive System
- Breakpoints, MediaQuery, ResponsiveVisibility, MobileFirst, DesktopUtils
- Adaptive layout utilities

### Display & Size
- DisplayUtils, VisibilityUtils, OverflowUtils, OpacityUtils
- WidthUtils, HeightUtils, MinMaxWidth, MinMaxHeight, AspectRatio, SizePresets

### Layout Patterns
- SidebarLayout, HeaderContentFooter, HolyGrailLayout, SplitScreenLayout, CardLayout
- Common layout patterns

### Dashboard Layouts
- DashboardGrid, WidgetContainer, MetricsLayout, AnalyticsLayout
- Dashboard-specific layouts

### Page Templates
- LandingPageLayout, BlogLayout, ArticleLayout, PortfolioLayout, PricingLayout, ContactLayout
- Pre-built page templates

### Wrappers
- LayoutWrapper, SectionWrapper, ContentWrapper, PageWrapper, WrapperUtils
- Wrapper utilities

## Usage Examples

### Basic Grid
```tsx
import { ResponsiveGrid, GridItem } from '@/components/layout/Grid';

<ResponsiveGrid>
  <GridItem span={6}>Content</GridItem>
  <GridItem span={6}>Content</GridItem>
</ResponsiveGrid>
```

### Flexbox Layout
```tsx
import { FlexContainer, FlexItem } from '@/components/layout/Flex';

<FlexContainer gap={4}>
  <FlexItem grow={1}>Content</FlexItem>
  <FlexItem>Sidebar</FlexItem>
</FlexContainer>
```

### Responsive Container
```tsx
import { MaxWidthContainer } from '@/components/layout/Container';

<MaxWidthContainer size="lg">
  <Content />
</MaxWidthContainer>
```

### Dashboard Layout
```tsx
import { DashboardGrid, WidgetContainer } from '@/components/layout/Dashboard';

<DashboardGrid>
  <WidgetContainer>
    <MetricsWidget />
  </WidgetContainer>
</DashboardGrid>
```

## Best Practices

1. **Use Semantic HTML**: Always use appropriate HTML elements
2. **Mobile-First**: Design for mobile, enhance for desktop
3. **Accessibility**: Ensure keyboard navigation and screen reader support
4. **Performance**: Lazy load components when possible
5. **Consistency**: Use design tokens for spacing and sizing
6. **Responsive**: Test across all breakpoints
7. **Documentation**: Document custom layouts

## Testing

All layout components include comprehensive tests covering:
- Rendering
- Props handling
- Responsive behavior
- Accessibility
- Edge cases

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

See CONTRIBUTING.md for guidelines on adding new layout components.

## License

MIT License - see LICENSE file for details.
