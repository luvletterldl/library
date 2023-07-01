<script setup lang="ts">
const container = ref<HTMLElement>()

async function chooseFile() {
  const fileUrls = await importFile()
  console.log('chooseFile', fileUrls)
  if (fileUrls.length)
    renderEpub(container.value!, fileUrls[0].url)
}
</script>

<template>
  <div>123</div>
  <greet />
  <button @click="chooseFile">
    open
  </button>
  <div ref="container" border="1px pink" w-full h-full />
</template>
