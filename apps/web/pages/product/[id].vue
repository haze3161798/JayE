<script lang="ts" setup>
const route = useRoute();
</script>
<template>
  <div>{{ route.params.id }}</div>
</template>
