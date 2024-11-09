<script setup>
  const nuxtApp = useNuxtApp();
  const isLoading = ref(false);
  nuxtApp.hook("page:start", () => {
    isLoading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    isLoading.value = false;
  });

</script>

<template>
  <div class=" bg-white">
    <NuxtLayout>
      <NuxtPage />
      <h1 v-show="isLoading">dddd</h1>
    </NuxtLayout>
  </div>
</template>