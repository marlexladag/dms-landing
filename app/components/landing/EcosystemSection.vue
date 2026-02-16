<template>
  <section class="py-24 bg-slate-900 dark:bg-[#091a2a] relative overflow-hidden">
    <!-- Abstract BG Pattern -->
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#053B61 1px, transparent 1px); background-size: 32px 32px;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">The Solution</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6">
          ONE PLATFORM. <span class="text-accent">TOTAL CONTROL.</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Connect every aspect of your operation into a single source of truth.
        </p>
      </div>

      <!-- Hub -->
      <div class="flex flex-col items-center">
        <div class="relative z-10">
          <div class="w-36 h-36 md:w-44 md:h-44 rounded-full bg-slate-800 border-4 border-accent shadow-glow-accent flex items-center justify-center pulse-ring">
            <div class="text-white font-bold text-xl md:text-2xl tracking-tighter">iDeal<span class="text-accent">Core</span></div>
          </div>
        </div>
        <p class="text-slate-400 text-sm font-medium mt-4 tracking-wide">Your Single Source of Truth</p>
      </div>

      <!-- Connecting Lines (Desktop) -->
      <div class="hidden lg:flex justify-center -mt-1">
        <div class="flex flex-col items-center">
          <div class="w-px h-12 ecosystem-line" />
          <div class="relative w-[700px] h-px">
            <div class="absolute inset-0 bg-accent/30" />
            <div class="absolute left-0 -translate-x-px top-0 w-px h-10 ecosystem-line" />
            <div class="absolute left-1/2 -translate-x-px top-0 w-px h-10 ecosystem-line" />
            <div class="absolute right-0 -translate-x-px top-0 w-px h-10 ecosystem-line" />
          </div>
        </div>
      </div>

      <!-- Connecting Line (Mobile/Tablet) -->
      <div class="lg:hidden flex justify-center -mt-1 mb-2">
        <div class="w-px h-8 ecosystem-line" />
      </div>

      <!-- Spoke Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mt-10">
        <NuxtLink
          v-for="node in nodes"
          :key="node.title"
          :to="node.link"
          class="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-accent/40 hover:shadow-glow-accent transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start gap-4">
            <div :class="[node.iconBg, 'w-12 h-12 rounded-xl flex items-center justify-center shrink-0']">
              <component :is="node.icon" :class="[node.iconColor, 'w-6 h-6']" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-white text-lg mb-1.5 group-hover:text-accent transition-colors">{{ node.title }}</h4>
              <p class="text-sm text-slate-400 leading-relaxed">{{ node.description }}</p>
            </div>
          </div>

          <!-- Features list -->
          <div class="mt-4 pt-4 border-t border-slate-700/50">
            <div v-for="feature in node.features" :key="feature" class="flex items-center gap-2 py-1">
              <CheckCircleIcon class="w-4 h-4 text-accent shrink-0" />
              <span class="text-sm text-slate-300">{{ feature }}</span>
            </div>
          </div>

          <!-- Arrow indicator -->
          <div class="flex items-center gap-1 mt-4 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more
            <ArrowRightIcon class="w-3.5 h-3.5" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/solid'

const nodes = [
  {
    title: 'Warehouse Ops',
    description: 'NFC outlet registration, real-time inventory monitoring, and warehouse management.',
    icon: BuildingStorefrontIcon,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    link: '/platform#features',
    features: [
      'NFC-powered outlet tagging',
      'Pallet & empties management',
      'Automated stock alerts',
    ],
  },
  {
    title: 'Field Sales',
    description: 'NFC-powered field sales, consumer ordering, and outlet self-service.',
    icon: DevicePhoneMobileIcon,
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    link: '/platform#features',
    features: [
      'Mobile POS & NFC booking',
      'Consumer direct ordering',
      'Outlet self-service portal',
    ],
  },
  {
    title: 'Management',
    description: 'BI dashboards, supplier monitoring, and total operational oversight.',
    icon: ChartBarIcon,
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    link: '/platform#features',
    features: [
      'Revenue & performance analytics',
      'Supplier distribution monitoring',
      'Partner & outlet oversight',
    ],
  },
]
</script>
