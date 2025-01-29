<template>
  <div class="max-w-7xl mx-auto py-12 px-6">
    <div class="pt-[5rem]">
      <h1 class="text-3xl font-bold text-center text-gray-900">Projects</h1>
      <p class="text-center text-gray-600 mt-2">
        A collection of my recent works.
      </p>
      <div class="grid md:grid-cols-3 gap-8 mt-10">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-900">
              {{ project.title }}
            </h2>
            <p class="text-gray-600 mt-2">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              class="mt-4 inline-block text-blue-600 hover:underline"
              >View Project</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce site built with Nuxt and Supabase.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    id: 2,
    title: 'Social Media App',
    description: 'A Twitter-like app with real-time features.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my work.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
])
</script>
