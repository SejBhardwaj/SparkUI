# Dependency Tree Visualization

## Overview
Visualization of dependency relationships across the project.

## Tree Structure
```
project-root
├── @types/react (dev)
├── react
│   └── loose-envify
│       └── js-tokens
├── tailwindcss
│   ├── postcss
│   ├── autoprefixer
│   └── ...
└── typescript (dev)
```

## Analysis Tools
- npm ls
- yarn why
- pnpm why

## Circular Dependencies
Check for and resolve circular dependencies.

## Optimization
Flatten dependency tree where possible.
