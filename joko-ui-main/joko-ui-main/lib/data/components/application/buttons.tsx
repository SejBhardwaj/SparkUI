import { IconToggleRight } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const buttons: ComponentType = {
  slug: 'buttons',
  name: 'Buttons',
  icon: <IconToggleRight stroke={1.5} />,
  description: 'Beautiful button components with various styles and states',
  variants: [
    {
      id: 'btn-primary',
      name: 'Primary Button',
      code: `<button class="px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200">
  Primary Button
</button>`,
      contributor: 'rayasabari',
    },
    {
      id: 'btn-secondary',
      name: 'Secondary Button',
      code: `<button class="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
  Secondary Button
</button>`,
      contributor: 'rayasabari',
    },
    {
      id: 'btn-outline',
      name: 'Outline Button',
      code: `<button class="px-6 py-3 border-2 border-lime-600 text-lime-600 font-semibold rounded-lg hover:bg-lime-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200 dark:border-lime-400 dark:text-lime-400 dark:hover:bg-lime-500 dark:hover:text-white">
  Outline Button
</button>`,
      contributor: 'rayasabari',
    },
    {
      id: 'btn-gradient',
      name: 'Gradient Button',
      code: `<button class="px-6 py-3 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200">
  Gradient Button
</button>`,
      contributor: 'rayasabari',
    },
    {
      id: 'btn-glass',
      name: 'Glass Button',
      code: `<button class="px-6 py-3 backdrop-blur-md bg-gray-900/10 border border-gray-900/20 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-900/20 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-200 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20">
  Glass Button
</button>`,
      contributor: 'rayasabari',
    },
    {
      id: 'btn-icon',
      name: 'Icon Button',
      code: `<button class="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
  Add Item
</button>`,
      contributor: 'rayasabari',
    },
    {
      id: 'btn-pulse',
      name: 'Pulse Button',
      code: `<button class="relative px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-300 hover:bg-lime-700">
  <span class="relative z-10">Pulse Button</span>
  <div class="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping rounded-lg"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-ripple',
      name: 'Ripple Button',
      code: `<button class="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
  <span class="relative z-10">Ripple Button</span>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-white/40 pointer-events-none transform scale-100 opacity-0 transition-all duration-700 ease-out group-active:scale-0 group-active:opacity-100 group-active:transition-none"></div>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-floating',
      name: 'Floating Button',
      code: `<button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 active:translate-y-0 active:rotate-0 active:scale-95 group">
  <span class="inline-block group-hover:animate-bounce">✨</span>
  Floating Button
  <span class="inline-block group-hover:animate-bounce animation-delay-150">🚀</span>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-retro',
      name: 'Retro Button',
      code: `<button class="px-5 py-2.5 bg-yellow-400 text-black font-black text-lg border-4 border-black rounded-lg shadow-[0.1em_0.1em_0px_0px_black] hover:shadow-[0.15em_0.15em_0px_0px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[0.05em_0.05em_0px_0px_black] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 cursor-pointer dark:bg-yellow-300 dark:text-gray-900">
  Retro Button
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-social-instagram',
      name: 'Instagram Social Button',
      code: `<button class="group w-12 hover:w-44 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 relative rounded text-white duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-pink-600 before:hover:bg-pink-500 before:rotate-45 before:duration-700">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 shrink-0 fill-white">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
  <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">@username</span>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-social-facebook',
      name: 'Facebook Social Button',
      code: `<button class="group w-12 hover:w-44 h-12 bg-gradient-to-r from-blue-600 to-blue-700 relative rounded text-white duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-blue-500 before:hover:bg-blue-400 before:rotate-45 before:duration-700">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 shrink-0 fill-white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
  <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">Facebook</span>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-social-tiktok',
      name: 'TikTok Social Button',
      code: `<button class="group w-12 hover:w-44 h-12 bg-black relative rounded text-white duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-red-500 before:hover:bg-red-400 before:rotate-45 before:duration-700">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 shrink-0 fill-white">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
  <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">@tiktok</span>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-social-linkedin',
      name: 'LinkedIn Social Button',
      code: `<button class="group w-12 hover:w-44 h-12 bg-gradient-to-r from-blue-700 to-blue-800 relative rounded text-white duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-blue-600 before:hover:bg-blue-500 before:rotate-45 before:duration-700">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 shrink-0 fill-white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
  <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">LinkedIn</span>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-arrow-slide',
      name: 'Arrow Slide Button',
      code: `<button class="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
  <div class="absolute flex px-1 py-0.5 justify-start items-center inset-0">
    <div class="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
    <div class="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
      <div class="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
          <path fill="currentColor" d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"/>
        </svg>
      </div>
    </div>
  </div>
  <div class="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
    Contacts
  </div>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-royal-elite',
      name: 'Royal Elite Button',
      code: `<button class="group relative px-10 py-5 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-black font-bold tracking-wider uppercase text-sm hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transform hover:rotate-1 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] active:scale-90 overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-amber-400/50 before:transition-all before:duration-300 hover:before:border-amber-300 hover:before:scale-105">
  <span class="flex items-center gap-2 relative z-10">
    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-5 h-5">
      <path stroke-linecap="round" stroke-width="2" d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
    </svg>
    Royal Elite
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2">
      <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
  </span>
  <div class="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-tl from-amber-200/40 via-transparent to-transparent"></div>
  <div class="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
</button>`,
      contributor: 'azmil72',
    },
    {
      id: 'btn-delete-animated',
      name: 'Delete Animated Button',
      code: `<button class="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600">
  <svg viewBox="0 0 1.625 1.625" class="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000" height="15" width="15">
    <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"/>
    <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"/>
    <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"/>
  </svg>
  <svg width="16" fill="none" viewBox="0 0 39 7" class="origin-right duration-500 group-hover:rotate-90">
    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
    <line stroke-width="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1="12"></line>
  </svg>
  <svg width="16" fill="none" viewBox="0 0 33 39" class="">
    <mask fill="white" id="path-1-inside-1_8_19">
      <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"/>
    </mask>
    <path mask="url(#path-1-inside-1_8_19)" fill="white" d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"/>
    <path stroke-width="4" stroke="white" d="M12 6L12 29"/>
    <path stroke-width="4" stroke="white" d="M21 6V29"/>
  </svg>
</button>`,
      contributor: 'azmil72',
    },
  ],
};
