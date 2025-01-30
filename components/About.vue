<template>
  <div>
    <div
      class="flex justify-center items-center min-h-screen px-6 bg-gray-100 py-10"
    >
      <div class="max-w-6xl flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1 text-left">
          <h1 class="text-4xl font-bold text-[#245068] mb-4">
            We would love to bring your Solution to life!
          </h1>
          <div class="my-7">
            <p class="text-gray-600 mb-4">
              Questnova Systems Corporation is a Cebu, Philippines based
              software services provider of premium web, mobile and
              business/operations software applications. Questnova specializes
              in web-based business/operations application software development,
              database development, website development, pop3 email facilities,
              web hosting, SMS gateways and mobile phone applications using the
              JAVA development platform.
            </p>
            <p class="text-gray-600 mb-4">
              The company’s mission is to offer only the best quality customized
              software development services utilizing best and up-to-date
              systems and practices, make every software development project
              fitting, practical, timely and useful, and to elicit client
              delight.
            </p>
            <p class="text-gray-600">
              Questnova offers prime, secure and stable software solutions at
              lesser costs with JAVA as its core software development
              foundation. This is possible because Java is open sourced (no
              licensing fees) and continuously improving (community of open
              sourced professionals).
            </p>
          </div>
        </div>
        <div class="flex-1 flex justify-center">
          <NuxtImg
            src="/img/candid.png"
            format="webp"
            densities="x1"
            alt="Questnova Team"
            class="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <!-- Values Section -->
    </div>

    <div class="container mx-auto py-12 px-4">
      <!-- Hero Section -->
      <div class="mb-16 text-center">
        <h1 class="text-4xl font-bold mb-2">
          Our Corporate
          <span class="text-[#245068]"> Values</span>
        </h1>
        <p class="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
          At Questnova Systems, our values guide everything we do. They shape
          our culture, drive our decisions, and help us deliver exceptional
          solutions to our clients.
        </p>
      </div>

      <!-- Values Grid -->
      <div class="flex gap-8 items-center flex-col md:flex-row">
        <div class="md:w-1/2 rounded-xl">
          <NuxtImg
            src="/img/consultation.png"
            format="webp"
            densities="x1"
            alt="Values Image"
            class="w-full h-auto rounded-xl"
          />
        </div>
        <div class="flex flex-col gap-4 md:w-1/2">
          <div
            v-for="value in values"
            :key="value.id"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start space-x-4 gap-3">
              <div>
                <span v-html="value.icon" />
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">{{ value.title }}</h2>
                <p class="text-gray-600">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-16 text-center rounded-xl p-8 relative">
        <!-- Background Gradient Overlay -->
        <div
          class="absolute top-0 left-0 z-[-10] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-xl"
        ></div>

        <!-- Content -->
        <h3 class="text-2xl font-bold mb-4 text-white">
          Building Tomorrow's Solutions Today
        </h3>
        <p class="text-gray-400 max-w-2xl mx-auto">
          These values have guided us since 2002, helping us deliver premium
          software solutions while maintaining the highest standards of quality
          and professional excellence.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Defining the values array in the Composition API
const values = ref([
  {
    id: 1,
    title: 'Premium Quality Software',
    description:
      'We are committed to providing premium quality software services for all clients, ensuring excellence in every project we deliver.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"> <path fill="#4d50ff" d="M5.5 3a.5.5 0 0 0-.429.243l-3 5a.5.5 0 0 0 .045.577l7.5 9a.5.5 0 0 0 .768 0l7.5-9a.5.5 0 0 0 .045-.577l-3-5A.5.5 0 0 0 14.5 3zM3.383 8l2.4-4h1.979l-1.6 4zm2.775 1l2.267 5.829L3.568 9zM10 16.12L7.231 9h5.538zM7.239 8l1.6-4h2.322l1.6 4zm6.6 0l-1.6-4h1.978l2.4 4zm.003 1h2.59l-4.857 5.829z" /> </svg>',
  },
  {
    id: 2,
    title: 'Client-Centric Solutions',
    description:
      'We achieve client delight through fitting, practical, and useful solutions that address their specific needs and challenges.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <g fill="none" stroke="#f8c42d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#f8c42d">
        <path d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052l.52-2.56l.94-.464c.505-.248.756-.373.81-.6c.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506s-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2C6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8 8 0 0 0 2.027.987" />
        <path d="m14 9l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L7 12m4.5-4l-2 5" />
      </g>
    </svg>`,
  },
  {
    id: 3,
    title: 'Professional Growth',
    description:
      'We are dedicated to providing continuous professional growth opportunities for our associates, fostering a culture of learning and development.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"> <path fill="#32ff15" d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38" /> </svg>',
  },
  {
    id: 4,
    title: 'Open Source Foundation',
    description:
      'We strengthen our core software development foundation using open-sourced tools, embracing innovation and community-driven excellence.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"> <path fill="none" stroke="#0dffbc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" /> </svg>',
  },
  {
    id: 5,
    title: 'Continuous Improvement',
    description:
      'We practice continuous process improvement in all endeavors, constantly evolving and refining our methods to deliver better results.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"> <path fill="#fa24f1" d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z" /> </svg>',
  },
])
</script>
