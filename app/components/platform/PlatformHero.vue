<template>
  <header class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Dot Pattern Background -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(#053B61 1px, transparent 1px); background-size: 24px 24px;" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
        The Complete Ecosystem
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-6 leading-tight">
        Our Solution: <span class="text-primary">iDeal</span>
      </h1>

      <p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        A unified ecosystem that transforms how dealerships operate. From the warehouse to the field, we deliver the tools necessary for precision, security, and scalable growth in a digital-first economy.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#features" class="bg-navy-dark hover:bg-navy-light text-white px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-xl">
          Explore Features
        </a>
        <button
          @click="showVideo = true"
          class="bg-white dark:bg-white/10 text-navy-dark dark:text-white border border-slate-200 dark:border-white/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
        >
          <PlayCircleIcon class="w-5 h-5 text-primary" />
          Watch Video
        </button>
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
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <!-- Modal Content -->
          <Transition
            enter-active-class="transition duration-300 ease-out delay-100"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div v-if="showVideo" class="relative z-10 w-full max-w-4xl">
              <!-- Close button -->
              <button
                @click="closeVideo"
                class="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <XMarkIcon class="w-5 h-5" />
                Close
              </button>

              <!-- Video container -->
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
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PlayCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const showVideo = ref(false)

function closeVideo() {
  showVideo.value = false
}
</script>
