<template>
  <div>
    <div class="list-group">
      <NuxtLink class="list-group-item list-group-item-action list-group-item-info" v-for="brand in brands" :key="brand._id"
        :to="`/brands/`+brand._id">{{ brand.title }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: brands } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Brands?fields={"title":true}`)
</script>