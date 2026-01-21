import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuid } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuid(),
      name,
      tasks: [],
    });
  };

  const addTaskToProject = (projectId: string, taskName: string) => {
    if (taskName.length === 0) return;

    const project = projects.value.find((proj) => proj.id === projectId);
    if (!project) return;

    project.tasks.push({
      id: uuid(),
      name: taskName,
      completedAt: null,
    });
  };

  const removeTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((proj) => proj.id === projectId);
    if (!project) return;

    project.tasks = project.tasks.filter((task) => task.id !== taskId);
  };

  const removeProject = (projectId: string) => {
    projects.value = projects.value.filter((proj) => proj.id !== projectId);
  };

  const toggleTaskCompletion = (projectId: string, taskId: string) => {
    const project = projects.value.find((proj) => proj.id === projectId);
    if (!project) return;

    const task = project.tasks.find((task) => task.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? null : new Date();
  };

  return {
    //Properties
    projects,

    //Getters - Computed
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    projectsWithCompletion: computed(() =>
      projects.value.map((project) => {
        const totalTasks = project.tasks.length;
        const completedTasks = project.tasks.filter((task) => task.completedAt !== null).length;
        const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        return { ...project, percentage: Math.round(percentage), completedTasks, totalTasks };
      }),
    ),

    //Actions - Methods
    addProject,
    addTaskToProject,
    toggleTaskCompletion,
    removeTask,
    removeProject,
  };
});
