<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { Head } from '@inertiajs/vue3'
import ContactForm from '@/components/common/ContactForm.vue'

const props = defineProps({
    contact: Object
})

const breadcrumbs = [
    { title: 'Mis Contactos', href: route('contacts.index') },
    { title: 'Editar Contacto' }
]
</script>

<template>
    <Head title="Editar Contacto" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-8 w-3xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Editar Contacto
            </h1>

            <ContactForm
                :contact="contact"
                :url="route('contacts.update', contact.id)"
                method="put"
            />
        </div>
    </AppLayout>
</template>
