<template>
  <div class="row">
    <h1 class="text-center">{{ doc.title }}</h1>
    <div class="col-md-4">
      <img class="img-thumbnail" :src="`https://cms-una.000webhostapp.com/storage/uploads${doc.image.path}`">
      <div class="row m-1">
        <div class="col-md-4 text-bg-secondary rounded">
          <span>Marca:</span>
        </div>
        <div class="col-md-8">
          <NuxtLink v-if="doc.brandId" :to="'/brands/' + doc.brandID._id">{{ doc.brandName }}</NuxtLink>
          <p v-else>{{ doc.brandName }}</p>
        </div>
      </div>
      <div class="row m-1">
        <div class="col-md-4 text-bg-secondary rounded">
          <span>Disenador:</span>
        </div>
        <div class="col-md-8">
          <NuxtLink v-if="doc.designerId" :to="'/designers/' + doc.designerID._id">{{ doc.designerName }}</NuxtLink>
          <p v-else>{{ doc.designerName }}</p>
        </div>
      </div>
      <div class="row m-1">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 text-bg-secondary rounded"><span>HP:</span></div>
            <div class="col-md-6">{{ doc.hp }}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 text-bg-secondary rounded"><span>Precio:</span></div>
            <div class="col-md-6">${{ doc.price.toLocaleString('en-US') }}</div>
          </div>
        </div>
      </div>
      <div class="row m-1">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 text-bg-secondary rounded"><span>Motor:</span></div>
            <div class="col-md-6">{{ doc.motor }}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 text-bg-secondary rounded"><span>Peso:</span></div>
            <div class="col-md-6">{{ doc.peso.toLocaleString('en-US') }} kg</div>
          </div>
        </div>
      </div>
      <div class="row m-1">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 text-bg-secondary rounded"><span>Pasajeros:</span></div>
            <div class="col-md-6">{{ doc.pasajeros }}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 text-bg-secondary rounded"><span>Traccion:</span></div>
            <div class="col-md-6">{{ doc.traccion }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <span v-html="doc.content"></span>
    </div>
  </div>
  <div class="row my-4">
    <button class="
              snipcart-add-item
              btn btn-warning"
					:data-item-id="doc.id"
					:data-item-price="doc.price"
					:data-item-description="doc.content"
					:data-item-image="`https://cms-una.000webhostapp.com/storage/uploads${doc.image.path}`"
					:data-item-name="doc.title"
					>Buy Me!</button>
  </div>
</template>
<script setup>
const route = useRoute()
const { data: doc, refresh } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Cars/${route.params.slug}`)
refresh()
</script>