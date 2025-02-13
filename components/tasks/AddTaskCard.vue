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
      <div class="containerButtons">
        <FontAwesomeIcon :icon="faClose" class="canceButton" @click="cancelAdd" />
        <BaseButton type="button" color="primary" @click="addTask" >Créer</BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons'

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

const cancelAdd = () => {
  newTaskTitle.value = ''
  isCreating.value = false
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

.containerButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.canceButton {
  font-size: 2rem;
  cursor: pointer;
}
</style>
