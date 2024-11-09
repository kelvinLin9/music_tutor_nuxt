<template>
<nav :class="[
  'transition duration-700 ease-in-out',
  {
    'bg-white': $route.path !== '/' || navbarBgWhite || isMenuOpen,
    'fixed top-0 left-0 right-0 z-50': $route.path === '/',
    'sticky-top': $route.path !== '/'
  }
]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-primary"
          >
            <span class="sr-only">Open main menu</span>
            <span class="material-symbols-outlined text-gray-600 text-3xl hover:text-primary transition duration-300">
              {{ isMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>
        
        <!-- Logo and desktop navigation -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <img 
                class="h-8 w-auto" 
                src="../../assets/images/LOGO.png" 
                alt="Your Company" 
              />
            </NuxtLink>
          </div>

          <!-- Desktop menu -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 items-center">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                :class="[
                  isCurrentRoute(item.to) 
                    ? 'text-primary' 
                    : 'text-gray-800 hover:text-primary',
                  'font-bold text-lg'
                ]"
              >
                <div v-if="item.type === 'text'">
                  {{ item.name }}
                </div>
                <div v-else>
                  <!-- <font-awesome-icon :icon="item.name" class="h-6 w-6" /> -->
                  <i 
                    class="text-gray-600 text-3xl hover:text-primary transition duration-300"
                    :class="item.name"
                  />
                  <i class="mdi mdi-cart"></i>  
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right section -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Notifications -->
          <button 
            type="button" 
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
          >
            <span class="sr-only">View notifications</span>
            <Icon name="heroicons:bell" class="h-6 w-6" />
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <button 
              @click="isProfileOpen = !isProfileOpen"
              class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none"
            >
              <!-- <img 
                class="h-8 w-8 rounded-full" 
                :src="userAvatar" 
                alt="" 
              /> -->
            </button>

            <!-- Dropdown menu -->
            <div 
              v-show="isProfileOpen" 
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <NuxtLink 
                v-for="item in profileMenu" 
                :key="item.name"
                :to="item.to"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <div v-if="item.type === 'text'">
                  {{ item.name }}
                </div>
              </NuxtLink>
              <button 
                @click="handleLogout" 
                class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isMenuOpen" 
      class="sm:hidden"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          :class="[
            isCurrentRoute(item.to)
            ? 'text-primary' 
            : 'text-gray-800 hover:text-primary',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const isMenuOpen = ref(false)
const isProfileOpen = ref(false)

// Navigation items
const navigation = [
  { type: 'text', name: '我要開課', to: '/' },
  { type: 'text', name: '所有課程', to: '/allCourses' },
  { type: 'icon', name: 'mdi mdi-bookmark-outline', to: '/' },
  { type: 'icon', name: 'mdi mdi-cart-outline', to: '/' }
]

// Profile menu items
const profileMenu = [
  { name: '個人資料', to: '/profile' },
  { name: '設定', to: '/settings' }
]

// Mock user data (替換成實際的用戶數據)
const userAvatar = '/images/avatar.jpg'

// Check if current route matches navigation item
const isCurrentRoute = (path) => {
  return route.path === path
}

// Handle logout
const handleLogout = () => {
  // 實作登出邏輯
  console.log('Logging out...')
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      isProfileOpen.value = false
    }
  })
})

//
const navbarBgWhite = ref(false)

const handleScroll = () => {
  if (navbarBgWhite.value = window.scrollY > 50) {
    navbarBgWhite.value = true
    console.log('navbarBgWhite.value', navbarBgWhite.value)
  } else {
    navbarBgWhite.value = false
    console.log('navbarBgWhite.value', navbarBgWhite.value)
  }

}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

</script>

<style lang="scss" scoped>
.avatar {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%; /* 如果你想要圓形頭像 */
}
// .logo {
//   background-image: url(../assets/images/LOGO.png);
//   background-size: cover;
//   background-position: center center;
//   width: 100px;
//   height: 45px;
//   display: block;
//   text-indent: 101%;
//   overflow: hidden;
//   white-space: nowrap;
// }
.small-num {
  width: 18px;
  height: 18px;
  top: 5px;
  left: 23px;
  font-size: 12px;
}

.small-num-mobile {
  width: 20px;
  height: 20px;
  top: -12%;
  left: 60%;
  font-size: 12px;
}

.navbar-bg-white {
  transition: .4s ease;
  // background: #fff;
  box-shadow: 0 4px 8px 2px rgba(0,0,0,.02);
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.fixed-top {
  transition: .4s ease;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.btn-check:checked + .btn, 
:not(.btn-check) + .btn:active, 
.btn:first-child:active, 
.btn.active, 
.btn.show {
  border: 0;
  border-color: transparent;
}
</style>