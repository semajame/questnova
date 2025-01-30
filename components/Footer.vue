<template>
  <!-- Contact Section -->
  <footer id="contact" class="relative">
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#337092_100%)]"
    ></div>

    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div
        class="lg:grid lg:grid-cols-2 lg:gap-8 items-center"
        v-motion-slide-bottom
        :delay="200"
        :duration="600"
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        <div>
          <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
            Let's Build Your Solution
          </h2>
          <p class="mt-3 text-lg text-black">
            26th Avocado St. Mambaling Cebu City 6000, Cebu, Philippines<br />
            Phone: (0917) 3220799 <br />
            Email: ceo@questnova.com
          </p>
        </div>
        <div
          class="mt-8 lg:mt-0"
          v-motion-slide-bottom
          :delay="200"
          :duration="600"
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          <div class="bg-white/40 backdrop-blur-sm rounded-lg shadow-xl p-6">
            <form class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="name"
                  >Name</label
                >
                <input
                  type="text"
                  class="mt-1 block py-2 px-3 w-full rounded-md border-gray-300 shadow-md bg-white/80"
                  id="name"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="email"
                  >Email</label
                >
                <input
                  type="email"
                  class="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-md bg-white/80"
                  id="email"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="message"
                  >Message</label
                >
                <textarea
                  rows="4"
                  class="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-md bg-white/80"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-[#337092] text-white rounded-md py-4 px-4 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <p class="text-lg text-black text-center py-10">
      &copy; {{ date.getFullYear() }} Questnova Systems Corporation. All Rights
      Reserved.
    </p>
  </footer>
</template>
<script setup>
const date = new Date()
</script>
