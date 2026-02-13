<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3'
import { Users, Plus, Folder } from 'lucide-vue-next'
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];


defineProps<{
    contactsCount: number
}>()
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-8 bg-zinc-950 min-h-screen text-zinc-100">
        
        <!-- Título -->
        <h1 class="text-3xl font-semibold mb-8">
            Dashboard
        </h1>

        <!-- Grid -->
        <div class="grid md:grid-cols-3 gap-6">

            <!-- Card Total Contactos -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-sm text-zinc-400">Total de contactos</p>
                        <h2 class="text-4xl font-bold mt-2">
                            {{ contactsCount }}
                        </h2>
                    </div>

                    <div class="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 text-2xl">
                        <Users class="w-8 h-8" />
                    </div>
                </div>
            </div>

            <!-- Card Crear -->
            <Link
                href="/contacts/create"
                class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-emerald-500/40 transition group"
            >
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-sm text-zinc-400">Nuevo contacto</p>
                        <h2 class="text-xl font-semibold mt-2 group-hover:text-emerald-400 transition">
                            Crear contacto
                        </h2>
                    </div>

                    <div class="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 text-2xl">
                        <Plus class="w-8 h-8" />
                    </div>
                </div>
            </Link>

            <!-- Card Ver Todos -->
            <Link
                href="/contacts"
                class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition group"
            >
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-sm text-zinc-400">Administrar</p>
                        <h2 class="text-xl font-semibold mt-2 group-hover:text-blue-400 transition">
                            Ver contactos
                        </h2>
                    </div>

                    <div class="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-2xl">
                        <Folder class="w-8 h-8" />
                    </div>
                </div>
            </Link>

        </div>
    </div>
    </AppLayout>
</template>
