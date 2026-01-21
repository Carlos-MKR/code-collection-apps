<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ tittle || 'Hello!' }}</h3>
      <p v-if="subtittle" class="py-4">
        {{ subtittle || 'Press ESC key or click the button below to close' }}
      </p>

      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder || 'Ingrese un valor...'"
            class="input input-bordered w-full flex-1 input-primary"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button class="btn mr-4" @click="$emit('close')">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
  placeholder?: string;
  tittle: string;
  subtittle?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

watch(props, ({ open }) => {
  if (open) {
    // Focus the input when the modal opens
    setTimeout(() => {
      inputRef.value?.focus();
    }, 100);
  }
});

const submitValue = () => {
  console.log(inputValue.value);
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};
</script>
