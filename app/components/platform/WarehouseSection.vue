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
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">NFC-powered outlet registration and tagging. Digitize field operations with instant verification and geo-tagged check-ins.</p>
              </div>
            </div>

            <!-- App Card: iDeal Stocks -->
            <div
              class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'stocks'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <ChartBarIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Stocks</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time warehouse management — product loading, empties unloading, stock monitoring, and automated inventory alerts.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Content (Right) — Phone Mockup -->
        <div class="order-1 lg:order-2 relative">
          <div class="absolute -right-10 -top-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div class="relative flex justify-center items-center">
            <!-- Phone Frame -->
            <div class="relative bg-navy-dark rounded-[2.5rem] border-8 border-navy-dark shadow-2xl overflow-hidden w-[300px] h-[600px]">
              <div class="relative w-full h-full bg-gradient-to-br from-amber-50 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900">

                <!-- Default state: warehouse placeholder -->
                <div
                  class="absolute inset-0 flex flex-col transition-opacity duration-500"
                  :class="hoveredApp ? 'opacity-0' : 'opacity-100'"
                >
                  <div class="flex-1 flex items-center justify-center">
                    <div class="text-center text-slate-400 dark:text-slate-500">
                      <ArchiveBoxIcon class="w-16 h-16 mx-auto mb-2 opacity-30" />
                      <span class="text-sm font-medium">Warehouse Operations</span>
                    </div>
                  </div>
                  <!-- Floating stock alert card -->
                  <div class="mx-4 mb-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur rounded-lg p-4 shadow-lg border border-slate-100 dark:border-white/10">
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

                <!-- iDeal Ops mockup -->
                <div
                  class="absolute inset-0 flex flex-col transition-opacity duration-500"
                  :class="hoveredApp === 'ops' ? 'opacity-100' : 'opacity-0'"
                >
                  <!-- Top bar -->
                  <div class="bg-navy-dark px-4 py-3 flex items-center justify-between">
                    <span class="text-white font-bold text-base">iDeal Ops</span>
                    <MagnifyingGlassIcon class="w-5 h-5 text-white/70" />
                  </div>

                  <!-- Search bar -->
                  <div class="px-4 py-3 bg-white dark:bg-slate-800">
                    <div class="bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2 text-sm text-slate-400">Search outlets...</div>
                  </div>

                  <!-- Outlet list -->
                  <div class="flex-1 bg-white dark:bg-slate-800 px-4 overflow-hidden">
                    <!-- Outlet 1 -->
                    <div class="py-3 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <div>
                        <div class="font-bold text-navy-dark dark:text-white text-sm">Sunrise Sari-Sari</div>
                        <div class="text-xs text-slate-400 mt-0.5">123 Rizal Ave, Makati</div>
                      </div>
                      <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">Active</span>
                    </div>
                    <!-- Outlet 2 -->
                    <div class="py-3 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <div>
                        <div class="font-bold text-navy-dark dark:text-white text-sm">Aling Nena Store</div>
                        <div class="text-xs text-slate-400 mt-0.5">45 Mabini St, Quezon City</div>
                      </div>
                      <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700">Pending</span>
                    </div>
                    <!-- Outlet 3 -->
                    <div class="py-3 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <div>
                        <div class="font-bold text-navy-dark dark:text-white text-sm">Metro Mini Mart</div>
                        <div class="text-xs text-slate-400 mt-0.5">78 Bonifacio Blvd, Taguig</div>
                      </div>
                      <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">New</span>
                    </div>
                  </div>

                  <!-- Bottom Scan NFC button -->
                  <div class="px-4 py-4 bg-white dark:bg-slate-800">
                    <button class="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2">
                      <SignalIcon class="w-5 h-5" />
                      Scan NFC
                    </button>
                  </div>
                </div>

                <!-- iDeal Stocks mockup -->
                <div
                  class="absolute inset-0 flex flex-col transition-opacity duration-500"
                  :class="hoveredApp === 'stocks' ? 'opacity-100' : 'opacity-0'"
                >
                  <!-- Top bar -->
                  <div class="bg-navy-dark px-4 py-3">
                    <span class="text-white font-bold text-base">iDeal Stocks</span>
                  </div>

                  <div class="flex-1 bg-white dark:bg-slate-800 px-4 py-4 overflow-hidden">
                    <!-- 3 stat cards -->
                    <div class="grid grid-cols-3 gap-2 mb-4">
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-2.5 text-center">
                        <div class="text-xs text-slate-400 mb-1">Total SKUs</div>
                        <div class="text-lg font-bold text-primary">248</div>
                      </div>
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-2.5 text-center">
                        <div class="text-xs text-slate-400 mb-1">Low Stock</div>
                        <div class="text-lg font-bold text-danger">12</div>
                      </div>
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-2.5 text-center">
                        <div class="text-xs text-slate-400 mb-1">Movements</div>
                        <div class="text-lg font-bold text-green-500">36</div>
                      </div>
                    </div>

                    <!-- Product grid 2x2 -->
                    <div class="grid grid-cols-2 gap-3">
                      <!-- Product 1 -->
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div class="text-xs font-bold text-navy-dark dark:text-white mb-2">Premium Lager</div>
                        <div class="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-1">
                          <div class="bg-green-500 h-2 rounded-full" style="width: 82%" />
                        </div>
                        <div class="text-xs text-slate-400">820 units</div>
                      </div>
                      <!-- Product 2 -->
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div class="text-xs font-bold text-navy-dark dark:text-white mb-2">Pale Pilsen</div>
                        <div class="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-1">
                          <div class="bg-yellow-500 h-2 rounded-full" style="width: 45%" />
                        </div>
                        <div class="text-xs text-slate-400">450 units</div>
                      </div>
                      <!-- Product 3 -->
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div class="text-xs font-bold text-navy-dark dark:text-white mb-2">Light Draft</div>
                        <div class="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-1">
                          <div class="bg-red-500 h-2 rounded-full" style="width: 15%" />
                        </div>
                        <div class="text-xs text-slate-400">150 units</div>
                      </div>
                      <!-- Product 4 -->
                      <div class="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div class="text-xs font-bold text-navy-dark dark:text-white mb-2">Strong Ice</div>
                        <div class="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-1">
                          <div class="bg-green-500 h-2 rounded-full" style="width: 70%" />
                        </div>
                        <div class="text-xs text-slate-400">700 units</div>
                      </div>
                    </div>
                  </div>
                </div>

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
import { ArchiveBoxIcon, ChartBarIcon, SignalIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const hoveredApp = ref<string | null>(null)
</script>
