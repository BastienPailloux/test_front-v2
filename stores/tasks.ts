import { defineStore } from 'pinia'

import { useApi } from '~/composables/useApi.composable'

import type { Task } from '~/types/Task'

export const useTasksStore = defineStore('tasks', () => {
  const api = useApi()
  const tasks = ref<Task[]>([])

  const fetchTasks = async () => {
    try {
      const result = await api.task.getAll()
      tasks.value = result
    }
    catch (error) {
      console.error(error)
    }
  }

  const updateTask = async (task: Task) => {
    try {
      const updatedTask = await api.task.put(task)
      return updatedTask
    }
    catch (error) {
      console.error(error)
    }
  }

  return {
    tasks,
    fetchTasks,
    updateTask,
  }
})
