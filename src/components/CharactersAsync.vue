<script setup lang="ts">
import Card from '@/components/Card.vue'
import { getCharacters } from '@/composables/useApi'

const characters = await getCharacters()
</script>

<template>
  <Card
    v-for="character in characters"
    :key="character.id"
    v-bind="character"
  />
</template>
