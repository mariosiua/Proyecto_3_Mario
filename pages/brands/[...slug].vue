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
      <img class="img-thumbnail" :src="`https://cms-una.000webhostapp.com/storage/uploads${doc.image.path}`">
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Fundador:</span></div>
        <div class="col-md-6">{{ doc.fundador }}</div>
      </div>
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Fundación:</span></div>
        <div class="col-md-6">{{ doc.fundacion }}</div>
      </div>
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Valor en Mercado:</span></div>
        <div class="col-md-6">${{ doc.mercado.toLocaleString('en-US') }}</div>
      </div>
      <div class="row m-1">
        <div class="col-md-6 text-bg-secondary rounded"><span>Ubicacion:</span></div>
        <div class="col-md-6">{{ doc.ubicacion.city }}, {{ doc.ubicacion.country }}</div>
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
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Brands/${route.params.slug}`)
rBrand()
console.log(doc);
const { data: cars, refresh: rCar } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Cars?filter={"brandID._id":"${route.params.slug}"}&fields={"title":true}`)
rCar()
</script>