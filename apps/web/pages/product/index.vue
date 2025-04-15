<script lang="ts" setup>
import type { ProductModel } from "~/types/product";
const runTimeConfig = useRuntimeConfig();
const baseUrl = ref<string>(runTimeConfig.public.baseUrl);
const url = computed(() => `${baseUrl.value}/api/product`);
const { data: products, refresh } = useFetch<ProductModel[]>(url);

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
const img = ref<FormData>(new FormData());
const upLoadImg = async (element: Event) => {
  const target = element.target as HTMLInputElement;
  if (!target) return;
  if (!(target instanceof HTMLInputElement)) return;
  if (!target.files) return;

  const file = target.files[0];

  img.value.append("file", file);
  img.value.append("aaa[0][bbb]", crypto.randomUUID());

  // imgUrl.value = result.url;
  // console.log(imgUrl.value);
};
const create = async () => {
  const res = await fetch("/api/product/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: crypto.randomUUID() }),
  });
  const response = await fetch("/api/product/upload", {
    method: "POST",
    body: img.value,
  });
  const result = await res.json();
  console.log(result);
  refresh();
  console.log(products.value);
};
onMounted(() => {
  console.log(products.value);

  baseUrl.value = "";
});
</script>

<template>
  <button @click="create">create</button>
  <label for="fileBtn">上傳檔案</label>
  <div v-for="product in products" :key="product.id">
    {{ product.name }}
    <button @click="update(product.id)">update</button>
    <button @click="deleteProduct(product.id)">delete</button>

    <input style="display: none" type="file" id="fileBtn" @change="upLoadImg" />
    <img :src="product.img || ''" alt="" />
  </div>
</template>
