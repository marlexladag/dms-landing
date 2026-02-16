<template>
  <section class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text Content -->
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Our Mission
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-6">
            Empowering Dealerships with <span class="text-primary">Smart Technology</span>
          </h2>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            The beverage distribution industry has long relied on manual processes, paper trails, and disconnected systems. We saw an opportunity to change that.
          </p>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            DMS was born from a simple idea: give dealership owners real-time visibility into their operations — from warehouse inventory to field sales — through one unified platform.
          </p>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
            Today, we help businesses across the region reduce losses, improve efficiency, and scale with confidence using NFC-powered tracking, smart analytics, and seamless ERP integration.
          </p>
        </div>

        <!-- Visual -->
        <div class="relative">
          <div class="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-2xl p-8 lg:p-12">
            <div class="grid grid-cols-2 gap-6">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <div class="text-3xl md:text-4xl font-extrabold text-primary mb-1">{{ stat.value }}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400 font-medium">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '1', label: 'Unified Platform' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '3x', label: 'Efficiency Gain' },
  { value: '24/7', label: 'Support Available' },
]
</script>
