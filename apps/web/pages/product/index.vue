<script lang="ts" setup>
import type { ProductModel } from "~/types/product";

const { data: products } = useFetch<ProductModel[]>(
  "http://localhost:8080/product"
);

onMounted(() => {
  console.log(JSON.stringify(products.value, null, 2));
});
</script>

<template>
  <div v-for="product in products" :key="product.id">{{ product.name }}</div>
</template>
