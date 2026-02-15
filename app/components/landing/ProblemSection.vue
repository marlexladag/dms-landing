<template>
  <section class="py-24 bg-background-light dark:bg-background-dark relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-danger font-bold tracking-wider uppercase text-sm mb-2 block">The Problem</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Where are you
          <span class="relative inline-block">
            bleeding money?
            <span class="absolute bottom-1 left-0 w-full h-3 bg-danger/20 -rotate-1 -z-10 rounded-sm" />
          </span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Traditional methods are slow, inaccurate, and costly. Stop relying on paper trails and guesswork.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="bg-white dark:bg-white/5 p-8 rounded-xl shadow-soft border border-slate-100 dark:border-white/10 group hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-danger/20 transition-colors">
            <ArchiveBoxIcon class="w-8 h-8 text-danger" />
          </div>
          <div class="flex items-center gap-3 mb-4">
            <XMarkIcon class="w-5 h-5 text-danger" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Inventory Variance</h3>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Losing 2-5% of cases annually adds up to thousands in lost revenue. Manual counts simply can't keep up with warehouse velocity.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white dark:bg-white/5 p-8 rounded-xl shadow-soft border border-slate-100 dark:border-white/10 group hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-danger/20 transition-colors">
            <BanknotesIcon class="w-8 h-8 text-danger" />
          </div>
          <div class="flex items-center gap-3 mb-4">
            <XMarkIcon class="w-5 h-5 text-danger" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Lost Assets</h3>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Tap handles, pallets, and CO2 tanks vanish in the field. Without tracking, these "small" losses become a massive bottom-line drain.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white dark:bg-white/5 p-8 rounded-xl shadow-soft border border-slate-100 dark:border-white/10 group hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-danger/20 transition-colors">
            <EyeSlashIcon class="w-8 h-8 text-danger" />
          </div>
          <div class="flex items-center gap-3 mb-4">
            <XMarkIcon class="w-5 h-5 text-danger" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Blind Field Ops</h3>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Drivers and sales reps operating in silos creates friction. You don't know what's happening until it's too late to fix it.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArchiveBoxIcon,
  XMarkIcon,
  BanknotesIcon,
  EyeSlashIcon,
} from '@heroicons/vue/24/solid'
</script>
