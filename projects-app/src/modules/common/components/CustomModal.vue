<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-b-cyan-600 my-2">
        <slot name="header" />
      </div>
      <div class="border-b border-b-cyan-600">
        <slot name="body" />
      </div>
      <div class="modal-action">
        <slot name="footer" />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
