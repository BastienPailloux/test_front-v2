<template>
  <div>
    <p v-if="isLoading">Chargement...</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <TaskElement :task="task" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import TaskElement from './TaskElement.vue'

import { useTasksStore } from '~/stores/tasks'

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const isLoading = ref(true)

onMounted(async () => {
  await tasksStore.fetchTasks()
  isLoading.value = false
  console.log('taches récupérées:', tasks)
})
</script>

<style scoped>
div {
  margin: 2rem 5rem;
}
</style>
