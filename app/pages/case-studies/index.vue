<script setup lang="ts">
const { data: studies } = await useAsyncData('case-studies', () =>
  queryCollection('caseStudies').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Case Studies</h1>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">See how beverage distributors are transforming their operations with DMS Business Care.</p>
      </div>
    </section>

    <!-- Studies Grid -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            v-for="study in studies"
            :key="study.path"
            :to="study.path"
            class="group bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span v-if="study.industry" class="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ study.industry }}</span>
                <span v-if="study.company" class="text-xs text-slate-400 dark:text-slate-500">{{ study.company }}</span>
              </div>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">{{ study.title }}</h2>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{{ study.description }}</p>
            </div>
          </NuxtLink>
        </div>

        <div v-if="!studies?.length" class="text-center py-16">
          <p class="text-slate-500 dark:text-slate-400">No case studies yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
