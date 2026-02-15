<template>
  <section class="py-20 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Text Content (Left) -->
        <div class="order-2 lg:order-1">
          <div class="mb-8">
            <span class="text-primary font-bold tracking-wider uppercase text-sm">Strategic Analytics & Reporting</span>
            <h2 class="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mt-2 mb-4">Management &amp; Analytics</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Drive performance with target management and item reconciliation. Access comprehensive reports and data analytics for informed decision-making.
            </p>
          </div>

          <div class="space-y-4">
            <!-- App Card: iDeal Partner -->
            <div
              class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'partner'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <UserGroupIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Partner</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor your entire business operation from anywhere.</p>
              </div>
            </div>

            <!-- App Card: iDeal Direct -->
            <div class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start">
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <TruckIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Direct</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Drive consumer engagement through targeted marketing and loyalty programs.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Content (Right) — Dashboard Browser Mockup -->
        <div class="order-1 lg:order-2">
          <div class="relative bg-navy-dark rounded-xl shadow-2xl p-2 border border-slate-700">
            <!-- Browser Header -->
            <div class="h-8 bg-slate-800 rounded-t-lg flex items-center px-4 gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500" />
              <div class="w-3 h-3 rounded-full bg-yellow-500" />
              <div class="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <!-- Dashboard Content -->
            <div class="relative h-[300px] lg:h-[400px] bg-slate-900 overflow-hidden">
              <!-- Default dashboard UI -->
              <div class="absolute inset-0 p-6 flex flex-col justify-center transition-opacity duration-500" :class="hoveredApp === 'partner' ? 'opacity-0' : 'opacity-100'">
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="bg-slate-800/80 backdrop-blur p-4 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-xs mb-1">Monthly Revenue</div>
                    <div class="text-primary text-xl font-bold font-mono">$842,000</div>
                  </div>
                  <div class="bg-slate-800/80 backdrop-blur p-4 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-xs mb-1">Active Partners</div>
                    <div class="text-white text-xl font-bold font-mono">1,204</div>
                  </div>
                </div>
                <!-- Fake Chart Bars -->
                <div class="bg-slate-800/80 backdrop-blur p-4 rounded-lg border border-slate-700 h-32 flex items-end justify-between px-2 pb-2 gap-2">
                  <div class="w-full bg-slate-700 rounded-t h-[40%] hover:bg-primary transition-colors" />
                  <div class="w-full bg-slate-700 rounded-t h-[60%] hover:bg-primary transition-colors" />
                  <div class="w-full bg-primary rounded-t h-[85%] shadow-[0_0_15px_rgba(5,59,97,0.5)]" />
                  <div class="w-full bg-slate-700 rounded-t h-[55%] hover:bg-primary transition-colors" />
                  <div class="w-full bg-slate-700 rounded-t h-[70%] hover:bg-primary transition-colors" />
                </div>
              </div>
              <!-- App preview image -->
              <img
                src="/images/partner.png"
                alt="iDeal Partner Application Preview"
                class="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500"
                :class="hoveredApp === 'partner' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserGroupIcon, TruckIcon } from '@heroicons/vue/24/solid'

const hoveredApp = ref<string | null>(null)
</script>
