<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRickAndMortyStore } from '~/stores/rickAndMortyStore'

const charactersStore = useRickAndMortyStore()
const characters = storeToRefs(charactersStore).characters
const { getCharacters } = useRickAndMortyStore()

const handleFetchCharacters = async () => {
  await getCharacters()
}

handleFetchCharacters()

</script>
<template>
  <NuxtLayout name="default">
    <div
      class="h-auto mx-auto w-full flex flex-col px-4 pt-4 lg:px-8"
    >
      <h1>Index</h1>
      <ul v-if="characters.length">
        <li v-for="character in characters" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
