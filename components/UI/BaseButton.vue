<template>
  <button :type="type" :class="mode">
    <slot />
  </button>
</template>

<script setup lang="ts">
const { type = 'button', mode = '' } = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  mode?: string
}>()
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border-color: var(--color-primary600);
  background-color: var(--color-primary);
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover,
button:focus,
button:active {
  background-color: var(--color-primary100);
  color: var(--color-primary);
}

.flat {
  background-color: transparent;
  color: var(--color-primary);
}

.flat:hover,
.flat:focus,
.flat:active {
  background-color: var(--color-primary100);
}
</style>
