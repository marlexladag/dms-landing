<template>
  <nav class="fixed w-full z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
          <img src="/images/logo.svg" alt="DMS IT Solutions" class="h-10 w-auto" />
        </NuxtLink>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/about" class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">About</NuxtLink>
          <NuxtLink to="/platform" class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Platform</NuxtLink>
          <NuxtLink to="/success-stories" class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Success Stories</NuxtLink>
          <NuxtLink to="/contact" class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Contact</NuxtLink>
        </div>
        <!-- CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide">
            BOOK A DEMO
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="text-slate-600 dark:text-slate-300 hover:text-primary" @click="mobileMenuOpen = !mobileMenuOpen">
            <XMarkIcon v-if="mobileMenuOpen" class="w-8 h-8" />
            <Bars3Icon v-else class="w-8 h-8" />
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-3">
        <NuxtLink to="/about" class="block text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors py-2">About</NuxtLink>
        <NuxtLink to="/platform" class="block text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors py-2">Platform</NuxtLink>
        <NuxtLink to="/success-stories" class="block text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors py-2">Success Stories</NuxtLink>
        <NuxtLink to="/contact" class="block text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors py-2">Contact</NuxtLink>
        <div class="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
          <a href="#" class="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-accent/20 text-sm tracking-wide text-center">BOOK A DEMO</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

const mobileMenuOpen = ref(false)
</script>
