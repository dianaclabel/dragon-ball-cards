<template>
  <div>
    <div>
      <img :src="image" :alt="name" />
    </div>
    <div>
      <h2>{{ name }}</h2>
      <p>{{ race }}</p>

      <div>
        <p>Base KI:</p>
        <p>{{ ki }}</p>
        <p>Total KI:</p>
        <p>{{ maxKi }}</p>
        <p>Afiliation:</p>
        <p>{{ affiliation }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { name, race, image, ki, maxKi, affiliation } = defineProps<{
  name: string
  race: string
  image: string
  ki: string
  maxKi: string
  affiliation: string
}>()
</script>
