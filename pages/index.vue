<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCharactersStore } from '~/stores/characters'

const charactersStore = useCharactersStore()
const characters = storeToRefs(charactersStore).characters
const { getCharacters } = useCharactersStore()

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
      <div class="flex w-full justify-center">
        <h1>MortyEnlightenment</h1>
      </div>
      <div class="flex gap-4 flex-wrap justify-around pb-32">
        <CharacterCard
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
