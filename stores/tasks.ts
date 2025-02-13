import { defineStore } from 'pinia'

import { useApi } from '~/composables/useApi.composable'

import type { Task } from '~/types/Task'

export const useTasksStore = defineStore('tasks', () => {
  const api = useApi()
  const tasks = ref<Task[]>([])

  const fetchTasks = async () => {
    const result = await api.task.getAll()
    tasks.value = result
  }

  return {
    tasks,
    fetchTasks,
  }
})
