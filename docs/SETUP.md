# Development Environment Setup

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- Code editor (VS Code recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ui-components-project
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your configuration.

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate coverage report

## IDE Setup

### VS Code Extensions

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- GitLens

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically try the next available port.

### Module Not Found

Try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure your IDE is using the workspace TypeScript version:
- VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Select TypeScript Version" → "Use Workspace Version"

## Getting Help

- Check the [documentation](./README.md)
- Review [ARCHITECTURE.md](./ARCHITECTURE.md)
- Open an issue on GitHub
