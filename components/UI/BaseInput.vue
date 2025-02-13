<template>
  <label v-if="label">{{ label }}</label>
  <!-- Si inputSize est 'large', afficher un textarea -->
  <textarea
    v-if="inputSize === 'large' && type === 'text'"
    :value="modelValue"
    @input="updateModelValue(($event.target as HTMLTextAreaElement).value)"
    rows="5"
    style="resize: vertical;">
  </textarea>
  <!-- Sinon, afficher un input sur une seule ligne -->
  <input
    v-else
    :type="type"
    :value="modelValue"
    @input="updateModelValue(($event.target as HTMLInputElement).value)" />
</template>

<script setup lang="ts">
const { label, type, modelValue, inputSize } = withDefaults(defineProps<{
  label?: string
  type?: 'text' | 'password' | 'email' | 'number'
  modelValue: string
  inputSize?: 'small' | 'large'
}>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const updateModelValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
input,
textarea {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-primary600);
  font-size: 1rem;
  margin-bottom: 8px;
}

label {
  display: block;
  font-weight: bold;
}
</style>
