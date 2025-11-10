import { IconUsers } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const teams: ComponentType = {
  slug: 'teams',
  name: 'Team Sections',
  icon: <IconUsers stroke={1.5} />,
  description: 'Team section examples to introduce your team to new and existing customers.',
  variants: [
    {
      id: 'team-simple-grid',
      name: 'Simple Grid with Avatars',
      code: `<section class="py-12 sm:py-16 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Meet our team</h2>
      <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        We're a dynamic group of individuals who are passionate about what we do.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
      <div class="text-center">
        <img class="mx-auto h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member" />
        <h3 class="mt-6 text-lg font-medium text-gray-900 dark:text-white">Budi Santoso</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Co-Founder / CTO</p>
      </div>
      <div class="text-center">
        <img class="mx-auto h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member" />
        <h3 class="mt-6 text-lg font-medium text-gray-900 dark:text-white">Siti Aminah</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Business Relations</p>
      </div>
      <div class="text-center">
        <img class="mx-auto h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member" />
        <h3 class="mt-6 text-lg font-medium text-gray-900 dark:text-white">Eko Prasetyo</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Front-end Developer</p>
      </div>
      <div class="text-center">
        <img class="mx-auto h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member" />
        <h3 class="mt-6 text-lg font-medium text-gray-900 dark:text-white">Dewi Lestari</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Designer</p>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'team-cards-large',
      name: 'Large Cards with Socials',
      code: `<section class="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Leadership</h2>
      <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Dedicated professionals leading the way in innovation.
      </p>
    </div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li class="col-span-1 flex flex-col divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-gray-900 text-center shadow">
        <div class="flex flex-1 flex-col p-6 sm:p-8">
          <img class="mx-auto h-32 w-32 shrink-0 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Rizky Pratama" />
          <h3 class="mt-6 text-sm font-medium text-gray-900 dark:text-white">Rizky Pratama</h3>
          <dl class="mt-1 flex grow flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-sm text-gray-500 dark:text-gray-400">Co-Founder / CEO</dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-3">
              <span class="inline-flex items-center rounded-full bg-lime-50 dark:bg-lime-900/30 px-2 py-1 text-xs font-medium text-lime-700 dark:text-lime-300">Admin</span>
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
            <div class="flex w-0 flex-1">
              <a href="#" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                 Connect
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a href="#" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                 Email
              </a>
            </div>
          </div>
        </div>
      </li>
      <li class="col-span-1 flex flex-col divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-gray-900 text-center shadow">
        <div class="flex flex-1 flex-col p-6 sm:p-8">
          <img class="mx-auto h-32 w-32 shrink-0 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Nadia Putri" />
          <h3 class="mt-6 text-sm font-medium text-gray-900 dark:text-white">Nadia Putri</h3>
          <dl class="mt-1 flex grow flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-sm text-gray-500 dark:text-gray-400">Co-Founder / CTO</dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-3">
              <span class="inline-flex items-center rounded-full bg-lime-50 dark:bg-lime-900/30 px-2 py-1 text-xs font-medium text-lime-700 dark:text-lime-300">Admin</span>
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
            <div class="flex w-0 flex-1">
              <a href="#" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                 Connect
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a href="#" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                 Email
              </a>
            </div>
          </div>
        </div>
      </li>
      <li class="col-span-1 flex flex-col divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-gray-900 text-center shadow">
        <div class="flex flex-1 flex-col p-6 sm:p-8">
          <img class="mx-auto h-32 w-32 shrink-0 rounded-full object-cover" src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Arif Hidayat" />
          <h3 class="mt-6 text-sm font-medium text-gray-900 dark:text-white">Arif Hidayat</h3>
          <dl class="mt-1 flex grow flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-sm text-gray-500 dark:text-gray-400">Business Relations</dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-3">
              <span class="inline-flex items-center rounded-full bg-lime-50 dark:bg-lime-900/30 px-2 py-1 text-xs font-medium text-lime-700 dark:text-lime-300">Admin</span>
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
            <div class="flex w-0 flex-1">
              <a href="#" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                 Connect
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a href="#" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                 Email
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'team-small-avatars',
      name: 'Small Avatars with Description',
      code: `<section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-20 lg:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Meet our leadership</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          We're a small team with big dreams. We are passionate about what we do and we are here to make a difference.
        </p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-8 sm:gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:col-span-2">
        <li class="flex items-start gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Maya Sari</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Co-Founder / CEO</p>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Led the company from seed to IPO. Passionate about building great teams.</p>
          </div>
        </li>
        <li class="flex items-start gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Dimas Aditya</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Co-Founder / CTO</p>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Technical visionary with 15+ years of experience in distributed systems.</p>
          </div>
        </li>
        <li class="flex items-start gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Rina Wati</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Business Relations</p>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Connecting people and opportunities. Expert in strategic partnerships.</p>
          </div>
        </li>
        <li class="flex items-start gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Ahmad Fauzi</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Front-end Developer</p>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Crafting beautiful user interfaces with attention to detail and performance.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'team-grid-bordered',
      name: 'Grid with Borders',
      code: `<section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Meet the Crew</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
        We are a distributed team of engineers, designers, and thinkers.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 hover:border-lime-600/50 dark:hover:border-lime-500/50 transition-colors">
        <div class="flex items-center gap-x-4">
          <img class="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-800" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Bagus Hermawan</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Co-Founder / CEO</p>
          </div>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
          "Building the future of web development, one component at a time."
        </p>
      </div>
      <div class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 hover:border-lime-600/50 dark:hover:border-lime-500/50 transition-colors">
        <div class="flex items-center gap-x-4">
          <img class="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Indra Wijaya</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Co-Founder / CTO</p>
          </div>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
          "Technological innovation is at the heart of everything we do."
        </p>
      </div>
      <div class="group relative rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 hover:border-lime-600/50 dark:hover:border-lime-500/50 transition-colors">
        <div class="flex items-center gap-x-4">
          <img class="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-800" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Lina Marlina</h3>
            <p class="text-sm font-semibold leading-6 text-lime-600 dark:text-lime-500">Business Relations</p>
          </div>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
          "Fostering relationships that drive mutual growth and success."
        </p>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'team-list-horizontal',
      name: 'Horizontal List with Actions',
      code: `<section class="py-12 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="max-w-2xl mx-auto lg:mx-0 mb-12">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Team</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
        Accomplished individuals building the next generation of software.
      </p>
    </div>
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li class="flex flex-col sm:flex-row gap-x-6 py-6 sm:py-10 items-start sm:items-center justify-between">
        <div class="flex gap-x-4 items-center mb-4 sm:mb-0">
          <img class="h-16 w-16 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Putri Ayu</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">putri.ayu@example.com</p>
          </div>
        </div>
        <div class="w-full sm:w-auto flex flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900 dark:text-white">Co-Founder / CEO</p>
          <div class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p class="text-xs leading-5 text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <button class="mt-4 sm:mt-0 rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
          View Profile
        </button>
      </li>
      <li class="flex flex-col sm:flex-row gap-x-6 py-6 sm:py-10 items-start sm:items-center justify-between">
        <div class="flex gap-x-4 items-center mb-4 sm:mb-0">
          <img class="h-16 w-16 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Hendra Gunawan</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">hendra.gunawan@example.com</p>
          </div>
        </div>
        <div class="w-full sm:w-auto flex flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900 dark:text-white">Co-Founder / CTO</p>
          <div class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p class="text-xs leading-5 text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <button class="mt-4 sm:mt-0 rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
          View Profile
        </button>
      </li>
      <li class="flex flex-col sm:flex-row gap-x-6 py-6 sm:py-10 items-start sm:items-center justify-between">
        <div class="flex gap-x-4 items-center mb-4 sm:mb-0">
          <img class="h-16 w-16 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Yudi Kurniawan</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">yudi.kurniawan@example.com</p>
          </div>
        </div>
        <div class="w-full sm:w-auto flex flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900 dark:text-white">Business Relations</p>
          <div class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-gray-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
            </div>
            <p class="text-xs leading-5 text-gray-500 dark:text-gray-400">Offline</p>
          </div>
        </div>
        <button class="mt-4 sm:mt-0 rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
          View Profile
        </button>
      </li>
    </ul>
  </div>
</section>`,
      contributor: 'rayasabari',
    }
  ],
};
