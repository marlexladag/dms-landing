<template>
  <section class="py-20 lg:py-32 bg-white dark:bg-white/[0.02] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Image Content (Left) — Phone Mockup -->
        <div class="relative">
          <div class="absolute -left-10 -bottom-10 w-64 h-64 bg-navy-dark/5 rounded-full blur-3xl" />
          <div class="relative flex justify-center items-center">
            <!-- Phone Frame -->
            <div class="relative bg-navy-dark rounded-[2.5rem] border-8 border-navy-dark shadow-2xl overflow-hidden w-[300px] h-[600px]">
              <div class="relative w-full h-full bg-gradient-to-br from-amber-50 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900">
                <!-- Default placeholder -->
                <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-500" :class="hoveredApp === 'store' ? 'opacity-0' : 'opacity-100'">
                  <div class="text-center text-slate-400 dark:text-slate-500">
                    <CreditCardIcon class="w-16 h-16 mx-auto mb-2 opacity-30" />
                    <span class="text-sm font-medium">Mobile POS</span>
                  </div>
                </div>
                <!-- App preview image -->
                <img
                  src="/images/store.png"
                  alt="iDeal Store Application Preview"
                  class="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500"
                  :class="hoveredApp === 'store' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                />
              </div>
              <!-- Overlay UI -->
              <div
                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white transition-opacity duration-500"
                :class="hoveredApp === 'store' ? 'opacity-0' : 'opacity-100'"
              >
                <div class="mb-4">
                  <div class="text-xs text-slate-300 uppercase mb-1">Last Transaction</div>
                  <div class="text-2xl font-bold">1,240.50</div>
                </div>
                <button class="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm">New Order</button>
              </div>
            </div>

            <!-- Floating NFC Badge -->
            <div
              class="absolute -right-4 top-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 transition-all duration-500"
              :class="hoveredApp === 'store' ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0 animate-bounce'"
              :style="hoveredApp !== 'store' ? 'animation-duration: 3s' : ''"
            >
              <div class="flex items-center gap-2">
                <SignalIcon class="w-6 h-6 text-primary" />
                <span class="font-bold text-navy-dark dark:text-white text-sm">NFC Ready</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Content (Right) -->
        <div>
          <div class="mb-8">
            <span class="text-primary font-bold tracking-wider uppercase text-sm">Sales & Financial Management</span>
            <h2 class="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mt-2 mb-4">Field Sales &amp; POS</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Automate booking, invoicing, and real-time sales monitoring. Streamline accounts receivable tracking and basic payroll/accounting.
            </p>
          </div>

          <div class="space-y-4">
            <!-- App Card: iDeal POS -->
            <div class="group bg-background-light dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start">
              <div class="bg-white dark:bg-slate-700 border border-slate-200 dark:border-white/10 p-3 rounded-lg group-hover:border-primary/50 group-hover:text-primary transition-colors text-navy-dark dark:text-white shrink-0">
                <CreditCardIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal POS</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Empower agents to book and sell instantly in the field.</p>
              </div>
            </div>

            <!-- App Card: iDeal Store -->
            <div
              class="group bg-background-light dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'store'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-white dark:bg-slate-700 border border-slate-200 dark:border-white/10 p-3 rounded-lg group-hover:border-primary/50 group-hover:text-primary transition-colors text-navy-dark dark:text-white shrink-0">
                <BuildingStorefrontIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Store</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Automated pre-booking portal for outlets.</p>
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
import { SignalIcon, CreditCardIcon, BuildingStorefrontIcon } from '@heroicons/vue/24/solid'

const hoveredApp = ref<string | null>(null)
</script>
