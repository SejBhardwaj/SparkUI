import { IconLoader3 } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const skeleton: ComponentType = {
  slug: 'skeleton',
  name: 'Skeleton',
  icon: <IconLoader3 stroke={1.5} />,
  description: 'Ghostly loading placeholders for content',
  variants: [
    {
      id: 'skeleton-basic',
      name: 'Basic Shapes',
      code: `<div class="flex flex-col gap-4 w-full max-w-sm">
  <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-48 animate-pulse"></div>
  <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full animate-pulse"></div>
  <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
</div>`,
      contributor: 'faishalmhmd',
    },
    {
      id: 'skeleton-avatar',
      name: 'Profile Skeleton',
      code: `<div class="flex items-center gap-4 w-full max-w-sm">
  <div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
  <div class="flex-1 space-y-2">
    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
    <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2 animate-pulse"></div>
  </div>
</div>`,
      contributor: 'faishalmhmd',
    },
    {
      id: 'skeleton-card',
      name: 'Card Skeleton',
      code: `<div class="w-full max-w-sm glass-card p-6 space-y-4">
  <div class="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
  <div class="space-y-2">
    <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3 animate-pulse"></div>
  </div>
  <div class="pt-4 flex justify-between">
    <div class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg w-24 animate-pulse"></div>
    <div class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg w-24 animate-pulse"></div>
  </div>
</div>`,
      contributor: 'faishalmhmd',
    },
    {
      id: 'skeleton-list',
      name: 'List Skeleton',
      code: `<div class="w-full max-w-sm space-y-6">
  <div class="flex items-start gap-3">
    <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm mt-1 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
      <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm mt-1 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
      <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm mt-1 animate-pulse"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
      <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5 animate-pulse"></div>
    </div>
  </div>
</div>`,
      contributor: 'faishalmhmd',
    },
    {
      id: 'skeleton-profile',
      name: 'Detailed Profile Skeleton',
      code: `<!-- Skeleton Profile -->
<div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
  <!-- Profile header -->
  <div class="flex items-center mb-6">
    <div class="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 mr-4"></div>
    <div class="flex-1">
      <div class="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
  
  <!-- Stats -->
  <div class="grid grid-cols-3 gap-4 mb-6">
    <div class="text-center">
      <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-1"></div>
      <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
    </div>
    <div class="text-center">
      <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-1"></div>
      <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
    </div>
    <div class="text-center">
      <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-1"></div>
      <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
  
  <!-- Bio -->
  <div class="space-y-2 mb-6">
    <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
    <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
    <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
    <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
  </div>
  
  <!-- Skills -->
  <div class="mb-6">
    <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-3"></div>
    <div class="flex flex-wrap gap-2">
      <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
      <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
      <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-14"></div>
      <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-18"></div>
    </div>
  </div>
  
  <!-- Button skeleton -->
  <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
</div>`,
      contributor: 'zoelabbb',
    },
    {
      id: `skeleton-table`,
      name: 'Table Skeleton',
      code: `<!-- Skeleton Table -->
<div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse">
  <!-- Table header -->
  <div class="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
    <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
  </div>
  
  <!-- Table content -->
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <!-- Row 1 -->
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 mr-3"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
            <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
          </div>
        </div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
          <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
        </div>
        <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>
    
    <!-- Row 2 -->
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 mr-3"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28"></div>
            <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
          </div>
        </div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
          <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
        </div>
        <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>
    
    <!-- Row 3 -->
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 mr-3"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
            <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-28"></div>
          </div>
        </div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
          <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-12"></div>
        </div>
        <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  </div>
  
  <!-- Table footer -->
  <div class="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
      <div class="flex space-x-2">
        <div class="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div class="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div class="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'zoelabbb',
    },
    {
      id: `skeleton-form`,
      name: 'Form Skeleton',
      code: `<!-- Skeleton Form -->
<div class="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
  <!-- Form header -->
  <div class="mb-8">
    <div class="h-7 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
    <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
  
  <!-- Form fields -->
  <div class="space-y-6">
    <!-- Two column field -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
        <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
      <div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
        <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
    
    <!-- Single field -->
    <div>
      <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
      <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
    
    <!-- Textarea field -->
    <div>
      <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
      <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
    
    <!-- Checkbox -->
    <div class="flex items-center">
      <div class="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded mr-2"></div>
      <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
    
    <!-- Radio buttons -->
    <div>
      <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
      <div class="space-y-2">
        <div class="flex items-center">
          <div class="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full mr-2"></div>
          <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
        <div class="flex items-center">
          <div class="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full mr-2"></div>
          <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Form actions -->
  <div class="flex justify-end space-x-4 pt-8">
    <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
    <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
  </div>
</div>`,
      contributor: 'zoelabbb',
    },
    {
      id: `skeleton-loading-screen`,
      name: 'Loading Screen Skeleton',
      code: `<!-- Skeleton Loading Screen -->
<div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col animate-pulse">
  <!-- Header -->
  <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded mr-3"></div>
        <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="hidden md:flex space-x-4">
          <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
          <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
          <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
        </div>
        <div class="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  </div>
  
  <!-- Main content -->
  <div class="flex-1 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Page title -->
      <div class="mb-8">
        <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
      
      <!-- Content grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div class="space-y-4">
              <div class="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div class="space-y-2">
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main content -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div class="space-y-6">
              <!-- Chart skeleton -->
              <div class="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
              
              <!-- Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div class="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div class="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div class="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
              
              <!-- Table -->
              <div class="space-y-3">
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div class="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'zoelabbb',
    }
  ],
};
