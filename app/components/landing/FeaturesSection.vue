<template>
  <section class="py-24 bg-background-light dark:bg-background-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Built for the beverage industry, <br />
            <span class="text-primary">not adapted to it.</span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg">
            Generic ERPs don't understand bottle deposits, tap handle tracking, or route accounting. iDeal DMS is purpose-built for your specific workflow challenges.
          </p>
          <ul class="space-y-4 mt-8">
            <li class="flex items-start gap-3">
              <SignalIcon class="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">NFC-Powered Tagging</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Every outlet is NFC-tagged. Scan with a tap, track automatically.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <WifiIcon class="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">Offline-First Mobile App</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Drivers can work inside coolers or cellars with zero connectivity. Syncs when online.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <PuzzlePieceIcon class="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">Seamless Integrations</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Connects with QuickBooks, NetSuite, and major brewery portals.</p>
              </div>
            </li>
          </ul>
          <div class="pt-6">
            <a href="#" class="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Explore All Features <ArrowRightIcon class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 bg-primary/20 rounded-xl blur-xl rotate-3" />
          <img
            src="/images/features-warehouse.jpg"
            alt="Warehouse manager using a tablet device for inventory tracking"
            class="relative rounded-xl shadow-2xl border border-white/20 w-full h-auto object-cover"
          />
          <!-- Floating Stat Card -->
          <div class="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-100 dark:border-white/10 max-w-xs">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ArrowTrendingUpIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="text-2xl font-bold text-slate-900 dark:text-white">+24%</div>
                <div class="text-xs text-slate-500">Efficiency Gain</div>
              </div>
            </div>
            <p class="text-xs text-slate-400">Average first-year improvement for new iDeal partners.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  SignalIcon,
  WifiIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/vue/24/solid'
</script>
