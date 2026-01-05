<template>
  <section class="-mt-12">
    <div
      class="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl px-6 py-4 flex items-center gap-6"
    >
      <!-- Score -->
      <div class="flex flex-col text-center">
        <p class="text-[10px] tracking-widest text-gray-500 uppercase">Puntos</p>
        <p class="text-4xl font-semibold text-gray-900 leading-none">{{ score }}</p>
      </div>

      <!-- Divider -->
      <div v-if="currentStatus != GameStatus.Playing" class="h-10 w-px bg-gray-300/60"></div>

      <!-- Restart Button -->
      <button
        v-if="currentStatus == GameStatus.Lost"
        @click="$emit('resetGame')"
        class="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300/70 rounded-xl px-4 py-2 hover:bg-gray-100/60 transition-all active:scale-95 hover:cursor-pointer"
      >
        <span class="text-lg">⟳</span>
        Reiniciar
      </button>

      <button
        v-if="currentStatus == GameStatus.Won"
        @click="$emit('newGame')"
        class="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300/70 rounded-xl px-4 py-2 hover:bg-gray-100/60 transition-all active:scale-95 hover:cursor-pointer"
      >
        Siguiente >
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GameStatus } from '../interfaces';

defineEmits<{
  newGame: [];
  resetGame: [];
}>();

interface Props {
  currentStatus: GameStatus;
  score: number;
}

defineProps<Props>();
</script>
