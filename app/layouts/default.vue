<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 antialiased selection:bg-primary/30 min-h-screen flex flex-col">
    <LandingNavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <LandingAppFooter />
  </div>
</template>
