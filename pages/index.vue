<template>
  <TheHeader />
  <div class="max-w-screen-md mx-auto p-5">
    <AddTaskCard />
    <StoredTasks />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue'
import StoredTasks from '~/components/tasks/StoredTasks.vue'
import AddTaskCard from '~/components/tasks/AddTaskCard.vue';
</script>

<style>
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: var(--font-primary);
    color: var(--color-paragraph);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-heading);
    font-weight: bold;
  }
</style>
