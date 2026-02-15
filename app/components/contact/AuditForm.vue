<template>
  <div class="bg-white dark:bg-navy-dark rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 dark:border-white/10">
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Optimize Your Dealership</h1>
      <p class="text-slate-500 dark:text-slate-400 text-lg">
        Get a free audit of your current beverage logistics. See how our NFC &amp; IoT solutions can digitize your fleet and save you time.
      </p>
    </div>

    <form class="space-y-6" @submit.prevent>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name Field -->
        <div class="space-y-1">
          <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon class="w-4 h-4 text-slate-400" />
            </div>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
            />
          </div>
        </div>

        <!-- Phone Field -->
        <div class="space-y-1">
          <label for="phone" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PhoneIcon class="w-4 h-4 text-slate-400" />
            </div>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+63 912 345 6789"
              class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
            />
          </div>
        </div>
      </div>

      <!-- Dealership Name -->
      <div class="space-y-1">
        <label for="dealership" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Dealership / Company Name</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BuildingOfficeIcon class="w-4 h-4 text-slate-400" />
          </div>
          <input
            id="dealership"
            type="text"
            name="dealership"
            placeholder="Metro Beverage Distribution Inc."
            class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
          />
        </div>
      </div>

      <!-- Fleet Size Dropdown -->
      <div class="space-y-1">
        <label for="trucks" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Number of Routes</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <TruckIcon class="w-4 h-4 text-slate-400" />
          </div>
          <select
            id="trucks"
            name="trucks"
            class="block w-full pl-10 pr-10 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors appearance-none"
          >
            <option value="" disabled selected>Select number of routes...</option>
            <option value="1-10">1-10 Routes</option>
            <option value="11-50">11-50 Routes</option>
            <option value="50+">50+ Routes</option>
          </select>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDownIcon class="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="pt-4">
        <button
          type="submit"
          class="w-full flex justify-center py-4 px-4 rounded-lg text-sm font-bold text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all shadow-lg shadow-accent/30"
        >
          Schedule Free Audit
        </button>
        <p class="mt-4 text-xs text-center text-slate-400 dark:text-slate-500">
          No credit card required. Your data is secure.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  UserIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  TruckIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/solid'
</script>
