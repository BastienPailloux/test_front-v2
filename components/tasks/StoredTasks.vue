<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTasksStore } from '~/stores/tasks'

const tasksStore = useTasksStore()
const { tasks } = tasksStore

onMounted(async () => {
  await tasksStore.fetchTasks()
  console.log(tasks)
})
</script>
