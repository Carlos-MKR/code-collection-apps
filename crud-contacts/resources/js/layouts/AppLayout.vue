<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { BreadcrumbItem } from '@/types';


const page = usePage() as any;
type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

// quitar la alerta de los flash
setTimeout(() => {
    page.props.flash.success = null;
    page.props.flash.error = null;
}, 9000);

</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <!-- Flash Success -->
        <transition name="fade">
            <div
                v-if="page.props.flash.success"
                class="fixed top-6 right-6 z-50 rounded-xl bg-green-600 px-6 py-3 text-white shadow-lg"
            >
                {{ page.props.flash.success }}
            </div>
        </transition>

        <!-- Flash Error -->
        <transition name="fade">
            <div
                v-if="page.props.flash.error"
                class="fixed top-6 right-6 z-50 rounded-xl bg-red-600 px-6 py-3 text-white shadow-lg"
            >
                {{ page.props.flash.error }}
            </div>
        </transition>
        <slot />
    </AppLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>