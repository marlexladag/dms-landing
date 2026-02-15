<template>
  <section class="py-24 bg-slate-900 dark:bg-[#091a2a] relative overflow-hidden">
    <!-- Abstract BG Pattern -->
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#053B61 1px, transparent 1px); background-size: 32px 32px;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20">
        <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Solution</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6">
          ONE PLATFORM. <span class="text-primary">TOTAL CONTROL.</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Connect every aspect of your operation into a single source of truth.
        </p>
      </div>

      <!-- Ecosystem Graphic -->
      <div class="relative max-w-4xl mx-auto aspect-square md:aspect-[16/9] flex items-center justify-center">
        <!-- Connecting Lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450">
          <path d="M400 225 L200 120" stroke="#FE7702" stroke-width="2" stroke-dasharray="8 4" opacity="0.4">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M400 225 L600 120" stroke="#FE7702" stroke-width="2" stroke-dasharray="8 4" opacity="0.4">
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M400 225 L400 380" stroke="#FE7702" stroke-width="2" stroke-dasharray="8 4" opacity="0.4">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>

        <!-- Center Core Node -->
        <div class="absolute z-20 flex flex-col items-center justify-center text-center">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-4 border-primary shadow-[0_0_50px_rgba(5,59,97,0.3)] flex items-center justify-center pulse-ring relative z-10">
            <div class="text-white font-bold text-xl md:text-2xl tracking-tighter">iDeal<span class="text-primary">Core</span></div>
          </div>
        </div>

        <!-- Top Left Node: Warehouse -->
        <div class="absolute top-[10%] left-[5%] md:left-[15%] ecosystem-node group cursor-pointer">
          <div class="bg-white p-6 rounded-xl shadow-xl w-64 border-l-4 border-primary hover:bg-slate-50 transition-colors">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 text-blue-600">
              <BuildingStorefrontIcon class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-slate-900 mb-1">Warehouse Ops</h4>
            <p class="text-sm text-slate-600">Automated check-in/out scanning and real-time inventory levels.</p>
          </div>
        </div>

        <!-- Top Right Node: Field Sales -->
        <div class="absolute top-[10%] right-[5%] md:right-[15%] ecosystem-node group cursor-pointer">
          <div class="bg-white p-6 rounded-xl shadow-xl w-64 border-l-4 border-primary hover:bg-slate-50 transition-colors">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 text-green-600">
              <DevicePhoneMobileIcon class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-slate-900 mb-1">Field Sales</h4>
            <p class="text-sm text-slate-600">Mobile CRM, order entry, and asset tracking for drivers.</p>
          </div>
        </div>

        <!-- Bottom Center Node: Management -->
        <div class="absolute bottom-[5%] left-1/2 -translate-x-1/2 ecosystem-node group cursor-pointer">
          <div class="bg-white p-6 rounded-xl shadow-xl w-64 border-l-4 border-primary hover:bg-slate-50 transition-colors">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 text-purple-600">
              <ChartBarIcon class="w-6 h-6" />
            </div>
            <h4 class="font-bold text-slate-900 mb-1">Management</h4>
            <p class="text-sm text-slate-600">BI Dashboards, forecasting, and total operational oversight.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/solid'
</script>
