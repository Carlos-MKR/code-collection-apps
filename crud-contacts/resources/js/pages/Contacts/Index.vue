<script setup>
import { Link, router } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue';

defineProps({
    contacts: Array
})

function destroy(id) {
    if (confirm('¿Seguro que deseas eliminar este contacto?')) {
        router.delete(route('contacts.destroy', id))
    }
}
</script>

<template>
    <Head title="Mis Contactos" />

    <AppLayout>
        <div class="p-8 md:p-12 lg:p-16 w-6xl mx-auto space-y-6 md:space-y-12 lg:space-y-16">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-white bg-black px-4 py-2 rounded-md">Mis Contactos ({{ contacts.length }})</h1>
                <Link
                    :href="route('contacts.create')"
                    class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                >
                    + Nuevo Contacto
                </Link>
            </div>

            <!-- Lista minimalista -->
            <ul class="divide-y divide-gray-200">
                <li 
                    v-for="contact in contacts" 
                    :key="contact.id" 
                    class="flex items-center justify-between py-4"
                >
                    <div class="flex items-center space-x-4">
                        <img
                            v-if="contact.image"
                            :src="`/storage/${contact.image}`"
                            class="w-10 h-10 rounded-full object-cover"
                        />
                        <div
                            v-else
                            class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium text-sm"
                        >
                            ?
                        </div>
                        <div class="flex flex-col">
                            <span class="font-medium text-white-600">{{ contact.name }}</span>
                            <span class="text-gray-500 text-sm">{{ contact.email }}</span>
                            <span class="text-gray-400 text-xs">
                                {{ contact.phone ? contact.phone : 'Sin telefono' }}
                            </span>
                        </div>
                    </div>

                    <div class="flex space-x-3">
                        <Link
                            :href="route('contacts.edit', contact.id)"
                            class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                        >
                            Editar
                        </Link>
                        <button
                            @click="destroy(contact.id)"
                            class="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700 transition"
                        >
                            Eliminar
                        </button>
                    </div>
                </li>

                <li v-if="contacts.length === 0" class="text-center text-gray-400 py-8">
                    No tienes contactos aún.
                </li>
            </ul>
        </div>
    </AppLayout>
</template>
