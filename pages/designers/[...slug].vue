<template>
  <div class="row">
    <h1 class="text-center">{{ doc.title }}</h1>
    <div class="col-md-8">
      <span v-html="doc.content"></span>
      <h4>Lista de Vehiculos</h4>
      <ul>
        <li v-for="car in cars" :key="car._id">
          <NuxtLink :to="`/cars/` + car._id">{{ car.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="col-md-4">
      <img class="img-thumbnail" :src="'/images/designers/user.png'">
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>País de Origen:</span></div>
        <div class="col-md-6">{{ doc.origen }}</div>
      </div>
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Edad:</span></div>
        <div class="col-md-6">{{ doc.edad }}</div>
      </div>
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Lugar de Trabajo:</span></div>
        <div class="col-md-6">{{ doc.trabajo }}</div>
      </div>
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Último Diseño:</span></div>
        <div class="col-md-6">{{ doc.ultimo }}</div>
      </div>
    </div>
  </div>
  <div class="row my-4">
    <Comments />
  </div>
</template>
<script setup>
const route = useRoute()
const { data: doc, refresh: rBrand } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Designers/${route.params.slug}`)
rBrand()
const { data: cars, refresh: rCar } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Cars?filter={"designerID._id":"${route.params.slug}"}&fields={"title":true}`)
rCar()
</script>