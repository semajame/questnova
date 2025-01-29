<template>
  <div
    ref="divRef"
    @mousemove="handleMouseMove"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    class="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 py-16 shadow-2xl"
  >
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
      :style="{
        opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
      }"
    />
    <p class="text-sm text-gray-200">Card Content</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const divRef = ref(null)
const isFocused = ref(false)
const position = ref({ x: 0, y: 0 })
const opacity = ref(0)

const handleMouseMove = (e) => {
  if (!divRef.value || isFocused.value) return
  const rect = divRef.value.getBoundingClientRect()
  position.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
}

const handleFocus = () => {
  isFocused.value = true
  opacity.value = 1
}

const handleBlur = () => {
  isFocused.value = false
  opacity.value = 0
}

const handleMouseEnter = () => {
  opacity.value = 1
}

const handleMouseLeave = () => {
  opacity.value = 0
}
</script>
