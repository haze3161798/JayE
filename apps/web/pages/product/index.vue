<script lang="ts" setup>
import type { ProductModel } from "~/types/product";

const runTimeConfig = useRuntimeConfig();
const baseUrl = ref<string>(runTimeConfig.public.baseUrl);
const url = computed(() => `${baseUrl.value}/api/product`);
const { data: products, refresh } = useFetch<ProductModel[]>(url);

const create = async () => {
  const res = await fetch("/api/product/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: crypto.randomUUID() }),
  });
  // get();
  refresh();
};

const update = async (id: number) => {
  const res = await fetch("/api/product/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      name: crypto.randomUUID(),
    }),
  });
  refresh();
};
const deleteProduct = async (id: number) => {
  const res = await fetch("/api/product/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  refresh();
};
onMounted(() => {
  baseUrl.value = "";
});
</script>

<template>
  <button @click="create">create</button>

  <div v-for="product in products" :key="product.id">
    {{ product.name }}
    <button @click="update(product.id)">update</button>
    <button @click="deleteProduct(product.id)">delete</button>
  </div>
</template>
