<template>
  <section class="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg relative">

      <div class="absolute top-4 left-4">
        <router-link to="/" class="flex items-center text-sm text-yellow-600 hover:underline">
          <ArrowLeftIcon class="w-5 h-5 text-gray-700 me-1" />Voltar
        </router-link>
      </div>
      <h2 class="text-2xl font-bold font-serif text-gray-800 mb-6 text-center">Entrar na Conta</h2>

      <form class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            id="password"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="********"
          />
        </div>

        <div class="flex items-center justify-between text-sm">
          <router-link to="/esqueci-senha" class="text-yellow-500 hover:underline">Esqueceu a senha?</router-link>
        </div>

        <button
          type="submit"
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Entrar
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Não tem uma conta?
        <router-link to="/registrar" class="text-yellow-500 hover:underline font-medium">
          Registrar-se
        </router-link>
      </p>

    </div>
  </section>
</template>

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'



</script>
