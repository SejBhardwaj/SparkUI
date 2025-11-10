import { IconChartBar } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const stats: ComponentType = {
  slug: 'stats',
  name: 'Stats',
  icon: <IconChartBar stroke={1.5} />,
  description: 'Stat section to highlight interesting statistics and facts to build trust',
  variants: [
    {
      id: 'stats-simple',
      name: 'Simple Stats',
      code: `<section class="py-16 px-6 bg-white dark:bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Users</dt>
        <dd class="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">8,000+</dd>
      </div>
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Components</dt>
        <dd class="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">500+</dd>
      </div>
      <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Downloads</dt>
        <dd class="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">1.2M</dd>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'stats-split',
      name: 'Stats with Description',
      code: `<section class="py-16 px-6 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trusted by developers worldwide</h2>
      <p class="text-gray-600 dark:text-gray-300 text-lg">
        Our components are built with performance and accessibility in mind, helping you build better products faster.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-8 w-full md:w-auto">
      <div class="text-center">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">99%</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Customer Satisfaction</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">24/7</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Support Available</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">100+</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Updates / Year</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">50k+</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Community Members</div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'stats-bordered',
      name: 'Bordered Stats',
      code: `<section class="py-20 px-6 bg-white dark:bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Growth in Numbers</h2>
      <p class="text-gray-600 dark:text-gray-400">We take pride in our numbers. They speak for our commitment to quality and community.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="text-center border-r border-gray-200 dark:border-gray-800 last:border-0">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">250+</div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects Completed</div>
      </div>
      <div class="text-center border-r border-gray-200 dark:border-gray-800 last:border-0">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">$10M</div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue Generated</div>
      </div>
      <div class="text-center border-r border-gray-200 dark:border-gray-800 last:border-0">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">15+</div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Awards Won</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-lime-600 dark:text-lime-500 mb-2">5</div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Experience</div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
  ],
};
