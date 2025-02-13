<template>
  <BaseCard>
    <div class="baseline">
      <input type="checkbox" :checked="task.completed" @change="handleCheck" />
      <h3>{{ task.title }}</h3>
    </div>
    <p>{{ task.description }}</p>
  </BaseCard>
</template>

<script lang="ts" setup>
import type { Task } from '~/types/Task'

import { useTasksStore } from '~/stores/tasks'

const tasksStore = useTasksStore()

const { task } = defineProps<{
  task: Task
}>()

const handleCheck = async () => {
  const updatedTask = { ...task, completed: !task.completed }
  await tasksStore.updateTask(updatedTask)
}
</script>

<style scoped>
h3 {
  margin: 0;
}

.baseline {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
