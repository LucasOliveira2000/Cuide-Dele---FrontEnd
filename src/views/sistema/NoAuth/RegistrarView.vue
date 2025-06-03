<template>
  <div class="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
    <div class="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg relative">
      <div class="absolute top-4 left-4">
        <router-link to="/" class="flex items-center text-sm text-yellow-600 hover:underline">
          <ArrowLeftIcon class="w-5 h-5 text-gray-700 me-1" />Voltar para o Início
        </router-link>
      </div>

      <h2 class="text-2xl font-bold font-serif text-center text-gray-800 mb-6">Criar Conta</h2>

      <form @submit.prevent="registrar">
        <div class="grid grid-cols-1 md:grid-cols-3  gap-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input v-model="form.name" type="text" name="name" id="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Seu nome" />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input v-model="form.email" type="email" name="email" id="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="seu@email.com" />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input v-model="form.password" type="password" name="password" id="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="********" />
          </div>

          <div>
            <label for="telefone" class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input v-model="form.telefone" name="telefone" id="telefone" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="xxxxxxxxxxx" />
          </div>

          <div>
            <label for="cpf" class="block text-sm font-medium text-gray-700 mb-1">CPF</label>
            <input v-model="form.cpf" type="text" name="cpf" id="cpf" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="xxx.xxx.xxx-xx" />
          </div>

          <div>
            <label for="cep" class="block text-sm font-medium text-gray-700 mb-1">CEP</label>
            <input v-model="form.cep" type="text" name="cep" id="cep" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="54789470" />
          </div>

          <div>
            <label for="estado" class="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <input v-model="form.estado" type="text" name="estado" id="estado" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="SP" />
          </div>

          <div>
            <label for="cidade" class="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
            <input v-model="form.cidade" type="text" name="cidade" id="cidade" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="São Paulo" />
          </div>

          <div>
            <label for="bairro" class="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
            <input v-model="form.bairro" type="text" name="bairro" id="bairro" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Centro" />
          </div>

          <div>
            <label for="numero" class="block text-sm font-medium text-gray-700 mb-1">Número</label>
            <input v-model="form.numero" type="text" name="numero" id="numero" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="123" />
          </div>

          <div>
            <label for="complemento" class="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
            <input v-model="form.complemento" type="text" name="complemento" id="complemento" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Apartamento, bloco..." />
          </div>
        </div>

        <div class="md:col-span-2 mt-8">
          <button type="submit" class="w-full bg-yellow-500 text-white py-2 rounded-md cursor-pointer hover:bg-yellow-600 transition">
            Criar Conta
          </button>
        </div>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Já tem uma conta?
        <router-link to="/login" class="text-yellow-500 hover:underline font-medium">Entrar</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'

const router = useRouter()
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  password: '',
  telefone: '',
  cpf: '',
  cep: '',
  estado: '',
  cidade: '',
  bairro: '',
  numero: '',
  complemento: ''
})

const registrar = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/cliente/registrar', form)
    router.push('/login')
  } catch (error) {
    errorMessage.value = error.response?.data?.mensagem || 'Erro ao registrar usuário'
  }
}
</script>
