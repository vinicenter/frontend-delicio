<script setup lang="ts">
const {
  data,
  refresh,
  error,
  pending
} = await useFetch('/api/delicio')

const name = computed(() => {
  if(error.value) {
    return 'Deu ruim'
  }

  if(pending.value) {
    return '...'
  }

  return data.value?.name
})
</script>

<template>
  <div class="delicio-container">
    <h1>Os melhores apelidos do Delicio</h1>

    <img src="/delicio.jpeg" />

    <div class="delicio-name">
      {{ name }}
    </div>

    <div class="button" @click="refresh()">Gerar novo</div>
  </div>
</template>

<style scoped>
.delicio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
}

.delicio-container img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.delicio-name {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}

.button {
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #333;
  animation: pulse 0.5s;
}
</style>