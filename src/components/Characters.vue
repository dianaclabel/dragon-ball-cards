<script setup lang="ts">
import Card from '@/components/Card.vue'
import { getCharacters } from '@/composables/useApi'
import { onMounted, ref } from 'vue'
import type { Character } from '@/interfaces/characterResponse'

const characters = ref<Character[]>([])

onMounted(async () => {
  characters.value = await getCharacters()
})
</script>

<template>
  <Card
    v-for="character in characters"
    :key="character.id"
    v-bind="character"
  />
</template>
