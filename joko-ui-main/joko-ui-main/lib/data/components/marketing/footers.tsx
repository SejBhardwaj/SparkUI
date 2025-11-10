import { IconLayoutBottombar } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const footers: ComponentType = {
  slug: 'footers',
  name: 'Footers',
  icon: <IconLayoutBottombar stroke={1.5} />,
  description: 'Footer sections for website navigation',
  variants: [
    {
      id: 'footer-simple',
      name: 'Simple Footer',
      code: `<footer class="py-8 px-6 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p>© 2024 Your Company. All rights reserved.</p>
    <div class="flex gap-6">
      <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
      <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
    </div>
  </div>
</footer>`,
      contributor: 'rayasabari',
    },
    {
      id: 'footer-links',
      name: 'Links Footer',
      code: `<footer class="py-12 px-6 bg-gray-100 dark:bg-gray-900">
  <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Product</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Changelog</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Help Center</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Guides</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-gray-900 dark:text-white font-semibold mb-4">Legal</h3>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400">
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a></li>
        <li><a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</a></li>
      </ul>
    </div>
  </div>
  <div class="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
    <p>© 2024 Your Company. All rights reserved.</p>
  </div>
</footer>`,
      contributor: 'rayasabari',
    },
    {
      id: 'footer-social',
      name: 'Social Footer',
      code: `<footer class="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      <span class="font-bold text-gray-900 dark:text-white">JokoUI</span>
    </div>
    <div class="flex gap-4">
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-lime-600 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-lime-600 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-lime-600 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
    </div>
    <p class="text-gray-600 dark:text-gray-400 text-sm">© 2026 All rights reserved.</p>
  </div>
</footer>`,
      contributor: 'rayasabari',
    },
    {
      id: 'footer-newsletter',
      name: 'Newsletter Footer',
      code: `<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      
      <!-- Company Info -->
      <div class="lg:col-span-1">
        <div class="flex items-center space-x-3 mb-4">
          <!-- Logo Placeholder -->
          <div class="w-10 h-10 bg-gray-900 dark:bg-lime-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">SLO</span>
          </div>
          <span class="text-xl font-semibold text-gray-900 dark:text-white">JokoUI</span>
        </div>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          Membangun solusi digital yang transformatif untuk bisnis masa depan dengan teknologi terkini dan tim ahli.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
          Perusahaan
        </h3>
        <ul class="space-y-4">
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Karir
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Partner
            </a>
          </li>
        </ul>
      </div>

      <!-- Products -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
          Produk
        </h3>
        <ul class="space-y-4">
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Solusi Enterprise
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              API Platform
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Integrations
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact & Newsletter -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
          Newsletter
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Dapatkan update terbaru dan insight langsung ke inbox Anda.
        </p>
        
        <form class="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email Anda" 
              class="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-transparent transition-all duration-300 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <button 
            type="submit" 
            class="w-full bg-gray-900 dark:bg-lime-600 text-white px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-lime-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-lime-500"
          >
            Berlangganan
          </button>
        </form>
      </div>

    </div>

    <!-- Divider -->
    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <!-- Copyright -->
        <div class="text-center md:text-left">
          <p class="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2026 JokoUI. All rights reserved.
          </p>
        </div>

        <!-- Legal Links -->
        <div class="flex flex-wrap justify-center gap-6">
          <a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            Kebijakan Privasi
          </a>
          <a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            Syarat Layanan
          </a>
          <a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            Pengaturan Cookies
          </a>
          <a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            Sitemap
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>`,
      contributor: 'zoelabbb',
    }
  ],
};
