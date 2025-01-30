<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="mb-16">
      <h1 class="text-4xl font-bold mb-2">
        Your premium
        <span class="text-[#245068]">software solutions</span> partner.
      </h1>
      <p class="text-gray-600 mb-8 text-lg">
        Specializing in web-based business applications, database development,
        and mobile solutions using the JAVA development platform. We transform
        your unique business requirements into practical, timely, and useful
        software solutions.
      </p>
    </div>

    <!-- Features and Image Grid -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Features List -->
      <div class="space-y-12">
        <!-- Software Development Feature -->
        <div class="flex items-start space-x-4">
          <div class="bg-[#245068] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-bold mb-2">Custom Software Development</h2>
            <p class="text-gray-600">
              We tailor software solutions to your specific needs, applying
              standardized project management and quality assurance techniques
              to deliver premium quality business software.
            </p>
          </div>
        </div>

        <!-- Web Development Feature -->
        <div class="flex items-start space-x-4">
          <div class="bg-[#245068] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">Web & Internet Solutions</h3>
            <p class="text-gray-600">
              From online applications and web portals to SMS gateways and email
              services, we deliver comprehensive web solutions that drive your
              business forward.
            </p>
          </div>
        </div>

        <!-- Mobile Solutions Feature -->
        <div class="flex items-start space-x-4">
          <div class="bg-[#245068] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">Mobile Applications</h3>
            <p class="text-gray-600">
              Specialized in mobile salesforce automation and SMS gateway
              integration, enabling your business to leverage mobile technology
              effectively.
            </p>
          </div>
        </div>
      </div>

      <!-- Image and Stats -->
      <div class="relative">
        <div class="rounded-lg overflow-hidden shadow-xl">
          <NuxtImg
            src="/img/developers.jpg"
            alt="Software development team"
            densities="x1"
            format="webp"
            class="w-full object-cover"
          />

          <!-- Stats Overlay -->
          <div
            class="absolute bottom-0 right-0 bg-[#245068] text-white p-6 rounded-tl-lg"
          >
            <div class="">
              <div class="text-center">
                <div class="text-3xl font-bold">20+</div>
                <div class="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partnership Badges Section -->
    <div class="mt-16 py-12 rounded-xl relative px-7">
      <div
        class="absolute top-0 left-0 z-[-10] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-xl"
      ></div>

      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold mb-2 text-white">
          Industry Recognition & Partnerships
        </h2>
        <p class="text-gray-400">
          Ensuring world-class standards and quality in everything we deliver
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <!-- IBM Business Partner Badge -->
        <div class="flex items-center p-6 bg-white rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center mr-4">
            <NuxtImg
              src="/img/ibm-logo.webp"
              class="w-full h-auto"
              densities="x1"
              alt="Ibm Logo"
              format="webp"
            />
          </div>
          <div>
            <h3 class="font-bold text-lg">IBM Business Partner</h3>
            <p class="text-gray-600">Official Partner for Developers</p>
          </div>
        </div>

        <!-- Sun Developer Badge -->
        <div class="flex items-center p-6 bg-white rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center mr-4">
            <NuxtImg
              src="/img/sun.png"
              class="w-full h-auto"
              alt="Sun Logo"
              densities="x1"
              format="webp"
            />
          </div>
          <div>
            <h3 class="font-bold text-lg">Sun Developer Partner</h3>
            <p class="text-gray-600">Member of Partner Program</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add any necessary composables or props here
</script>
