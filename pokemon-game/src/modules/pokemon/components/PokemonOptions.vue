<template>
  <section class="mt-5">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      :class="[
        'bg-white shadow-md rounded-lg p-3 m-2 text-center cursor-pointer w-40 hover:bg-gray-100 transition-all capitalize flex items-center justify-center disabled:shadow-none disabled:bg-gray-100',
        {
          correct: id === correctAnswer && blockedOptions,
          incorrect: id !== correctAnswer && blockedOptions,
        },
      ]"
      :disabled="blockedOptions"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockedOptions?: boolean;
  correctAnswer?: number;
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<style scoped>
.correct {
  background-color: transparent;
  color: #16a34a;
  border: 2px solid #86efac;
}

.incorrect {
  background-color: transparent;
  color: #dc2626;
  border: 2px solid #fca5a5;
}
</style>
