import { IconCards } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const cards: ComponentType = {
  slug: 'cards',
  name: 'Cards',
  icon: <IconCards stroke={ 1.5} />,
description: 'Versatile card components for displaying content',
  variants: [
    {
      id: 'card-simple',
      name: 'Simple Card',
      code: `<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300">This is a simple card component with a clean design.</p>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'card-image',
      name: 'Image Card',
      code: `<div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
  <div class="h-48 bg-gradient-to-br from-lime-500 to-lime-600"></div>
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Image Card</h3>
    <p class="text-gray-600 dark:text-gray-300">A card with an image header section.</p>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'card-glass',
      name: 'Glass Card',
      code: `<div class="max-w-sm p-6 backdrop-blur-lg bg-gray-900/5 dark:bg-white/10 rounded-xl border border-gray-900/10 dark:border-white/20 shadow-xl">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Glass Card</h3>
  <p class="text-gray-700 dark:text-gray-200">A beautiful glassmorphism card design.</p>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'card-hover',
      name: 'Hover Card',
      code: `<div class="max-w-sm p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 cursor-pointer group">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Hover Card</h3>
  <p class="text-gray-600 dark:text-gray-300">Hover me for a nice effect!</p>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'card-animated-blur',
      name: 'Animated Blur Card',
      code: `<div class="w-96 h-64 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
  <div class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
  <div class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
  <div class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
  <div class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
  <div class="z-10 flex flex-col justify-evenly w-full h-full">
    <span class="text-2xl font-bold">Text title</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat felis nec rutrum vulputate. Morbi ut lobortis enim. Nam nec elit nibh.</p>
    <button class="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3">See more</button>
  </div>
</div>`,
      contributor:'azmil72',
    },
    {
      id: 'card-neon-glow',
      name: 'Neon Glow Card',
      code: `<div class="relative w-80 h-56 bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105">
  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
  <div class="relative z-10 h-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 group-hover:border-purple-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500">
    <div>
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Neon Dreams</h3>
      <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Experience the future with this cyberpunk-inspired design that glows on hover.</p>
    </div>
    <button class="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">Explore</button>
  </div>
</div>`,
      contributor:'azmil72',
    },
    {
      id: 'card-particle-effect',
      name: 'Particle Effect Card',
      code: `<div class="relative w-80 h-60 bg-black rounded-xl overflow-hidden group cursor-pointer">
  <div class="absolute inset-0">
    <div class="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping" style="top: 20%; left: 10%; animation-delay: 0s;"></div>
    <div class="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse" style="top: 60%; left: 80%; animation-delay: 0.5s;"></div>
    <div class="absolute w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style="top: 80%; left: 20%; animation-delay: 1s;"></div>
    <div class="absolute w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style="top: 30%; left: 70%; animation-delay: 1.5s;"></div>
    <div class="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse" style="top: 70%; left: 50%; animation-delay: 2s;"></div>
  </div>
  <div class="relative z-10 h-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 flex flex-col justify-between group-hover:from-gray-800/80 group-hover:to-gray-900/80 transition-all duration-500">
    <div>
      <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Cosmic</h3>
      <p class="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">Floating particles create a magical atmosphere in this space-themed card design.</p>
    </div>
    <button class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group-hover:scale-105">Launch</button>
  </div>
</div>`,
      contributor:'azmil72',
    },
    {
      id: 'card-liquid-effect',
      name: 'Liquid Effect Card',
      code: `<div class="relative w-80 h-64 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
  <div class="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
  <div class="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:scale-150 group-hover:opacity-50 transition-all duration-700"></div>
  <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-20 group-hover:scale-125 group-hover:opacity-40 transition-all duration-700"></div>
  <div class="relative z-10 h-full p-6 flex flex-col justify-between">
    <div>
      <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">L</div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Liquid Motion</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Smooth flowing animations that respond to your interactions with fluid-like movements.</p>
    </div>
    <button class="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group-hover:scale-105">Experience</button>
  </div>
</div>`,
      contributor: 'azmil72',
    },
  ],
};
