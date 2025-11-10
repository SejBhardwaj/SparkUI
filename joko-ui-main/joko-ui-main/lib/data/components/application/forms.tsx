import { IconForms } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const forms: ComponentType = {
  slug: 'forms',
  name: 'Forms',
  icon: <IconForms stroke={1.5} />,
  description: 'Form input components with modern styling',
  variants: [
    {
      id: 'input-basic',
      name: 'Basic Input',
      code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
  <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-lime-800 dark:placeholder-gray-400"/>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'input-icon',
      name: 'Input with Icon',
      code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search</label>
  <div class="relative">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
    <input type="text" placeholder="Search..." class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"/>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'input-floating',
      name: 'Floating Label Input',
      code: `<div class="relative max-w-sm">
  <input type="text" id="floating" placeholder=" " class="peer w-full px-4 py-3 pt-6 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white"/>
  <label for="floating" class="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-lime-600 dark:peer-focus:text-lime-400 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">Username</label>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'select-basic',
      name: 'Select Input',
      code: `<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
  <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all appearance-none bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white cursor-pointer">
    <option>Select a country</option>
    <option>Indonesia</option>
    <option>Malaysia</option>
    <option>Singapore</option>
  </select>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: `login-form`,
      name: 'Login Form',
      code: `<!-- Login Form -->
<div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
  <div class="max-w-md w-full">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-12 h-12 bg-lime-100 dark:bg-lime-900/40 rounded-xl mb-4">
          <svg class="w-6 h-6 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Sign in to your account</p>
      </div>

      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="example@jokoui.web.id"
          >
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <a href="#" class="text-sm font-medium text-lime-600 dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-300">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="••••••••"
          >
        </div>

        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 text-lime-600 dark:text-lime-400 focus:ring-lime-500 dark:focus:ring-lime-400 border-gray-300 dark:border-gray-600 rounded"
          >
          <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-lime-600 dark:bg-lime-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-lime-700 dark:hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 dark:focus:ring-offset-gray-800 transition-colors"
        >
          Sign in
        </button>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            </svg>
            Google
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-3.862c0-1.881-2.002-1.722-2.002 0v3.862h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </svg>
            LinkedIn
          </button>
        </div>
      </div>

      <p class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?
        <a href="#" class="font-medium text-lime-600 dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-300">
          Sign up
        </a>
      </p>
    </div>
  </div>
</div>`,
      contributor: 'zoelabbb',
    },
    {
      id: `contact-form`,
      name: 'Contact Form',
      code: `<!-- Contact Form -->
<div class="bg-white dark:bg-gray-900 py-12 px-4">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Get in touch</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Have questions? We'd love to hear from you.
      </p>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
              placeholder="Mang Ucup"
            >
          </div>

          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
              placeholder="Soetomo"
            >
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
            placeholder="m.ucup_soetomo@example.com"
          >
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject
          </label>
          <select
            id="subject"
            class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
          >
            <option value="" disabled selected>Select a subject</option>
            <option value="support">Technical Support</option>
            <option value="sales">Sales Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <div class="flex items-center">
          <input
            id="privacy"
            type="checkbox"
            class="h-4 w-4 text-lime-600 dark:text-lime-400 focus:ring-lime-500 dark:focus:ring-lime-400 border-gray-300 dark:border-gray-600 rounded"
          >
          <label for="privacy" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            I agree to the
            <a href="#" class="text-lime-600 dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-300">
              Privacy Policy
            </a>
          </label>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            class="flex-1 bg-lime-600 dark:bg-lime-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-lime-700 dark:hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 dark:focus:ring-offset-gray-800 transition-colors"
          >
            Send message
          </button>
          <button
            type="button"
            class="flex-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`,
      contributor: 'zoelabbb',
    },
    {
      id: `settings-form`,
      name: 'Settings Form',
      code: `<!-- Settings Form -->
<div class="bg-white dark:bg-gray-900 py-8 px-4">
  <div class="max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Sidebar Navigation -->
      <div class="lg:col-span-1">
        <nav class="space-y-1">
          <a href="#" class="bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <svg class="text-lime-600 dark:text-lime-400 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Profile
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <svg class="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Notifications
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            <svg class="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Security
          </a>
        </nav>
      </div>

      <!-- Main Form -->
      <div class="lg:col-span-2">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6">Profile Information</h2>
          
          <form class="space-y-6">
            <!-- Profile Picture -->
            <div class="flex items-center space-x-6">
              <div class="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <span class="text-2xl font-bold text-gray-600 dark:text-gray-400">JO</span>
              </div>
              <div>
                <button type="button" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  Change photo
                </button>
                <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size 2MB</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  value="Jowko"
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                >
              </div>

              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  value="Oui"
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                >
              </div>
            </div>

            <div>
              <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows="3"
                class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white resize-none"
              >Frontend developer passionate about creating beautiful user experiences.</textarea>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Brief description for your profile.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="timezone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Timezone
                </label>
                <select
                  id="timezone"
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                >
                  <option value="WIB">(GMT+7) Western Indonesia Time</option>
                  <option value="WITA">(GMT+8) Central Indonesia Time</option>
                  <option value="WIT">(GMT+9) Eastern Indonesia Time</option>
                </select>
              </div>

              <div>
                <label for="language" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Language
                </label>
                <select
                  id="language"
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                >
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en" selected>English</option>
                </select>
              </div>
            </div>

            <!-- Toggle Settings -->
            <div class="space-y-4 pt-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">Email notifications</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Receive email updates</p>
                </div>
                <button type="button" class="bg-lime-600 dark:bg-lime-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:ring-offset-2" role="switch" aria-checked="true">
                  <span class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">Public profile</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Anyone can view your profile</p>
                </div>
                <button type="button" class="bg-gray-300 dark:bg-gray-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-2" role="switch" aria-checked="false">
                  <span class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div class="flex justify-end pt-6">
              <button
                type="button"
                class="mr-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2.5 px-6 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-lime-600 dark:bg-lime-500 text-white py-2.5 px-6 rounded-lg text-sm font-medium hover:bg-lime-700 dark:hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 dark:focus:ring-offset-gray-800 transition-colors"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'zoelabbb',
    }
  ],
};
