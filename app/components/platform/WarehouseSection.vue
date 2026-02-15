<template>
  <section id="features" class="py-20 lg:py-32 relative">
    <!-- Connecting center line (desktop only) -->
    <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block -z-10" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Text Content (Left) -->
        <div class="order-2 lg:order-1">
          <div class="mb-8">
            <span class="text-primary font-bold tracking-wider uppercase text-sm">Inventory & Warehouse Precision</span>
            <h2 class="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mt-2 mb-4">Warehouse &amp; Logistics</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Monitor real-time inventory levels for products and manage empties and pallets. Track stock movements, audits, and product aging to reduce waste.
            </p>
          </div>

          <div class="space-y-4">
            <!-- App Card: iDeal Ops -->
            <div
              class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'ops'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <ArchiveBoxIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Ops</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Fast and accurate NFC outlet tagging and registration.</p>
              </div>
            </div>

            <!-- App Card: iDeal Stocks -->
            <div class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start">
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <ChartBarIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Stocks</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time warehouse monitoring, inventory level detection, and pallet management.</p>
              </div>
            </div>

            <!-- App Card: iDeal Connect -->
            <div class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start">
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <ServerStackIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Connect</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor and ensure field adherence to standardized supplier processes.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Content (Right) -->
        <div class="order-1 lg:order-2 relative">
          <div class="absolute -right-10 -top-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-white/10 p-2">
            <div class="relative rounded-xl w-full h-[320px] bg-gradient-to-br from-amber-100 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
              <!-- Default placeholder -->
              <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-500" :class="hoveredApp === 'ops' ? 'opacity-0' : 'opacity-100'">
                <div class="text-center text-slate-400 dark:text-slate-500">
                  <ArchiveBoxIcon class="w-16 h-16 mx-auto mb-2 opacity-30" />
                  <span class="text-sm font-medium">Warehouse Operations</span>
                </div>
              </div>
              <!-- App preview image -->
              <img
                src="/images/ops.png"
                alt="iDeal Ops Application Preview"
                class="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500"
                :class="hoveredApp === 'ops' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
              />
            </div>
            <!-- Floating UI Element -->
            <div
              class="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur rounded-lg p-4 shadow-lg border border-slate-100 dark:border-white/10 transition-all duration-500"
              :class="hoveredApp === 'ops' ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-400 uppercase">Stock Alert</span>
                <span class="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-slate-100 dark:bg-slate-700 p-2 rounded text-navy-dark dark:text-white font-mono text-sm font-bold">SKU-8921</div>
                <div class="text-sm text-navy-dark dark:text-white font-medium">Premium Lager Cases</div>
                <div class="ml-auto text-primary font-bold text-sm">In Stock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArchiveBoxIcon, ChartBarIcon, ServerStackIcon } from '@heroicons/vue/24/solid'

const hoveredApp = ref<string | null>(null)
</script>
