<template>
  <header class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div class="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Data-Driven Efficiency
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-6 leading-tight">
        Stop Leaking Revenue <br />
        in Your <span class="text-primary">Supply Chain</span>
      </h1>

      <p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Every unaccounted bottle and lost case impacts your bottom line. iDeal DMS uses NFC tagging and an integrated web and mobile platform to close the loop on inventory loss.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <div class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-dark border border-slate-100 dark:border-white/10 shadow-sm">
          <ClockIcon class="w-6 h-6 text-primary shrink-0" />
          <div class="text-left">
            <h3 class="font-semibold text-slate-900 dark:text-white">Real-Time Tracking</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">Live inventory visibility</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-dark border border-slate-100 dark:border-white/10 shadow-sm">
          <ChartBarIcon class="w-6 h-6 text-primary shrink-0" />
          <div class="text-left">
            <h3 class="font-semibold text-slate-900 dark:text-white">Automated Audits</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">Zero manual counting</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ClockIcon, ChartBarIcon } from '@heroicons/vue/24/solid'
</script>
