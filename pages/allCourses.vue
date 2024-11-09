<script setup>
  definePageMeta({
    middleware: ['auth'],
  })
  const { data, refresh } = await useFetch("https://music-tutor-backend.onrender.com/courses", {
    // onRequest({ request, options}) {
    //   options.headers = options.headers || {}
    //   options.headers['Authorization'] = `Bearer ${$cookies.get('token')}`
    // },
    // onResponse({ response }) {
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch data')
    //   }
    // }
  })
  // console.log(data)
</script>

<template>
  <div>
    <div class="">
      AllCourses
    </div>
    <div class="">
      {{ data.data.length }}
    </div>
  </div>
</template>


<style>

</style>