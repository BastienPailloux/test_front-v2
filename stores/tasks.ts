import { defineStore } from 'pinia'

import { useApi } from '~/composables/useApi.composable'

import type { Task } from '~/types/Task'

export const useTasksStore = defineStore('tasks', () => {
  const api = useApi()
  const tasks = ref<Task[]>([])

  const fetchTasks = async () => {
    tasks.value = await api.task.getAll()
  }

  return {
    tasks,
    fetchTasks,
  }
})
