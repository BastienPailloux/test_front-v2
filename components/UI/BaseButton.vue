<template>
  <button :type="type" :class="[mode, color]" >
    <slot />
  </button>
</template>

<script setup lang="ts">
const { type = 'button', mode = '', color = 'primary' } = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  mode?: string
  color?: string
}>()
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  font-size: 1rem;
  cursor: pointer;
}

button.primary {
  border-color: var(--color-primary600);
  background-color: var(--color-primary);
  color: white;
}

button.red {
  border-color: var(--color-red600);
  background-color: var(--color-red);
  color: white;
}

button.primary:hover,
button.primary:focus,
button.primary:active {
  background-color: var(--color-primary100);
  color: var(--color-primary);
}

button.red:hover,
button.red:focus,
button.red:active {
  background-color: var(--color-red100);
  color: var(--color-red);
}

.flat {
  background-color: transparent;
}

.flat.primary {
  color: var(--color-primary);
}

.flat.red {
  color: var(--color-red);
}

.flat.primary:hover,
.flat.primary:focus,
.flat.primary:active {
  background-color: var(--color-primary100);
}

.flat.red:hover,
.flat.red:focus,
.flat.red:active {
  background-color: var(--color-red100);
}
</style>
