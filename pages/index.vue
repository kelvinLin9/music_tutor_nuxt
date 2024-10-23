<script setup>
// const { $moment, $bootstrap } = useNuxtApp()

// const currentDate = $moment().format('YYYY-MM-DD HH:mm:ss')
// onMounted(() => {
//   try {
//     const collapse = new $bootstrap.Collapse('#navbarSupportedContent');
//     collapse.show();
//   } catch (e) {
//     console.log('Bootstrap error: ', e);
//   }
// });

// const showAlert = () => {
//   console.log(currentDate)
//   $bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal')).show()
// }
</script>

<template>
  <div>
    <HomeHeader />
    <div>
      <!-- home{{ currentDate }} -->
    </div>
    <!-- <button class="btn btn-primary" @click="showAlert">提醒</button> -->
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>


  </div>
  </template>

<style scoped></style>
