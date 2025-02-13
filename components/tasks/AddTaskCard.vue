<template>
  <BaseCard class="addCard">
    <p v-if="!isCreating" @click="createNewTask">
      <FontAwesomeIcon :icon="faPlus" />
      Ajouter une tâche
    </p>
    <div v-else class="containerAddTask">
      <input type="text" placeholder="Nom de la tâche" />
      <BaseButton @click="addTask">Créer</BaseButton>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const isCreating = ref(false)

const createNewTask = () => {
  isCreating.value = true
}

const addTask = () => {
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
</style>
