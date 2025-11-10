import { IconDeviceDesktop } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const heroes: ComponentType = {
  slug: 'heroes',
  name: 'Hero Sections',
  icon: <IconDeviceDesktop stroke={1.5} />,
  description: 'Eye-catching hero sections for landing pages',
  variants: [
    {
      id: 'hero-simple',
      name: 'Simple Hero',
      code: `<section class="py-20 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Build Beautiful Websites
      <span class="text-lime-600 dark:text-lime-400"> Faster</span>
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Free Tailwind CSS components to help you create stunning websites without starting from scratch.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#" class="w-full sm:w-auto px-8 py-4 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors">
        Get Started
      </a>
      <a href="#" class="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-lime-600 hover:text-lime-600 dark:hover:border-lime-400 dark:hover:text-lime-400 transition-colors">
        Learn More
      </a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'hero-gradient',
      name: 'Gradient Hero',
      code: `<section class="relative py-24 px-6 bg-gradient-to-br from-lime-600 via-green-600 to-emerald-600 overflow-hidden">
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
  <div class="relative max-w-4xl mx-auto text-center">
    <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
      ✨ New components added weekly
    </span>
    <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
      Design Without Limits
    </h1>
    <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
      Premium quality Tailwind CSS components that make your projects stand out.
    </p>
    <a href="#" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-lime-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
      Explore Components
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'hero-glass',
      name: 'Glass Hero',
      code: `<section class="relative py-24 px-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500 rounded-full blur-3xl opacity-20"></div>
  </div>
  <div class="relative max-w-4xl mx-auto">
    <div class="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl p-12 text-center shadow-2xl">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        The Future of Web Design
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Modern glassmorphism components for next-generation web experiences.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="w-full sm:w-auto px-8 py-4 bg-lime-600 text-white font-semibold rounded-xl hover:bg-lime-700 transition-colors shadow-lg">
          Start Building
        </a>
        <a href="#" class="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white/10 backdrop-blur text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
          View Examples
        </a>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: `glassmorphism-hero`,
      name: 'Glass Hero Animated Scroll',
      code: `<!-- Glass Hero -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
  <!-- Background dengan gradient dan efek blur -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/30"></div>
  
  <!-- Blur shapes untuk efek glass -->
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob"></div>
    <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-900/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  <!-- Glass container -->
  <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Glass card -->
      <div class="backdrop-blur-xl bg-white/30 dark:bg-gray-800/40 rounded-2xl shadow-2xl border border-white/40 dark:border-gray-700/50 p-8 md:p-12">
        <div class="text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-white/50 dark:bg-gray-900/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span class="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Now Available</span>
          </div>

          <!-- Main heading -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Transform Your
            </span>
            <br>
            <span class="text-gray-900 dark:text-white">Digital Experience</span>
          </h1>

          <!-- Subheading -->
          <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Build modern, responsive web applications with cutting-edge technology and seamless user experiences. 
            Join thousands of developers already creating amazing things.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button class="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              Get Started Free
            </button>
            <button class="px-8 py-3.5 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-semibold rounded-xl border border-white/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300">
              <span class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z"/>
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">10K+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">99.9%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">50+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div class="animate-bounce">
      <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>

  <style>
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  </style>
</section>`,
      contributor: 'zoelabbb',
    },
    {
      id: 'hero-minimal-professional',
      name: 'Minimal & Profesional Hero',
      code: `<section class="relative bg-white dark:bg-gray-900 min-h-[90vh] flex items-center transition-colors duration-300">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 rounded-full px-4 py-2 mb-8">
        <span class="w-2 h-2 bg-lime-600 dark:bg-lime-500 rounded-full"></span>
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Version 3.0 is here</span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
        Build better products
        <br>
        <span class="text-lime-600 dark:text-lime-400">faster than ever</span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
        The complete platform for teams to design, develop, and deliver exceptional digital experiences.
        Everything you need from idea to production.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button class="px-8 py-3 bg-lime-600 dark:bg-lime-500 text-white font-medium rounded-lg hover:bg-lime-700 dark:hover:bg-lime-600 transition-colors duration-300 shadow-sm hover:shadow-md dark:shadow-gray-800/50">
          Start free trial
        </button>
        <button class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300 shadow-sm dark:shadow-gray-800/30">
          <span class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Watch demo
          </span>
        </button>
      </div>

      <!-- Preview Image -->
      <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm dark:shadow-gray-900/50">
        <div class="p-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
        <div class="p-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-4">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
            <div class="space-y-4">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
            </div>
            <div class="space-y-4">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Trusted by teams at</p>
        <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          <div class="text-gray-400 dark:text-gray-500 font-semibold">COMPANY</div>
          <div class="text-gray-400 dark:text-gray-500 font-semibold">STARTUP</div>
          <div class="text-gray-400 dark:text-gray-500 font-semibold">TECH CORP</div>
          <div class="text-gray-400 dark:text-gray-500 font-semibold">INNOVATE</div>
          <div class="text-gray-400 dark:text-gray-500 font-semibold">DIGITAL</div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'zoelabbb',
    }
  ],
};
