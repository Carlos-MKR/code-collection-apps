<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { Head } from '@inertiajs/vue3'
import ContactForm from '@/components/common/ContactForm.vue'

const breadcrumbs = [
    { title: 'Mis Contactos', href: route('contacts.index') },
    { title: 'Nuevo Contacto' }
]
</script>

<template>
    <Head title="Nuevo Contacto" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-8 w-3xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Nuevo Contacto
            </h1>

            <ContactForm
                :url="route('contacts.store')"
                method="post"
            />
        </div>
    </AppLayout>
</template>
