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
                  densities="x1 x2"
                  format="webp"
                  class="w-full h-auto"
                  width="200"
                />
              </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-8">
              <NuxtLink
                v-for="link in ['Services', 'Solutions', 'Contact']"
                :key="link"
                :to="`#${link.toLowerCase()}`"
                class="text-gray-600 hover:text-[#337092] relative group"
              >
                {{ link }}
                <span
                  class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#337092] origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                ></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scope>
.scale-x-0 {
  transform: scaleX(0);
}

.group:hover .group-hover\:scale-x-100 {
  transform: scaleX(1);
}
</style>
