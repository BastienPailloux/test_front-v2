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
import type { Task } from '~/types/Task';

const { task } = defineProps<{
  task: Task
}>()

const handleCheck = () => {
  console.log('checked')
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
