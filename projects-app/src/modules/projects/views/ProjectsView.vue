<template>
  <section class="max-w-5xl mx-auto px-4 py-6">
    <!-- Header -->
    <header class="mb-6">
      <h1 class="text-2xl font-bold">Proyectos</h1>
      <p class="text-sm opacity-60">Visualiza el avance de todos tus proyectos</p>
    </header>

    <!-- Card -->
    <div class="card bg-base-100 shadow-md">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- Head -->
          <thead class="bg-base-200">
            <tr>
              <th class="w-10">#</th>
              <th>Proyecto</th>
              <th class="text-center">Tareas</th>
              <th class="w-72">Avance</th>
              <th></th>
            </tr>
          </thead>

          <!-- Body -->
          <tbody>
            <tr
              v-for="(project, index) in projectsStore.projectsWithCompletion"
              :key="project.id"
              class="group hover:bg-base-200 transition"
            >
              <!-- Index -->
              <th class="opacity-50">
                {{ index + 1 }}
              </th>

              <!-- Name -->
              <td class="font-medium">
                {{ project.name }}
              </td>

              <!-- Tasks -->
              <td class="text-center text-sm opacity-70">
                {{ project.completedTasks }} / {{ project.totalTasks }}
              </td>

              <!-- Progress -->
              <td>
                <div class="flex items-center gap-3">
                  <progress
                    class="progress progress-info flex-1"
                    :value="project.percentage"
                    max="100"
                  />
                  <span class="text-sm font-medium w-10 text-right">
                    {{ project.percentage }}%
                  </span>
                </div>
              </td>
              <td>
                <div class="text-right opacity-0 group-hover:opacity-100 transition">
                  <button
                    class="btn btn-ghost btn-xs text-error bg-red-400/10 hover:bg-red-400/80"
                    @click="projectsStore.removeProject(project?.id ?? '')"
                    title="Eliminar proyecto"
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>

            <!-- Empty state -->
            <tr v-if="!projectsStore.projectsWithCompletion.length">
              <td colspan="5" class="py-14">
                <div class="flex flex-col items-center justify-center gap-4 text-center">
                  <!-- Icon -->
                  <div class="text-4xl opacity-60">📂</div>

                  <!-- Text -->
                  <div>
                    <p class="text-lg font-semibold">No hay proyectos aún</p>
                    <p class="text-sm opacity-60">Comienza agregando tu primer proyecto</p>
                  </div>

                  <!-- CTA -->
                  <button class="btn btn-primary btn-sm mt-2" @click="modalOpen = true">
                    + Agregar proyecto
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modals -->
    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="projectsStore.addProject"
      placeholder="Ingrese el nombre del proyecto"
      tittle="Nuevo Proyecto"
      subtittle="Dale un nombre a tu nuevo proyecto"
    />

    <!-- <CustomModal :open="customModalOpen">
      <template #header>
        <h3 class="text-xl font-bold">Custom Modal</h3>
      </template>
      <template #body>
        <p class="py-4 opacity-70">This is a custom modal with header, body, and footer.</p>
      </template>
      <template #footer>
        <button @click="customModalOpen = false" class="btn btn-primary">Cerrar</button>
      </template>
    </CustomModal> -->

    <!-- <FabButton @click="customModalOpen = true" position="bottom-left">
      <CustomModalIcon />
    </FabButton> -->

    <!-- FABs -->
    <FabButton @click="modalOpen = true">
      <AddCircle />
    </FabButton>
  </section>
</template>

<script setup lang="ts">
// import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
// import CustomModalIcon from '@/modules/common/icons/CustomModal.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
// const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
