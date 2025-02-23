# Animation and Motion Guidelines

## Principles
1. **Purpose**: Every animation should have a purpose
2. **Performance**: Optimize for 60fps
3. **Subtlety**: Animations should enhance, not distract
4. **Consistency**: Use consistent timing and easing

## Timing
- **Micro-interactions**: 100-200ms (hover, focus)
- **UI transitions**: 200-400ms (modals, dropdowns)
- **Page transitions**: 400-700ms (route changes)

## Easing Functions
- **Ease-out**: Entering elements (feels natural)
- **Ease-in**: Exiting elements (accelerates away)
- **Ease-in-out**: Moving elements (smooth motion)
- **Linear**: Loading indicators, progress

## Best Practices
1. Prefer transforms over position changes
2. Use opacity for fade effects
3. Avoid animating layout properties
4. Provide reduced motion option
5. Test on low-end devices

## Accessibility
- Respect `prefers-reduced-motion`
- Provide alternative feedback
- Avoid flashing/strobing
- Keep animations short

## Common Patterns
- Fade in: New content appearing
- Slide in: Panels, drawers
- Scale: Modals, tooltips
- Spin: Loading indicators
- Pulse: Notifications, alerts
