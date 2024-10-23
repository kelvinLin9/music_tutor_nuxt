<template>
  <section>
    <Swiper
      :modules="[EffectFade, Pagination, Autoplay]"
      effect="fade"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
      :loop="true"
      :speed="1500"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
    >
      <SwiperSlide 
        v-for="(slide, index) in slides" 
        :key="index"
      >
        <div 
          :class="slide.className"
          class="h-screen bg-cover bg-center w-full"
        />
      </SwiperSlide>

      <div class="container absolute inset-0 z-10 mx-auto flex items-center">
        <div class="blockquote relative w-full max-w-2xl mx-auto px-6 md:px-8 py-8 md:py-10
                    bg-white/30 backdrop-blur-md rounded-lg
                    shadow-lg sm:mx-4 md:mx-8">
          <div>
            <div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-2">
                找尋像好友一樣的音樂導師
              </h2>
              <h3 class="text-base font-bold md:text-lg text-dark/90">
                在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
              </h3>
            </div>

            <div class="relative my-3">
              <input 
                  class="w-full h-10 px-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  list="datalistOptions"
                  id="homeInput"
                  placeholder="我想學習..."
                  v-model="selectCourseName"
                  @keyup.enter="goAllCourses()"
              >
              <label 
                  for="homeInput" 
                  class="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  @click="goAllCourses()"
              >
                <font-awesome-icon 
                  :icon="['fas', 'magnifying-glass']"
                  class="text-gray-600 text-lg hover:text-primary transition-colors duration-200"
                />
              </label>
            </div>

            <div class="flex flex-wrap gap-2">
              <button
                v-for="course in coursePills"
                :key="course"
                class="
                  inline-flex items-center px-2 py-1 rounded-full 
                  bg-primary text-white
                  transition duration-200 ease-in-out transform 
                  hover:scale-105 hover:bg-primary/80
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                @click="goAllCourses(course)"
              >
                {{ course }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Swiper>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper/modules'

const swiperModules = [EffectFade, Pagination, Autoplay, Navigation]
// 課程分類
const coursePills = ref(['鋼琴', '編曲', '流行歌唱', '木吉他'])

// 路由導航
const router = useRouter()
const goAllCourses = (category) => {
  router.push({
    path: '/courses',
    query: category ? { category } : undefined
  })
}
// 幻燈片數據
const slides = ref([
  { className: 'header-bg-1' },
  { className: 'header-bg-2' },
  { className: 'header-bg-3' }
])
</script>

<style scoped lang="scss">
.header-bg-1 {
  background-image: url('@/assets/images/home-header-1.jpg');
}
.header-bg-2 {
  background-image: url('@/assets/images/home-header-2.jpg');
}
.header-bg-3 {
  background-image: url('@/assets/images/home-header-3.jpg');
}
.blockquote {
    background: hsla(0,0%,100%,.3);  
    backdrop-filter: blur(5px);
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	              0 .5em 1em rgba(0, 0, 0, 0.6);
	  text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
    // @media (max-width: 576px) {
    //   width: 95%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    // }
  }
</style>