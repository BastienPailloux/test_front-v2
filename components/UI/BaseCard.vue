<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}

div:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dimmed {
  opacity: 0.5;
}
</style>
