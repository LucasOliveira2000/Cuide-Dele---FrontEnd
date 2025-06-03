<template>
  <div class="min-h-screen bg-white">
    <!-- Inicio Navbar -->
    <NavBar/>
    <!-- Fim Navbar -->

    <!-- Inicio -->
    <section class="bg-yellow-200 py-16 rounded-b-4xl">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-extrabold font-serif text-gray-800 mb-4">Dê um lar para quem mais precisa</h2>
        <p class="text-lg text-gray-700 mb-6">Encontre seu novo melhor amigo entre dezenas de cães para adoção.</p>
        <button class="bg-yellow-500 text-white font-semibold cursor-pointer px-6 py-3 rounded hover:bg-yellow-600 transition">
          Ver cães disponíveis
        </button>
      </div>
    </section>

    <!-- Apresentação dos Pets -->
    <section class="flex text-center py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-extrabold font-serif text-gray-800 mb-8">Cães para Adoção</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow p-4">
            <img src="../../../../public/cachorro.jpeg" alt="Cachorro" class="w-full h-48 object-cover rounded">
            <h4 class="text-lg font-semibold mt-4">Thor</h4>
            <p class="text-gray-600 text-sm">Macho · 2 anos · Porte médio</p>
            <button class="mt-4 bg-yellow-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-yellow-600">Quero Adotar</button>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <img src="../../../../public/cachorro.jpeg" alt="Cachorro" class="w-full h-48 object-cover rounded">
            <h4 class="text-lg font-semibold mt-4">Luna</h4>
            <p class="text-gray-600 text-sm">Fêmea · 1 ano · Porte pequeno</p>
            <button class="mt-4 bg-yellow-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-yellow-600">Quero Adotar</button>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <img src="../../../../public/cachorro.jpeg" alt="Cachorro" class="w-full h-48 object-cover rounded">
            <h4 class="text-lg font-semibold mt-4">Max</h4>
            <p class="text-gray-600 text-sm">Macho · 3 anos · Porte grande</p>
            <button class="mt-4 bg-yellow-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-yellow-600">Quero Adotar</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Sobre Nós -->
    <section class="bg-yellow-200 py-16 scroll-m-5 rounded-t-4xl" id="sobre_nos">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold font-serif text-gray-800 mb-6">Sobre Nós</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Somos uma organização sem fins lucrativos dedicada a encontrar lares amorosos para cães resgatados.
          Acreditamos que cada animal merece uma segunda chance e trabalhamos com carinho para conectar pessoas e pets.
        </p>
        <div class="mt-8">
          <img  src="../../../../public/equipe_pet.jpg" class="rounded-lg shadow-md object-cover mx-auto" alt="Equipe cuidando dos cães" />
        </div>
      </div>
    </section>

    <!-- Section Contato -->
    <section class="bg-white py-16 border-t border-yellow-300 scroll-m-5" id="contato">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-8 font-serif">Entre em Contato</h2>
        <p class="text-lg text-gray-700 text-center mb-10">
          Tem alguma dúvida, sugestão ou quer nos ajudar? Envie uma mensagem!
        </p>

        <form class="space-y-6 bg-yellow-100 p-8 rounded-lg shadow-lg">
          <div>
            <label class="block text-lg font-medium text-gray-800 mb-2" for="nome">Nome</label>
            <input
              type="text"
              id="nome"
              class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 text-base"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label class="block text-lg font-medium text-gray-800 mb-2" for="email">E-mail</label>
            <input
              type="email"
              id="email"
              class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 text-base"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label class="block text-lg font-medium text-gray-800 mb-2" for="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="6"
              class="w-full px-4 py-3 rounded-md border resize-none border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 text-base"
              placeholder="Escreva sua mensagem aqui..."
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="bg-yellow-500 text-white font-semibold text-lg px-6 py-3 rounded cursor-pointer hover:bg-yellow-600 transition"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Section Footer -->
     <section class="">
        <Footer/>
     </section>

  </div>
</template>

<script setup>
import NavBar from '@/components/NoAuth/NavBar.vue';
import Footer from '@/components/NoAuth/Footer.vue';



</script>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>
