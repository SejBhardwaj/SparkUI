import { IconLineHeight } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const faq: ComponentType = {
  slug: 'faq',
  name: 'FAQ',
  icon: <IconLineHeight stroke={1.5} />,
  description: 'FAQs for showing additional information.',
  variants: [
    {
      id: 'faq-simple',
      name: 'Simple FAQs',
      code: `<div class="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto space-y-3 md:space-y-4">

  <!-- Header Section -->
  <div class="mb-6 md:mb-8 text-center px-2">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 md:mb-2">
      FAQ
    </h2>
    <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
       Frequently asked questions
    </p>
  </div>

  <!-- Item 1 -->
  <details class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          1
        </span>
        <span class="truncate sm:whitespace-normal">
          What is Tailwind CSS?
        </span>
      </span>
      <!-- Icon -->
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
      Tailwind CSS is a utility-first CSS framework for building modern user
      interfaces quickly and consistently. It provides low-level utility
      classes that let you style components directly without writing custom CSS.
    </div>
  </details>

  <!-- Item 2 -->
  <details
    class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          2
        </span>
        <span class="truncate sm:whitespace-normal">
          Do I need JavaScript?
        </span>
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
      No. This accordion uses the native HTML
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        &lt;details&gt;
      </code>
      element, which already provides built-in expand and collapse behavior
      without any additional JavaScript.
    </div>
  </details>

  <!-- Item 3 -->
  <details class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          3
        </span>
        <span class="truncate sm:whitespace-normal">
          Does it support dark mode?
        </span>
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
       Yes. It automatically follows Tailwind’s
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        dark
      </code>
        mode. You can enable dark mode by adding the
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        dark
      </code>
       class to the
      <code class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        &lt;html&gt;
      </code>.
      element.
    </div>
  </details>
</div>`,
      contributor: 'zoelabbb',
    },
    {
      id: 'faq-default-open',
      name: 'FAQs with default open',
      code: `<div class="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto space-y-3 md:space-y-4">
  <div class="mb-6 md:mb-8 text-center px-2">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 md:mb-2">
      FAQ
    </h2>
    <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
      Frequently asked questions
    </p>
  </div>

  <!-- With open property -->
  <details open class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          1
        </span>
        <span class="truncate sm:whitespace-normal">
          What is Tailwind CSS?
        </span>
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>
    <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
      Tailwind CSS is a utility-first CSS framework for building modern user interfaces quickly and consistently.
    </div>
  </details>

  <details class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
    <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
      <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
          2
        </span>
        <span class="truncate sm:whitespace-normal">
          Do I need JavaScript?
        </span>
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
      </summary>
      <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
        No. This accordion uses the native HTML &lt;details&gt; element, which provides built-in expand and collapse behavior.
      </div>
    </details>

    <details class="group rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
      <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200 ease-out group-open:bg-lime-100 dark:group-open:bg-lime-950/30 group-open:border-b-2 group-open:border-lime-200 dark:group-open:border-lime-900">
        <span class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <span class="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
            3
          </span>
          <span class="truncate sm:whitespace-normal">
            Does it support dark mode?
          </span>
        </span>
        <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ml-2 text-lime-600 dark:text-lime-400 transition-transform duration-300 ease-out group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed bg-gray-100 dark:bg-gray-800">
        Yes. It automatically follows Tailwind's dark mode by adding the dark class to the &lt;html&gt; element.
      </div>
    </details>
  </div>`,
      contributor: 'zoelabbb',
    },
    {
      id: 'faq-accented',
      name: 'FAQs with left accent',
      code: `<div class="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto space-y-4">
  
  <!-- Header -->
  <div class="mb-6 md:mb-8 text-center px-2">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 md:mb-2">
      FAQ
    </h2>
    <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
      Frequently asked questions
    </p>
  </div>

  <!-- Item -->
  <details class="group relative rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    
    <!-- Accent bar -->
    <span class="absolute left-0 top-0 h-full w-1.5 bg-lime-400 dark:bg-lime-600 group-open:bg-lime-500"></span>

    <summary class="flex cursor-pointer list-none items-start gap-3 sm:gap-4 px-5 py-4 sm:px-6 sm:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200">
      <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
        1
      </span>
      <span class="flex-1 leading-snug">
        What makes this FAQ variant different?
      </span>

      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-lime-600 dark:text-lime-400 transition-transform duration-300 group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>

    <div class="pl-16 pr-5 pb-5 sm:pr-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
      This variant adds a subtle left accent bar and badge-style question label
      while keeping the same lime and neutral color system for consistency.
    </div>
  </details>

  <!-- Item -->
  <details class="group relative rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    <span class="absolute left-0 top-0 h-full w-1.5 bg-lime-400 dark:bg-lime-600 group-open:bg-lime-500"></span>

    <!-- Accent bar -->
    <summary class="flex cursor-pointer list-none items-start gap-3 sm:gap-4 px-5 py-4 sm:px-6 sm:py-5 font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 hover:bg-lime-50 dark:hover:bg-lime-950/20 transition-colors duration-200">
      
    <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-950 text-lime-600 dark:text-lime-400 font-bold text-xs sm:text-sm">
        2
      </span>
      <span class="flex-1 leading-snug">
        Does it still work without JavaScript?
      </span>
      <svg class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-lime-600 dark:text-lime-400 transition-transform duration-300 group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </summary>

    <div class="pl-16 pr-5 pb-5 sm:pr-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
      Yes. This uses the native HTML
      <code class="px-1.5 py-0.5 bg-lime-100 dark:bg-lime-950 text-lime-700 dark:text-lime-300 rounded font-mono text-xs sm:text-sm">
        &lt;details&gt;
      </code>
      element, so no JavaScript is required.
    </div>
  </details>
</div>`,
      contributor: 'yuxxeun',
    }
  ],
};
