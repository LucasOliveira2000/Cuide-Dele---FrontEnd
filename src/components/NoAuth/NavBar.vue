<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowLeftEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  Squares2X2Icon
} from '@heroicons/vue/24/solid'


const router = useRouter()
const mobileMenuOpen = ref(false)

const userName = ref('')

const storage_user = localStorage.getItem("user");
if (storage_user) {
  try {
    const user = JSON.parse(storage_user);
    userName.value = user.name || null;
  } catch (e) {
    console.error("Erro ao analisar o JSON do usuário:", e);
  }
}

function logout() {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  router.push("/")
}
</script>

<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold font-serif text-yellow-600">Cuide&Dele</h1>

      <!-- Menu Desktop -->
      <nav class="hidden md:flex items-center space-x-6">
        <a href="#inicio" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <HomeIcon class="w-5 h-5" /> Início
        </a>
        <a href="#sobre_nos" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <InformationCircleIcon class="w-5 h-5" /> Sobre
        </a>
        <a href="#contato" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <EnvelopeIcon class="w-5 h-5" /> Contato
        </a>
        <template v-if="userName">
          <a href="/dashboard" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
            <Squares2X2Icon class="w-5 h-5" /> Dashboard
          </a>
          <router-link to="/perfil" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
            <UserCircleIcon class="w-5 h-5" /> {{ userName || 'Perfil' }}
          </router-link>
          <button @click="logout" class="flex items-center cursor-pointer gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
            <ArrowLeftEndOnRectangleIcon class="w-5 h-5" /> Logout
          </button>
        </template>
        <template v-else>
          <router-link to="/login" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
            <ArrowRightEndOnRectangleIcon class="w-5 h-5" /> Login
          </router-link>
        </template>
      </nav>

      <!-- Botão Mobile -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-yellow-600 focus:outline-none">
        <component :is="mobileMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
      </button>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white px-4 pb-4 space-y-2">
      <a href="#inicio" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <HomeIcon class="w-5 h-5" /> Início
      </a>
      <a href="#sobre_nos" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <InformationCircleIcon class="w-5 h-5" /> Sobre
      </a>
      <a href="#contato" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <EnvelopeIcon class="w-5 h-5" /> Contato
      </a>
      <template v-if="userName">
        <a href="/dashboard" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <Squares2X2Icon class="w-5 h-5" /> Dashboard
        </a>
        <router-link to="/perfil" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <UserCircleIcon class="w-5 h-5" /> {{ userName || 'Perfil' }}
        </router-link>
        <button @click="logout" class="flex cursor-pointer items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <ArrowLeftEndOnRectangleIcon class="w-5 h-5" /> Logout
        </button>
      </template>
      <template v-else>
        <router-link to="/login" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <ArrowRightEndOnRectangleIcon class="w-5 h-5" /> Login
        </router-link>
      </template>
    </div>
  </header>
</template>
