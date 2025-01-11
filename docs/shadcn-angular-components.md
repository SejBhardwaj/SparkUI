# Shadcn UI Angular Components

## Overview
Shadcn UI Angular port provides accessible, customizable components for Angular applications.

## Component Library
- Buttons and inputs
- Dialogs and modals
- Dropdowns and menus
- Data tables
- Forms
- Navigation

## Features
- Angular 16+
- Radix UI primitives
- Tailwind CSS
- Fully typed
- Accessible (ARIA)
- Customizable

## Usage
Components are located in `s-shadcn-ui-angular-master/`

## Installation

```bash
ng add @shadcn/angular
```

## Example

```typescript
import { ButtonComponent } from '@shadcn/angular';

@Component({
  selector: 'app-example',
  imports: [ButtonComponent],
  template: '<shadcn-button>Click me</shadcn-button>'
})
export class ExampleComponent {}
```
