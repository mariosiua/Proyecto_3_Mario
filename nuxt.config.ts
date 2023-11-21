import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/snipcart"],
  snipcart: {
    publicApiKey:
      "ODQ5ZjZjYzMtMWI5YS00ZDI5LTlmNTgtYzIwOWI0NmZiNGI1NjM4MzYxMzk0ODQ3NTQ1NTg3",
  },
  components: true,
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/main.css"],
  // plugins: [
  //   {
  //     src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
  //     mode: "client",
  //   },
  // ]
  app: {
    head: {
      titleTemplate: "Proyecto 03",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Meta description",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  // script: { src: "bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
});
