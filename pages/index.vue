<template>
  <TheHeader />
  <div class="max-w-screen-md mx-auto p-5">
    <BaseCard>
      <h2>📝 Add a new task</h2>
      <input type="text" placeholder="Task name" />
      <button>Add Task</button>
    </BaseCard>
    <StoredTasks />
  </div>
</template>

<script setup lang="ts">
import BaseCard from '~/components/UI/BaseCard.vue'
import TheHeader from '~/components/layout/TheHeader.vue'
import StoredTasks from '~/components/tasks/StoredTasks.vue'
</script>

<style>
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: var(--font-primary);
  }
</style>
