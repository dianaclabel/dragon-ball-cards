<script setup lang="ts">
import Characters from './components/Characters.vue'
import CharactersAsync from './components/CharactersAsync.vue'
</script>

<template>
  <div>
    <!-- <Characters /> -->
    <Suspense>
      <template #fallback>
        <p>Cargando los guerreros Z...</p>
      </template>

      <CharactersAsync />
    </Suspense>
  </div>
</template>
