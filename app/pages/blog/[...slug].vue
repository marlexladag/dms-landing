<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: post } = await useAsyncData('blog-' + slug, () =>
  queryCollection('blog').path('/blog/' + slug).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/blog" class="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">&larr; Back to Blog</NuxtLink>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{{ post?.title }}</h1>
        <p class="mt-4 text-slate-500 dark:text-slate-400 text-sm">{{ post?.date }} <span v-if="post?.author">| {{ post.author }}</span></p>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-lg">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </section>
  </div>
</template>
