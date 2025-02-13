import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useApi } from '~/composables/useApi.composable'

import type { Task } from '~/types/Task'

export const useTasksStore = defineStore('tasks', () => {
  const api = useApi()
  const tasks = ref<Task[]>([])

  const fetchTasks = async () => {
    try {
      const result = await api.task.getAll()
      tasks.value = result.sort((a, b) => b.id - a.id)
    }
    catch (error) {
      console.error(error)
    }
  }

  const createTask = async (newTask: Partial<Task>) => {
    try {
      console.log(newTask)
      const result = await api.task.post(newTask)
      console.log(result)
      tasks.value.unshift(result)
      return result
    }
    catch (error) {
      console.error(error)
    }
  }

  const updateTask = async (updatedTask: Task) => {
    try {
      const result = await api.task.put(updatedTask)

      const index = tasks.value.findIndex(t => t.id === updatedTask.id)
      if (index !== -1) {
        tasks.value.splice(index, 1, result)
      }
      return result
    }
    catch (error) {
      console.error(error)
    }
  }

  return {
    tasks,
    fetchTasks,
    createTask,
    updateTask,
  }
})
