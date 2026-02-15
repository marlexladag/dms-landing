<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: study } = await useAsyncData('case-study-' + slug, () =>
  queryCollection('caseStudies').path('/case-studies/' + slug).first()
)

if (!study.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/case-studies" class="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">&larr; Back to Case Studies</NuxtLink>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{{ study?.title }}</h1>
        <div class="mt-4 flex items-center gap-3">
          <span v-if="study?.industry" class="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ study.industry }}</span>
          <span v-if="study?.company" class="text-sm text-slate-500 dark:text-slate-400">{{ study.company }}</span>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-lg">
        <ContentRenderer v-if="study" :value="study" />
      </div>
    </section>
  </div>
</template>
