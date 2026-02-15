<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

const { data: articles } = await useAsyncData('help-center', () =>
  queryCollection('helpCenter').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Help Center</h1>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Find answers and guides to help you get the most out of DMS Business Care.</p>
      </div>
    </section>

    <!-- Articles List -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <NuxtLink
            v-for="article in articles"
            :key="article.path"
            :to="article.path"
            class="group block bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-6 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <span v-if="article.category" class="text-xs font-medium text-primary mb-1 block">{{ article.category }}</span>
                <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{{ article.title }}</h2>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">{{ article.description }}</p>
              </div>
              <ChevronRightIcon class="w-5 h-5 text-slate-400 group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
            </div>
          </NuxtLink>
        </div>

        <div v-if="!articles?.length" class="text-center py-16">
          <p class="text-slate-500 dark:text-slate-400">No help articles yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
