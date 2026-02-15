<template>
  <footer class="bg-slate-900 text-slate-300 py-16 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <img src="/images/logo.svg" alt="DMS IT Solutions" class="h-8 w-auto brightness-0 invert" />
          </div>
          <p class="text-sm text-slate-400 mb-6">
            The #1 Dealership Management System for the beverage industry.
          </p>
          <div class="flex gap-4">
            <a href="https://www.facebook.com/dmsbusinesscare" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors">
              <!-- Facebook (inline SVG - no Heroicon equivalent for brand icons) -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.rackapp.dmsagent" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors">
              <!-- Google Play (inline SVG - no Heroicon equivalent for brand icons) -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.553 1.478a1 1 0 0 1 0 1.73l-2.553 1.478-2.507-2.507 2.507-2.18zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z" /></svg>
            </a>
            <a href="#" class="text-slate-400 hover:text-white transition-colors">
              <EnvelopeIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Hardware</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Integrations</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/case-studies" class="hover:text-primary transition-colors">Case Studies</NuxtLink></li>
            <li><NuxtLink to="/help-center" class="hover:text-primary transition-colors">Help Center</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-primary transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} DMS Business Care IT Solutions. All rights reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="/terms-of-service" class="hover:text-white">Terms of Service</NuxtLink>
          <NuxtLink to="/privacy-policy" class="hover:text-white">Privacy Policy</NuxtLink>
          <NuxtLink to="/cookies" class="hover:text-white">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  EnvelopeIcon,
} from '@heroicons/vue/24/solid'
</script>
