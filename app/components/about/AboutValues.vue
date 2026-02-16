<template>
  <section class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          Our Values
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-4">
          What <span class="text-primary">Drives</span> Us
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          The principles that guide every decision we make and every feature we build.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:shadow-soft transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <component :is="value.icon" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-lg font-bold text-navy-dark dark:text-white mb-2">{{ value.title }}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LightBulbIcon, ShieldCheckIcon, UserGroupIcon, EyeIcon } from '@heroicons/vue/24/outline'

const values = [
  {
    title: 'Innovation',
    icon: LightBulbIcon,
    description: 'We leverage NFC tagging, integrated apps, and real-time analytics to solve problems others accept as normal.',
  },
  {
    title: 'Reliability',
    icon: ShieldCheckIcon,
    description: 'Our platform is built for 99.9% uptime because your operations never stop.',
  },
  {
    title: 'Customer-First',
    icon: UserGroupIcon,
    description: 'Every feature starts with a real problem faced by dealership owners and their teams.',
  },
  {
    title: 'Transparency',
    icon: EyeIcon,
    description: 'From pricing to data practices, we believe in open, honest partnerships.',
  },
]
</script>
