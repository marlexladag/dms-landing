<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Blog</h1>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">Insights, tips, and news from the DMS Business Care team.</p>
      </div>
    </section>

    <!-- Posts Grid -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
          >
            <div class="p-6">
              <p class="text-xs text-slate-400 dark:text-slate-500 mb-2">{{ post.date }}</p>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">{{ post.title }}</h2>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </div>

        <div v-if="!posts?.length" class="text-center py-16">
          <p class="text-slate-500 dark:text-slate-400">No blog posts yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
