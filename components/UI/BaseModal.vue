<template>
  <div />
  <dialog open>
    <header>
      <slot name="header" />
    </header>
    <section>
      <slot />
    </section>
  </dialog>
</template>

<style scoped>
  div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }

  header {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, var(--color-primary), white);
  }

  section {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    dialog {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
</style>
