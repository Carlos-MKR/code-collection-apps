<template>
  <aside class="w-72 min-h-screen bg-base-100 border-r border-gray-700 flex flex-col">
    <!-- Header -->
    <div class="px-4 py-4 border-b border-gray-700">
      <RouterLink to="/" class="text-lg font-bold tracking-tight hover:text-primary transition">
        Proyectos
      </RouterLink>
    </div>

    <!-- Empty state -->
    <p v-if="projectsStore.noProjects" class="px-4 py-6 text-sm opacity-60">No hay proyectos</p>

    <!-- Menu -->
    <nav v-else class="flex-1 overflow-y-auto px-2 py-2">
      <ul class="menu menu-sm w-full gap-1">
        <li v-for="project in projectsStore.projects" :key="project.id">
          <!-- Proyecto con tareas -->
          <details v-if="project.tasks.length > 0" class="group">
            <summary class="flex items-center gap-2">
              <!-- Bullet -->
              <span class="w-2 h-2 rounded-full bg-primary opacity-70"></span>

              <!-- Proyecto -->
              <RouterLink
                :to="`/project/${project.id}`"
                class="flex-1 truncate"
                active-class="border-b border-b-primary font-bold"
              >
                {{ project.name }}
              </RouterLink>
            </summary>

            <!-- Tareas -->
            <ul class="ml-6 mt-1">
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink
                  :to="`/project/${project.id}`"
                  class="text-sm opacity-70 hover:opacity-100 truncate"
                >
                  {{ task.name }}
                </RouterLink>
              </li>
            </ul>
          </details>

          <!-- Proyecto sin tareas -->
          <RouterLink
            v-else
            :to="`/project/${project.id}`"
            class="flex items-center gap-2"
            active-class="border-b border-b-primary font-bold"
          >
            <span class="w-2 h-2 rounded-full bg-primary opacity-70"></span>
            <span class="truncate">{{ project.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore();
</script>
