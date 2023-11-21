<template>
    <div>
      <h3>
        <span>Comentarios</span>
      </h3>
    </div>
  </template>
  <script>
  export default {
    mounted() {
      const scriptTag = document.createElement('SCRIPT')
      scriptTag.setAttribute('src', 'https://utteranc.es/client.js')
      scriptTag.setAttribute('repo', 'mariosiua/Proyecto_3_Mario')
      scriptTag.setAttribute('issue-term', 'pathname')
      scriptTag.setAttribute('label', 'Comment')
      scriptTag.setAttribute('theme', 'github-light')
      scriptTag.setAttribute('crossorigin', 'anonymous')
      scriptTag.setAttribute('async', 'async')
      this.$el.append(scriptTag)
    },
  }
  </script>
  
  <style>
  .utterances {
    width: 100%;
    max-width: 100%;
  }
  </style>