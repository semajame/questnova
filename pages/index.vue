<!-- app.vue -->
<template>
  <div class="min-h-screen relative">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
    ></div>

    <!-- Hero Section -->
    <div class="relative pt-[5.5rem] min-h-screen pb-[5rem]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="pt-20 pb-16 text-center">
          <h1 class="tracking-tight font-extrabold">
            <span
              class="block bg-gradient-to-t from-[#a0c5db] to-[#245068] bg-clip-text md:text-6xl text-5xl text-transparent md:max-w-[800px] md:mx-auto"
            >
              Premium Software Solutions For Your Business
            </span>
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-md text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Cebu's leading provider of premium web, mobile and business software
            applications. Specializing in customized solutions that drive your
            business forward.
          </p>
          <div
            class="mt-5 max-w-md mx-auto flex flex-col sm:flex sm:flex-row sm:justify-center md:mt-8 gap-2"
          >
            <div class="rounded-lg shadow">
              <NuxtLink
                to="/#contact"
                class="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-md font-medium rounded-md text-white bg-[#337092] hover:bg-[#245068] transition-all duration-[500ms] ease-in-out md:py-4 md:px-6"
              >
                Get Started
                <Icon
                  name="iconamoon:arrow-right-2"
                  width="28"
                  height="28"
                  class="ml-1 transform transition-transform duration-[500ms] ease-in-out group-hover:translate-x-1"
                />
              </NuxtLink>
            </div>
            <div class="rounded-lg shadow">
              <NuxtLink
                to="/#about"
                class="group w-full flex items-center justify-center px-8 py-3 border-2 border-[#245068] text-md font-medium rounded-md text-black bg-white hover:bg-[#245068] hover:text-white transition-all duration-[500ms] ease-in-out md:py-4 md:px-6"
              >
                What we are
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <About id="about" />

    <Services />

    <!-- Services Section -->
    <div id="services" class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold text-black">
            More of our <span class="text-[#337092]">Services</span>
          </h2>
          <p class="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="(service, index) in services" :key="index" class="pt-6">
              <div
                class="flow-root bg-white rounded-lg px-6 pb-8 pt-4 hover:bg-white/80 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div>
                  <span v-html="service.icon"> </span>
                  <h3
                    class="mt-5 text-lg font-medium text-gray-900 tracking-tight"
                  >
                    {{ service.title }}
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Section -->

    <Projects id="projects" />

    <!-- WHERE TO START -->
    <section class="bg-gray-100 py-12 mt-12">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h1 class="text-3xl font-semibold text-gray-800 mb-4">
          Not sure where to start?
        </h1>
        <p class="text-lg text-gray-600">
          We can schedule a
          <span class="font-semibold text-indigo-600">free consultation</span>,
          identify your requirements, and discuss on how we'll build your next
          solution together.
        </p>
      </div>
    </section>
    <Footer id="contact" />
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions to meet your specific business needs, built with Java and modern technologies.',
    icon: `	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
		<g fill="none" stroke="#f8c42d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#f8c42d">
			<path d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052l.52-2.56l.94-.464c.505-.248.756-.373.81-.6c.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506s-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2C6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8 8 0 0 0 2.027.987" />
			<path d="m14 9l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L7 12m4.5-4l-2 5" />
		</g>
	</svg>

`,
  },
  {
    title: 'Web Development',
    description:
      'Professional web applications, portals, and e-commerce solutions with complete content management systems.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 14 14">
		<g fill="none" stroke="#5dc1e4" stroke-linecap="round" stroke-linejoin="round">
			<path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13" />
			<path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7" />
		</g>
	</svg>`,
  },
  {
    title: 'Mobile Applications',
    description:
      'Cutting-edge mobile solutions including salesforce automation and SMS gateway integration.',
    icon: `
	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
		<path fill="none" stroke="#dd4ded" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.286 3H7.714C6.768 3 6 3.806 6 4.8v14.4c0 .994.768 1.8 1.714 1.8h8.572c.947 0 1.714-.806 1.714-1.8V4.8c0-.994-.767-1.8-1.714-1.8M10.5 6h3" />
	</svg>`,
  },
  {
    title: 'Systems Integration',
    description:
      'Seamless integration of disparate systems to create comprehensive, interoperable solutions.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
		<path fill="#eb45d4" d="M1 2h22v16H1zm2 2v12h18V4zm12 2.086L18.914 10L15 13.914L13.586 12.5l2.5-2.5l-2.5-2.5zM10.414 7.5l-2.5 2.5l2.5 2.5L9 13.914L5.086 10L9 6.086zM3 20h18v2H3z" />
	</svg>`,
  },
  {
    title: 'Offshore Development',
    description:
      'Cost-effective software development services for international clients with expert IT talents.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-8 w-8 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  },
  {
    title: 'Ready-to-use Solutions',
    description:
      'Pre-built solutions for HR, retail, food industry, and more, customizable to your needs.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
		<path fill="none" stroke="#2ee0c8" stroke-linecap="round" stroke-linejoin="round" d="M9 .5v6l3.59 4.57a1.5 1.5 0 0 1-1.18 2.43H2.59a1.5 1.5 0 0 1-1.18-2.43L5 6.5v-6M3.5.5h7" />
	</svg>`,
  },
]
</script>
