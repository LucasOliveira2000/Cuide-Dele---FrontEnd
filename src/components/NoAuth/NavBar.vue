<script setup lang="ts">
import { ref } from 'vue'
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/solid'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold font-serif text-yellow-600">Cuide&Dele</h1>

      <!-- Menu Desktop -->
      <nav class="hidden md:flex items-center space-x-6">
        <a href="#inicio" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <HomeIcon class="w-5 h-5" />
          Início
        </a>
        <a href="#sobre_nos" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <InformationCircleIcon class="w-5 h-5" />
          Sobre
        </a>
        <a href="#contato" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <EnvelopeIcon class="w-5 h-5" />
          Contato
        </a>
        <router-link to="/login" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <ArrowRightEndOnRectangleIcon class="w-5 h-5" />
          Login
        </router-link>
      </nav>

      <!-- Botão Mobile -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-yellow-600 focus:outline-none">
        <component :is="mobileMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
      </button>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white px-4 pb-4 space-y-2">
      <a href="#inicio" class="block flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <HomeIcon class="w-5 h-5" />
        Início
      </a>
      <a href="#sobre_nos" class="block flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <InformationCircleIcon class="w-5 h-5" />
        Sobre
      </a>
      <a href="#contato" class="block flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <EnvelopeIcon class="w-5 h-5" />
        Contato
      </a>
      <router-link to="/login" class="block flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <ArrowRightEndOnRectangleIcon class="w-5 h-5" />
        Login
      </router-link>
    </div>
  </header>
</template>
