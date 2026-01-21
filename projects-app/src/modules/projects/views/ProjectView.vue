<template>
  <!-- Breadcrumbs -->
  <section class="mb-6">
    <BreadCrumbs :name="project?.name ?? 'Proyecto'" />
  </section>

  <div>
    <!-- Header del proyecto -->
    <section class="mb-6">
      <h1 class="text-2xl font-bold text-base-content">
        {{ project?.name }}
      </h1>
      <p class="text-sm opacity-60">Gestiona las tareas de tu proyecto</p>
    </section>

    <!-- Card de tareas -->
    <section class="card bg-base-100 shadow-md">
      <div class="card-body p-0">
        <template v-if="project?.tasks && project.tasks.length > 0">
          <!-- Header tabla -->
          <div
            class="grid grid-cols-[40px_1fr_180px_40px] px-6 py-3 border-b text-sm font-semibold opacity-70"
          >
            <div class="text-center">✔</div>
            <div>Tarea</div>
            <div>Completada en</div>
            <div></div>
          </div>

          <!-- Lista de tareas -->
          <div
            v-for="task in project?.tasks"
            :key="task.id"
            class="group grid grid-cols-[40px_1fr_180px_40px] items-center px-6 py-3 hover:bg-base-200 transition"
          >
            <!-- Checkbox -->
            <div class="text-center">
              <input
                type="checkbox"
                class="checkbox checkbox-primary"
                :checked="task.completedAt !== null"
                @change="projectStore.toggleTaskCompletion(project?.id ?? '', task.id)"
              />
            </div>

            <!-- Nombre -->
            <div
              class="truncate"
              :class="{ 'line-through text-base-content/50': task.completedAt }"
            >
              {{ task.name }}
            </div>

            <!-- Fecha -->
            <div class="text-sm opacity-60">
              {{ task.completedAt ?? '—' }}
            </div>

            <!-- Eliminar -->
            <div class="text-right opacity-0 group-hover:opacity-100 transition">
              <button
                class="btn btn-ghost btn-xs text-error bg-red-400/10 hover:bg-red-400/80"
                @click="projectStore.removeTask(project?.id ?? '', task.id)"
                title="Eliminar tarea"
              >
                🗑
              </button>
            </div>
          </div>
        </template>

        <!-- Empty state -->
        <div v-else class="flex flex-col items-center justify-center py-20 opacity-60">
          <h1 class="text-2xl font-bold">No hay tareas en este proyecto</h1>
          <p class="text-sm">Agrega una nueva tarea para comenzar</p>
        </div>

        <!-- Nueva tarea -->
        <div class="px-6 py-4 border-t bg-base-200">
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            type="text"
            class="input input-primary w-full"
            placeholder="➕ Agregar nueva tarea y presiona Enter"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();
const newTask = ref('');

const addTask = () => {
  if (!newTask.value) return;

  projectStore.addTaskToProject(props.id, newTask.value);

  newTask.value = '';
};

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id) || null;
    if (!project.value) {
      router.replace('/projects');
    }
  },
  { immediate: true },
);
</script>
