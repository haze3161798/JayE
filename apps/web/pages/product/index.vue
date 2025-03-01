<script lang="ts" setup>
import type { ProductModel } from "~/types/product";

const productsList = ref<ProductModel[]>([]);

const { data: products } = useFetch<ProductModel[]>(
  "http://localhost:8080/api/product"
);
productsList.value = products.value ?? [];
const get = async () => {
  const res = await fetch("http://localhost:8080/api/product");
  productsList.value = await res.json();
};
const create = async () => {
  const res = await fetch("http://localhost:8080/api/product/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: crypto.randomUUID() }),
  });
  get();
};

const update = async (id: number) => {
  const res = await fetch("http://localhost:8080/api/product/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      name: crypto.randomUUID(),
    }),
  });
  get();
};
const deleteProduct = async (id: number) => {
  const res = await fetch("http://localhost:8080/api/product/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  get();
};
onMounted(() => {
  console.log(JSON.stringify(products.value, null, 2));
});
</script>

<template>
  <button @click="create">create</button>

  <div v-for="product in productsList" :key="product.id">
    {{ product.name }}
    <button @click="update(product.id)">update</button>
    <button @click="deleteProduct(product.id)">delete</button>
  </div>
</template>
