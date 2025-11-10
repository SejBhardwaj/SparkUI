import { IconList } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const description_list: ComponentType = {
  slug: 'description-list',
  name: 'Description List',
  icon: <IconList stroke={1.5} />,
  description: 'A semantic HTML component for displaying key-value pairs, perfect for structured data like product details or definitions.',
  variants: [
    {
      id: 'descirption-list-basic',
      name: 'Basic',
      code: `<section class="px-6 py-16 md:py-20">
    <div class="mx-auto max-w-5xl">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 md:mb-4">
          Why Developers Love JOKOUI
        </h2>
        <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Built for speed, designed for scale. Experience the next generation of UI components.
        </p>
      </div>

      <dl class="grid gap-8 sm:grid-cols-2 lg:gap-10">
        <div class="flex flex-col space-y-2">
          <dt class="text-lg md:text-xl font-semibold text-lime-600 dark:text-lime-300">
            Lightning Fast Performance
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Zero-dependency architecture delivers sub-50ms load times. Optimized bundle size means your users get instant experiences, even on slower connections.
          </dd>
        </div>

        <div class="flex flex-col space-y-2">
          <dt class="text-lg md:text-xl font-semibold text-lime-600 dark:text-lime-300">
            Mobile-First Responsive
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Automatically adapts to any screen size with fluid layouts. From smartwatches to 4K displays, your UI looks pixel-perfect everywhere.
          </dd>
        </div>

        <div class="flex flex-col space-y-2">
          <dt class="text-lg md:text-xl font-semibold text-lime-600 dark:text-lime-300">
            Accessibility Built-In
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            WCAG 2.1 AAA compliant out of the box. Screen reader friendly, keyboard navigable, and focus-visible states included by default.
          </dd>
        </div>

        <div class="flex flex-col space-y-2">
          <dt class="text-lg md:text-xl font-semibold text-lime-600 dark:text-lime-300">
            Theme Customization
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Match your brand identity in minutes. Override colors, fonts, and spacing with Tailwind utilities or define custom design tokens.
          </dd>
        </div>
      </dl>
    </div>
  </section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'descirption-list-with-divider',
      name: 'With Divider',
      code: `<section class="px-6 py-16 md:py-20">
    <div class="mx-auto max-w-4xl">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 md:mb-4">
          Technical Specifications
        </h2>
        <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
          Complete product information at a glance.
        </p>
      </div>

      <dl class="divide-y divide-neutral-200 dark:divide-neutral-800">
        <div class="py-5 md:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <dt class="text-base md:text-lg font-semibold text-lime-600 dark:text-lime-300">
            Project Name
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            JOKOUI
          </dd>
        </div>

        <div class="py-5 md:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <dt class="text-base md:text-lg font-semibold text-lime-600 dark:text-lime-300">
             Current Version
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            v0.1.0
          </dd>
        </div>

        <div class="py-5 md:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <dt class="text-base md:text-lg font-semibold text-lime-600 dark:text-lime-300">
            License Type
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            MIT
          </dd>
        </div>

        <div class="py-5 md:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <dt class="text-base md:text-lg font-semibold text-lime-600 dark:text-lime-300">
            Last Updated
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            January 2026
          </dd>
        </div>
      </dl>
    </div>
  </section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'descirption-list-with-stepper',
      name: 'With Stepper',
      code: `<section class="px-6 py-16 md:py-20">
    <div class="mx-auto max-w-4xl">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 md:mb-4">
          How Jokoui Works
        </h2>
        <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Copy, paste, and ship — no installation required. Pure HTML and Tailwind CSS.
        </p>
      </div>

      <dl class="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3">
        <div class="relative mb-12 pl-8 md:pl-10">
          <span class="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
            1
          </span>
          <dt class="text-xl md:text-2xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
            📋 Browse Components
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Explore our collection of ready-to-use components. Each component is built with native HTML and Tailwind CSS — no frameworks required.
          </dd>
        </div>

        <div class="relative mb-12 pl-8 md:pl-10">
          <span class="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
            2
          </span>
          <dt class="text-xl md:text-2xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
            📝 Copy & Paste Code
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Simply copy the HTML markup and paste it directly into your project. Works with any tech stack — React, Vue, Laravel, or plain HTML.
          </dd>
        </div>

        <div class="relative mb-12 pl-8 md:pl-10">
          <span class="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
            3
          </span>
          <dt class="text-xl md:text-2xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
            🎨 Customize Freely
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Modify colors, spacing, and styles using Tailwind utilities. Full ownership of the code means unlimited customization possibilities.
          </dd>
        </div>

        <div class="relative pl-8 md:pl-10">
          <span class="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
            4
          </span>
          <dt class="text-xl md:text-2xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
            🚀 Ship Instantly
          </dt>
          <dd class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            No build process, no dependencies to manage. Your components work immediately with dark mode support and responsive design built-in.
          </dd>
        </div>
      </dl>
    </div>
  </section>`,
      contributor: 'yuxxeun',
    },
    ]
}