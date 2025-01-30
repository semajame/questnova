<template>
  <section class="max-w-7xl mx-auto px-4 pt-[10rem]">
    <h1 class="text-4xl font-bold mb-6 text-black">
      Our <span class="text-[#337092]">Projects</span>
    </h1>

    <div class="grid md:grid-cols-2 gap-6 mt-10">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
      >
        <h2 class="text-xl font-semibold mb-4">{{ project.name }}</h2>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: 'Cebu Holdings Inc. Website',
    description:
      'Cebu Holdings, Inc. (CHI) [www.cebuholdings.com] wanted to transform their old static websites to full dynamic sites because of difficulties updating site contents and limitation of features. CHI also wanted to consolidate the ‘theme’ and ‘look and feel’ of their sites. ',
  },
  {
    id: 2,
    name: 'ABOITIZ FOOD GROUP / PILMICO FOODS CORPORATION Subsidiary Ledger System',
    description:
      'Aboitiz Food Group [www.aboitiz.com] wanted a web-based funds disbursement and liquidation subsidiary ledger system to complement the company’s Oracle ERP System. The subsidiary ledger system integrates the company’s nationwide processing of employee cash advances, travel requests, liquidation and loans. The system featured online funds disbursement application, auto email forwarding to approving officers, online approval, and online liquidation.',
  },
  {
    id: 3,
    name: 'INVENTORY, SALES, PRODUCTION PLAN MANAGEMENT SYSTEM for mobile phone retailer, bakeshop, automobile surplus importer /exporter',
    description:
      'Questnova Systems has successfully implemented various business/operations software solutions for a number of local industries including bakeshops, retailers and importers/exporters. All of the software solutions are web-based and running under Apache Tomcat application servers.',
  },
  {
    id: 4,
    name: 'CEBU PARKMALL Website with Content Management System',
    description:
      '      Questnova devloped Cebu Parkmall’s website [www.parkmallph.com] complete with a content management system. The website featured a mall map, shops database, events database and articles database. The content management system allowed Parkmall staff to update the website contents on their own. ',
  },
]
</script>
