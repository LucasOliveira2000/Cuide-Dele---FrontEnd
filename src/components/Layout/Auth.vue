<script setup>
import { ref, onMounted } from 'vue'
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  Squares2X2Icon,
  ArrowLeftEndOnRectangleIcon
} from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

const router = useRouter()
const userName = ref('')

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    const user = JSON.parse(storedUser)
    userName.value = user.name
  }
})

function logout() {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  router.push("/")
}

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold font-serif text-yellow-600">Cuide&Dele</h1>

      <!-- Menu Desktop -->
      <nav class="hidden md:flex items-center space-x-6">
        <a href="/dashboard" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <Squares2X2Icon class="w-5 h-5" /> Dashboard
        </a>
        <router-link to="/perfil" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <UserCircleIcon class="w-5 h-5" /> {{  userName || 'Perfil' }}
        </router-link>
        <button @click="logout" class="flex items-center cursor-pointer gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
          <ArrowLeftEndOnRectangleIcon class="w-5 h-5" /> Logout
        </button>
      </nav>

      <!-- Botão Mobile -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-yellow-600 focus:outline-none">
        <component :is="mobileMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
      </button>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white px-4 pb-4 space-y-2">
      <a href="/dashboard" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <Squares2X2Icon class="w-5 h-5" /> Dashboard
      </a>
      <router-link to="/perfil" class="flex items-center gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <UserCircleIcon class="w-5 h-5" /> {{ userName }}
      </router-link>
      <button @click="logout" class="flex items-center cursor-pointer gap-1 font-bold text-gray-700 hover:text-yellow-600 transition">
        <ArrowLeftEndOnRectangleIcon class="w-5 h-5" /> Logout
      </button>
    </div>
  </header>

  <section class="px-4 py-4">
    <slot></slot>
  </section>


  <footer class="bg-yellow-200 py-10 mt-20">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

      <div class="text-center">
        <h5 class="text-xl text-gray-800 font-bold font-serif mb-4">Cuide&Dele</h5>
        <p class="text-gray-700 text-sm font-serif leading-relaxed">
          Conectamos cães resgatados a lares cheios de amor. Juntos, damos uma nova chance para quem mais precisa.
        </p>
      </div>

      <div class="text-center">
        <h5 class="text-gray-800 text-xl font-bold font-serif mb-4">Links Rápidos</h5>
        <ul class="space-y-2 text-sm">
          <li><a href="/" class="hover:underline text-gray-700">Início</a></li>
          <li><a href="#sobre_nos" class="hover:underline text-gray-700">Sobre Nós</a></li>
          <li><a href="#contato" class="hover:underline text-gray-700">Contato</a></li>
        </ul>
      </div>

      <div class="text-center">
        <h5 class="text-gray-800 text-xl font-bold font-serif mb-4">Contato</h5>
        <p class="text-gray-700 text-sm">Email: cuidedele@cuidedele.org</p>
        <p class="text-gray-700 text-sm">Telefone: (11) 98765-4321</p>
        <div class="mt-4 flex justify-center md:justify-start space-x-4">
          <a href="#" class="text-gray-700 hover:text-yellow-400">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-700 hover:text-yellow-400">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-700 hover:text-yellow-400">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>

    </div>
    <div class="text-center text-gray-500 text-sm mt-10">
      © 2025 <a href="https://lodev.com.br" target="_blank" class="text-yellow-400 hover:underline font-semibold">LODEV</a>. Todos os direitos reservados.
    </div>
  </footer>
</template>
