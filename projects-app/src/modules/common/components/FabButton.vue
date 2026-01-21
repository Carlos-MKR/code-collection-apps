<template>
  <button
    :class="[
      'btn btn-circle fixed bg-gray-600 hover:bg-gray-700 flex items-center justify-center',
      position,
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});

defineEmits(['click']);
</script>

<style scoped>
@reference "tailwindcss";

.bottom-right {
  @apply bottom-8 right-8;
}
.bottom-left {
  @apply bottom-8 left-8;
}
.top-right {
  @apply top-8 right-8;
}
.top-left {
  @apply top-8 left-8;
}
</style>
