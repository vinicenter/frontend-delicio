<script setup lang="ts">
const { data, refresh } = await useFetch('/api/delicio')
</script>

<template>
  <div>
    <img src="/delicio.jpeg" />
    {{ data?.name }}
    <div @click="refresh()">Refresh</div>
  </div>
</template>