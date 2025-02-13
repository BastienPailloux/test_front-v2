<template>
  <BaseCard class="addCard">
    <p v-if="!isCreating" @click="createNewTask">
      <FontAwesomeIcon :icon="faPlus" />
      Ajouter une tâche
    </p>
    <div v-else class="containerAddTask">
      <input
        type="text"
        placeholder="Nom de la tâche"
        v-model="newTaskTitle"
      />
      <BaseButton @click="addTask">Créer</BaseButton>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { useTasksStore } from '~/stores/tasks'

const tasksStore = useTasksStore()

const isCreating = ref(false)
const newTaskTitle = ref('')

const createNewTask = () => {
  isCreating.value = true
}

const addTask = async () => {
  try {
    tasksStore.createTask({ title: newTaskTitle.value })
    newTaskTitle.value = ''
    isCreating.value = false
  }
  catch (error) {
    // TODO: Handle error
    console.error(error)
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.addCard {
  margin: 2rem 5rem;
  cursor: pointer;
}

.containerAddTask {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
