<template>
  <BaseModal v-if="isEditing" @close="closeModal">
    <template #header>
      <h2>📝 Modifier {{ editableTask.title }}</h2>
    </template>
    <template #content>
      <BaseInput label="Titre" type="text" v-model="editableTask.title" />
      <BaseInput label="Description" type="text" inputSize="large" v-model="editableTask.description" />
      <div class="buttons-conteiner">
        <BaseButton type="button" color="red" @click="handleDelete">Supprimer</BaseButton>
        <BaseButton type="button" color="primary" @click="handleSave">Valider</BaseButton>
      </div>
    </template>
  </BaseModal>
  <BaseCard @click="openModal" class="cursor-pointer">
    <div class="baseline">
      <input type="checkbox" :checked="currentTask.completed" @click.stop @change="handleCheck" />
      <h3>{{ currentTask.title }}</h3>
    </div>
    <p>{{ currentTask.description }}</p>
  </BaseCard>
</template>

<script lang="ts" setup>
import type { Task } from '~/types/Task'

import { useTasksStore } from '~/stores/tasks'

const tasksStore = useTasksStore()

const { task } = defineProps<{
  task: Task
}>()

const currentTask = computed(() => {
  return tasksStore.tasks.find(t => t.id === task.id) || task
})

const isEditing = ref(false)
const editableTask = ref({ ...task })

const handleCheck = async () => {
  const updatedTask = { ...task, completed: !task.completed }
  await tasksStore.updateTask(updatedTask)
}

const openModal = () => {
  editableTask.value = { ...currentTask.value }
  isEditing.value = true
}

const closeModal = () => {
  isEditing.value = false
}

const handleSave = async () => {
  console.log(editableTask.value)
  try {
    await tasksStore.updateTask(editableTask.value)
    isEditing.value = false
  }
  catch (error) {
    // TODO: Handle error
    console.error(error)
  }
}

const handleDelete = async () => {
  try {
    await tasksStore.deleteTask(editableTask.value)
    isEditing.value = false
  }
  catch (error) {
    // TODO: Handle error
    console.error(error)
  }
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

.cursor-pointer {
  cursor: pointer;
}

.buttons-conteiner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
