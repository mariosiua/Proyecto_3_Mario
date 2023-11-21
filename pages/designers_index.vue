<template>
  <div>
    <div class="list-group">
      <NuxtLink class="list-group-item list-group-item-action list-group-item-info" v-for="designer in designers"
        :key="designer._id" :to="`/designers/` + designer._id">{{ designer.title }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: designers } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Designers?fields={"title":true}`)
</script>