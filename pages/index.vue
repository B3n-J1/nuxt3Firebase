<script setup>
const { data } = await useFetch("/api/buildings");
</script>

<template>
  <BuildingsTable :buildings="data" />
</template>
