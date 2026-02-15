<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: article } = await useAsyncData('help-' + slug, () =>
  queryCollection('helpCenter').path('/help-center/' + slug).first()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/help-center" class="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">&larr; Back to Help Center</NuxtLink>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{{ article?.title }}</h1>
        <span v-if="article?.category" class="mt-4 inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ article.category }}</span>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-lg">
        <ContentRenderer v-if="article" :value="article" />
      </div>
    </section>
  </div>
</template>
