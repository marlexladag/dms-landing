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

                <!-- Default placeholder (no hover) -->
                <div
                  class="absolute inset-0 flex flex-col transition-opacity duration-500"
                  :class="hoveredApp ? 'opacity-0' : 'opacity-100'"
                >
                  <div class="flex-1 flex items-center justify-center">
                    <div class="text-center text-slate-400 dark:text-slate-500">
                      <CreditCardIcon class="w-16 h-16 mx-auto mb-2 opacity-30" />
                      <span class="text-sm font-medium">Mobile POS</span>
                    </div>
                  </div>
                  <!-- Overlay UI -->
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <div class="mb-4">
                      <div class="text-xs text-slate-300 uppercase mb-1">Last Transaction</div>
                      <div class="text-2xl font-bold">1,240.50</div>
                    </div>
                    <button class="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm">New Order</button>
                  </div>
                </div>

                <!-- iDeal POS Mockup -->
                <div
                  class="absolute inset-0 flex flex-col transition-all duration-500"
                  :class="hoveredApp === 'pos' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                >
                  <!-- Top bar -->
                  <div class="bg-navy-dark px-4 py-3 flex items-center justify-between">
                    <span class="text-white font-semibold text-sm">Today's Route</span>
                    <span class="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">5/12</span>
                  </div>
                  <!-- Progress bar -->
                  <div class="px-4 py-2 bg-white">
                    <div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div class="h-full bg-primary rounded-full" style="width: 42%" />
                    </div>
                  </div>
                  <!-- Route stops list -->
                  <div class="flex-1 bg-white px-4 py-2 space-y-3 overflow-hidden">
                    <div v-for="stop in posStops" :key="stop.number" class="flex items-center gap-3">
                      <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        :class="stop.status === 'Delivered' ? 'bg-green-100 text-green-700' : stop.status === 'Next' ? 'bg-primary text-white' : 'bg-yellow-100 text-yellow-700'"
                      >
                        {{ stop.number }}
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-bold text-navy-dark text-xs truncate">{{ stop.name }}</div>
                        <div class="text-[10px] text-slate-400 truncate">{{ stop.address }}</div>
                      </div>
                      <span
                        class="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                        :class="stop.status === 'Delivered' ? 'bg-green-100 text-green-600' : stop.status === 'Next' ? 'bg-primary text-white animate-pulse' : 'bg-yellow-100 text-yellow-600'"
                      >
                        {{ stop.status }}
                      </span>
                    </div>
                  </div>
                  <!-- Bottom button -->
                  <div class="px-4 py-3 bg-white border-t border-slate-100">
                    <button class="w-full bg-primary text-white py-2.5 rounded-lg font-semibold text-sm">Start Next Delivery</button>
                  </div>
                </div>

                <!-- iDeal Store Mockup -->
                <div
                  class="absolute inset-0 flex flex-col transition-all duration-500"
                  :class="hoveredApp === 'store' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                >
                  <!-- Top bar -->
                  <div class="bg-navy-dark px-4 py-3 flex items-center justify-between">
                    <span class="text-white font-semibold text-sm">iDeal Store</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 0 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <!-- Summary cards -->
                  <div class="px-4 py-3 bg-white grid grid-cols-2 gap-2">
                    <div class="bg-slate-50 rounded-lg p-3 text-center">
                      <div class="text-[10px] text-slate-400 uppercase font-semibold">Pending Orders</div>
                      <div class="text-2xl font-bold text-accent">3</div>
                    </div>
                    <div class="bg-slate-50 rounded-lg p-3 text-center">
                      <div class="text-[10px] text-slate-400 uppercase font-semibold">Delivered</div>
                      <div class="text-2xl font-bold text-green-500">12</div>
                    </div>
                  </div>
                  <!-- Suggested Reorders -->
                  <div class="flex-1 bg-white px-4 py-2 overflow-hidden">
                    <div class="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Suggested Reorders</div>
                    <div v-for="product in storeProducts" :key="product.name" class="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <div>
                        <div class="text-xs font-semibold text-navy-dark">{{ product.name }}</div>
                        <div class="text-[10px] text-slate-400">{{ product.qty }}</div>
                      </div>
                      <button class="text-[10px] font-semibold text-primary border border-primary/30 rounded-md px-2.5 py-1 hover:bg-primary/5">Reorder</button>
                    </div>
                  </div>
                  <!-- Bottom button -->
                  <div class="px-4 py-3 bg-white border-t border-slate-100">
                    <button class="w-full bg-accent text-white py-2.5 rounded-lg font-semibold text-sm">Quick Order</button>
                  </div>
                </div>

                <!-- iDeal Connect Mockup -->
                <div
                  class="absolute inset-0 flex flex-col transition-all duration-500"
                  :class="hoveredApp === 'connect' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                >
                  <!-- Top bar -->
                  <div class="bg-navy-dark px-4 py-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.827 3.024ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-white font-semibold text-sm">Outlets near you</span>
                  </div>
                  <!-- Outlet cards -->
                  <div class="flex-1 bg-slate-50 px-4 py-3 space-y-3 overflow-hidden">
                    <div v-for="outlet in connectOutlets" :key="outlet.name" class="bg-white rounded-xl p-3 shadow-sm">
                      <div class="font-bold text-navy-dark text-xs">{{ outlet.name }}</div>
                      <div class="text-[10px] text-slate-400 mt-0.5">{{ outlet.distance }}</div>
                      <div class="flex items-center gap-0.5 mt-1">
                        <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" :class="star <= outlet.rating ? 'text-yellow-400' : 'text-slate-200'" viewBox="0 0 24 24" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <button class="mt-2 bg-primary text-white text-[10px] font-semibold px-3 py-1.5 rounded-md">Order Now</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Floating NFC Badge -->
            <div
              class="absolute -right-4 top-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 transition-all duration-500"
              :class="hoveredApp ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0 animate-bounce'"
              :style="!hoveredApp ? 'animation-duration: 3s' : ''"
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
            <div
              class="group bg-background-light dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'pos'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-white dark:bg-slate-700 border border-slate-200 dark:border-white/10 p-3 rounded-lg group-hover:border-primary/50 group-hover:text-primary transition-colors text-navy-dark dark:text-white shrink-0">
                <CreditCardIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal POS</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">The field agent's workhorse — NFC-powered booking and visit tagging, manage truckloads, process orders at outlets, handle payments, and track every delivery.</p>
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
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Self-service ordering for outlets. Place orders directly to your dealer for scheduled delivery — no phone calls needed.</p>
              </div>
            </div>

            <!-- App Card: iDeal Connect -->
            <div
              class="group bg-background-light dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'connect'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-white dark:bg-slate-700 border border-slate-200 dark:border-white/10 p-3 rounded-lg group-hover:border-primary/50 group-hover:text-primary transition-colors text-navy-dark dark:text-white shrink-0">
                <DevicePhoneMobileIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Connect</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Consumer ordering app — browse nearby outlets, place orders, and get products delivered directly to your door.</p>
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
import { SignalIcon, CreditCardIcon, BuildingStorefrontIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/solid'

const hoveredApp = ref<string | null>(null)

const posStops = [
  { number: 1, name: 'Mang Juan Store', address: '123 Rizal Ave, Brgy. Centro', status: 'Delivered' },
  { number: 2, name: 'Rosa Mini Mart', address: '45 Bonifacio St, Brgy. Poblacion', status: 'Delivered' },
  { number: 3, name: 'Lucky 8 Sari-Sari', address: '78 Mabini Rd, Brgy. San Jose', status: 'Next' },
  { number: 4, name: 'Tindahan ni Aling Nena', address: '12 Luna St, Brgy. Sta. Cruz', status: 'Pending' },
]

const storeProducts = [
  { name: 'Bottled Water 500ml', qty: 'x24' },
  { name: 'Instant Noodles Chicken', qty: 'x24' },
]

const connectOutlets = [
  { name: 'Mang Juan Store', distance: '0.3 km away', rating: 4 },
  { name: 'Rosa Mini Mart', distance: '0.7 km away', rating: 5 },
  { name: 'Lucky 8 Sari-Sari', distance: '1.2 km away', rating: 3 },
]
</script>
