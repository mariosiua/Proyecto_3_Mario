<template>
  <div>
    <div class="list-group">
      <NuxtLink class="list-group-item list-group-item-action list-group-item-info" v-for="car in cars" :key="car._id"
        :to="`/cars/` + car._id">{{ car.title }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: cars } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Cars?fields={"title":true}`)
</script>