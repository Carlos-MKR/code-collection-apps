<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    contact: {
        type: Object,
        default: () => ({}),
    },
    url: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        default: 'post',
    },
});

// Form dinámico
const form = useForm({
    _method: props.method === 'put' ? 'put' : undefined,
    name: props.contact.name || '',
    email: props.contact.email || '',
    phone: props.contact.phone || '',
    image: null,
});

// Preview imagen
const preview = ref(
    props.contact.image ? `/storage/${props.contact.image}` : null,
);

function handleFileChange(e) {
    const file = e.target.files[0];
    form.image = file;

    if (file) {
        preview.value = URL.createObjectURL(file);
    }
}

function submit() {
    form.post(props.url, {
        forceFormData: true,
        preserveScroll: true,
    });
}
</script>

<template>
    <form
        @submit.prevent="submit"
        class="space-y-8 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl backdrop-blur-xl transition-all"
    >
        <!-- Avatar Section -->
        <div class="flex flex-col items-center">
            <div class="group relative">
                <div
                    class="h-32 w-32 overflow-hidden rounded-full border border-zinc-700 shadow-lg"
                >
                    <img
                        v-if="preview"
                        :src="preview"
                        class="h-full w-full object-cover"
                    />
                    <div
                        v-else
                        class="flex h-full w-full items-center justify-center bg-zinc-800 text-2xl font-semibold text-zinc-500"
                    >
                        ?
                    </div>
                </div>

                <!-- Hover overlay -->
                <label
                    class="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 text-sm text-white opacity-0 transition group-hover:opacity-100"
                >
                    Cambiar
                    <input
                        type="file"
                        accept="image/*"
                        @change="handleFileChange"
                        class="hidden"
                    />
                </label>
            </div>
            <p v-if="form.errors.image" class="mt-2 text-sm text-red-400">
                {{ form.errors.image }}
            </p>

            <p class="mt-3 text-xs text-zinc-500">JPG o PNG • Máx 2MB</p>
        </div>

        <!-- Inputs -->
        <div class="space-y-5">
            <!-- Nombre -->
            <div class="space-y-2">
                <label class="text-sm text-zinc-400">Nombre</label>
                <input
                    v-model="form.name"
                    type="text"
                    placeholder="Juan Pérez"
                    class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p v-if="form.errors.name" class="text-sm text-red-400">
                    {{ form.errors.name }}
                </p>
            </div>

            <!-- Email -->
            <div class="space-y-2">
                <label class="text-sm text-zinc-400">Email</label>
                <input
                    v-model="form.email"
                    type="email"
                    placeholder="correo@email.com"
                    class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p v-if="form.errors.email" class="text-sm text-red-400">
                    {{ form.errors.email }}
                </p>
            </div>

            <!-- Teléfono -->
            <div class="space-y-2">
                <label class="text-sm text-zinc-400">Teléfono</label>
                <input
                    v-model="form.phone"
                    type="text"
                    placeholder="Opcional"
                    class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p v-if="form.errors.phone" class="text-sm text-red-400">
                    {{ form.errors.phone }}
                </p>
            </div>
        </div>

        <!-- Button -->
        <button
            type="submit"
            :disabled="form.processing"
            class="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition-all hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50"
        >
            {{ props.method === 'put' ? 'Guardar cambios' : 'Crear contacto' }}
        </button>
    </form>
</template>
