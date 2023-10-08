<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <DelicioNameGenerate />
  </div>
</template>

<style>
html, body {
  margin: 0;
  font-family: 'Arial';
}

body {
  background: radial-gradient(circle, #ff6b6b, #fbd38d, #6ed3cf);
  background-size: 200% 200%;
  animation: gradient 5s alternate infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
