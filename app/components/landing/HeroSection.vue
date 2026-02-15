<template>
  <section class="relative pt-20 flex items-center min-h-[90vh] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/hero-bg.jpg"
        alt="Modern automated warehouse with high shelves and soft lighting"
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-navy-dark/80 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/70" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span class="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span class="text-accent font-semibold text-xs uppercase tracking-wider">New Version 4.0 Released</span>
          </div>

          <h1 class="text-5xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            The Operating System <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-sky-300">Built for Modern</span> <br />
            Beverage Dealerships
          </h1>

          <p class="text-xl text-slate-300 max-w-xl leading-relaxed font-light">
            Stop losing cases and start gaining insights. The only NFC-powered platform engineered for total inventory control and field efficiency.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" class="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(254,119,2,0.4)] hover:shadow-[0_0_30px_rgba(254,119,2,0.6)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2 group">
              <span>BOOK A DEMO</span>
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button @click="showVideo = true" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2">
              <PlayCircleIcon class="w-6 h-6" />
              <span>Watch How It Works</span>
            </button>
          </div>

          <div class="pt-8 flex items-center gap-6 text-slate-400 text-sm font-medium">
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="w-5 h-5 text-accent" />
              <span>NFC Integrated</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="w-5 h-5 text-accent" />
              <span>Real-time Sync</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="w-5 h-5 text-accent" />
              <span>ERP Compatible</span>
            </div>
          </div>
        </div>

        <!-- Dashboard Preview -->
        <div class="hidden lg:block relative">
          <div class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-6 backdrop-blur-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <!-- Window Controls -->
            <div class="flex justify-between items-center mb-6">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div class="w-3 h-3 rounded-full bg-yellow-500" />
                <div class="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div class="text-slate-400 text-xs font-mono">LIVE FEED: WAREHOUSE A</div>
            </div>

            <div class="space-y-4">
              <!-- Keg Row -->
              <div class="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                    <CubeIcon class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="text-white font-medium">Outlet #8921-A</div>
                    <div class="text-slate-400 text-xs">Scanned: Just now</div>
                  </div>
                </div>
                <div class="text-green-400 text-sm font-bold flex items-center gap-1">
                  <CheckBadgeIcon class="w-5 h-5" /> Verified
                </div>
              </div>

              <!-- Route Row -->
              <div class="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                    <TruckIcon class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="text-white font-medium">Route 42 - Truck 9</div>
                    <div class="text-slate-400 text-xs">Departed: 2 mins ago</div>
                  </div>
                </div>
                <div class="text-primary text-sm font-bold">En Route</div>
              </div>

              <!-- Graph -->
              <div class="h-32 bg-white/5 rounded-lg border border-white/5 overflow-hidden relative">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full text-primary">
                  <path d="M0 35 Q 20 30, 40 32 T 80 15 T 100 5 L 100 40 L 0 40 Z" fill="currentColor" fill-opacity="0.1" />
                  <path d="M0 35 Q 20 30, 40 32 T 80 15 T 100 5" fill="none" stroke="currentColor" stroke-width="2" />
                </svg>
                <div class="absolute top-2 left-4 text-xs text-slate-400">Daily Throughput</div>
                <div class="absolute bottom-2 right-4 text-xl font-bold text-white">98.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Video Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showVideo" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeVideo">
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <Transition
            enter-active-class="transition duration-300 ease-out delay-100"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div v-if="showVideo" class="relative z-10 w-full max-w-4xl">
              <button @click="closeVideo" class="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm">
                <XMarkIcon class="w-5 h-5" />
                Close
              </button>
              <div class="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black" style="padding-bottom: 56.25%;">
                <iframe
                  class="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/2tuy29S8eCk?start=61&autoplay=1"
                  title="iDeal DMS Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRightIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  CubeIcon,
  CheckBadgeIcon,
  TruckIcon,
  XMarkIcon,
} from '@heroicons/vue/24/solid'

const showVideo = ref(false)

function closeVideo() {
  showVideo.value = false
}
</script>
