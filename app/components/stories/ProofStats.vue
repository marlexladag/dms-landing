<template>
  <section class="bg-white dark:bg-navy-dark py-20 border-t border-slate-200 dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Proven Results from Real Dealers</h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg">
          Don't just take our word for it. Our NFC-driven ecosystem delivers measurable operational improvements across the board.
        </p>
      </div>

      <!-- Stat Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.title"
          class="relative group bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300"
        >
          <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <component :is="stat.bgIcon" class="w-16 h-16 text-primary" />
          </div>
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
            <component :is="stat.icon" class="w-6 h-6 text-primary" />
          </div>
          <div class="flex items-baseline gap-1 mb-2">
            <span class="text-4xl font-bold text-slate-900 dark:text-white">{{ stat.value }}</span>
            <span v-if="stat.suffix" class="text-2xl font-bold text-accent">{{ stat.suffix }}</span>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">{{ stat.title }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{{ stat.description }}</p>
        </div>
      </div>

      <!-- Case Study Teaser -->
      <div class="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <!-- Image Placeholder -->
        <div class="w-full md:w-1/3 h-48 md:h-full min-h-[160px] relative rounded-xl overflow-hidden shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-navy-dark/60" />
          <div class="absolute inset-0 flex items-center justify-center">
            <BuildingStorefrontIcon class="w-16 h-16 text-white/30" />
          </div>
          <div class="absolute inset-0 bg-black/20" />
        </div>

        <div class="flex-1 text-center md:text-left">
          <div class="inline-block px-3 py-1 mb-3 text-xs font-semibold text-accent uppercase bg-accent/10 rounded-full">Case Study</div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
            "iDeal DMS saved us Php 85k in lost case deposits in the first year alone."
          </h3>
          <p class="text-slate-600 dark:text-slate-300 mb-4 text-sm">
            — Operations Director, Midwest Beverage Distributors
          </p>
          <a href="#" class="text-accent font-medium hover:text-accent-dark inline-flex items-center gap-1 transition-colors">
            Read the full story <ArrowRightIcon class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ShieldCheckIcon,
  ViewfinderCircleIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
  BoltIcon,
  LockClosedIcon,
  ArrowRightIcon,
  BuildingStorefrontIcon,
} from '@heroicons/vue/24/solid'

const stats = [
  {
    value: '99.9',
    suffix: '%',
    title: 'Inventory Accuracy',
    description: 'Eliminate human error with automated NFC scanning. Know exactly what\'s on the truck and what\'s in the warehouse.',
    icon: ViewfinderCircleIcon,
    bgIcon: ShieldCheckIcon,
  },
  {
    value: '30',
    suffix: '%',
    title: 'Faster Sales Cycles',
    description: 'Reduce check-in/check-out times. Drivers spend less time counting and more time delivering.',
    icon: ArrowTrendingUpIcon,
    bgIcon: BoltIcon,
  },
  {
    value: 'Zero',
    suffix: '',
    title: 'Unaccounted Empties',
    description: 'Full lifecycle tracking means you stop losing expensive case, pallets, and crates. Accountability is built-in.',
    icon: CheckBadgeIcon,
    bgIcon: LockClosedIcon,
  },
]
</script>
