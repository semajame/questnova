<template>
  <div>
    <Header />
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

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: '404 - Questnova Systems Corporation', // Set the dynamic page title
  meta: [
    {
      hid: 'description', // Use `hid` to ensure meta tags are uniquely identified
      name: 'description',
      content: "Error Page, the page your'e looking for does not exist. ", // Add a meaningful description
    },
  ],
})

defineProps({
  statusCode: {
    type: Number,
    default: 500,
  },
  message: {
    type: String,
    default: 'Oops! Something went wrong',
  },
})

const handleReload = () => {
  window.location.reload()
}
</script>
