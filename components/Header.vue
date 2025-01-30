<template>
  <div>
    <header>
      <nav class="bg-white/50 backdrop-blur-md shadow-md fixed w-full z-50 p-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">
            <div class="flex-shrink-0">
              <NuxtLink to="/">
                <NuxtImg
                  src="/img/logo.png"
                  alt="Questnova Systems Corporation Logo"
                  densities="x1"
                  format="webp"
                  width="200"
                />
              </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-8">
              <NuxtLink
                v-for="link in ['About', 'Projects', 'Contact']"
                :key="link"
                :to="`/#${link.toLowerCase()}`"
                class="text-black hover:text-[#337092] relative group"
              >
                {{ link }}
                <span
                  class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#337092] origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                ></span>
              </NuxtLink>
            </div>

            <!-- Mobile Navigation Toggle Button -->
            <div class="md:hidden flex items-center">
              <button
                @click="toggleMenu"
                class="text-black focus:outline-none"
                aria-label="Menu"
              >
                <svg
                  v-if="!menuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#337092"
                    fill-rule="evenodd"
                    d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-if="menuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#337092"
                >
                  <path
                    fill="#337092"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div
          v-show="menuOpen"
          class="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 transition-transform duration-500 ease-in-out transform"
          :class="{
            'translate-x-0': menuOpen,
            '-translate-x-full': !menuOpen,
          }"
        >
          <div class="flex flex-col space-y-4 py-5">
            <NuxtLink
              v-for="link in ['About', 'Projects', 'Contact']"
              :key="link"
              :to="`/#${link.toLowerCase()}`"
              class="text-black hover:text-[#337092] text-xl"
              @click="toggleMenu"
            >
              >
              {{ link }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.scale-x-0 {
  transform: scaleX(0);
}

.group:hover .group-hover\:scale-x-100 {
  transform: scaleX(1);
}
</style>
