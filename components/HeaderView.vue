<script setup>
const { data: cars } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Cars?fields={"title":true}`)
const { data: brands } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Brands?fields={"title":true}`)
const { data: designers } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Designers?fields={"title":true}`)
const navigationTree = [
  {
    "title": "Cars",
    "path": "/cars",
    "children": cars._rawValue
  },
  {
    "title": "Brands",
    "path": "/brands",
    "children": brands._rawValue
  },
  {
    "title": "Designers",
    "path": "/designers",
    "children": designers._rawValue
  }
]
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Super Deportivos</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item dropdown" v-for="(items) in navigationTree">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{
              items.title }}</a>
            <ul class="dropdown-menu">
              <NuxtLink class="dropdown-item" :to="items.path + '_index'">{{ items.title }}</NuxtLink>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li v-for="item in items.children">
                <NuxtLink class="dropdown-item" :to="items.path+`/`+item._id">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
