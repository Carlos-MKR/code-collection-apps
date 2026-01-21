<template>
  <nav class="breadcrumbs text-sm px-4 py-2 bg-base-100 rounded-lg shadow-sm">
    <ul class="flex items-center gap-2 text-gray-500">
      <!-- Home -->
      <li>
        <RouterLink to="/" class="flex items-center gap-1 hover:text-cyan-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 9.75L12 4l9 5.75V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.75z"
            />
          </svg>
          <span>Inicio</span>
        </RouterLink>
      </li>

      <!-- Página actual -->
      <li class="flex items-center gap-1 text-gray-400 font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 7h10M7 11h10M7 15h6"
          />
        </svg>
        <span>{{ name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>
