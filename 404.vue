<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/"
        class="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#337092] hover:bg-[#2d5a72] rounded-lg transition duration-300"
      >
        Go back to Home
      </NuxtLink>
    </div>
  </div>
</template>
