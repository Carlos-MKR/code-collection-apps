<template>
  <div class="min-h-screen flex flex-col bg-base-200">
    <!-- Top bar -->
    <TopMenu />

    <!-- Body -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-72 shrink-0 border-r bg-base-100">
        <SideMenu />
      </aside>

      <!-- Main content -->
      <main class="flex-1 overflow-y-auto">
        <div class="max-w-6xl mx-auto px-6 py-6">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '@/modules/projects/components/SideMenu.vue';
</script>
