<template>
    <div class="bg-white shadow p-4 rounded-md">
        <div class="pb-2">
        <h2 class="text-black text-xl pb-2">{{title}}</h2>
        <p class="text-left text-gray-700">{{preview}}</p>
        </div>
        <div class="py-2 w-full">
        <Nuxt-link v-bind:to="`/articles/${title}`" class="block bg-red-600 text-white p-3 rounded hover:bg-red-700">Read more</Nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'image', 'author', 'preview']
}
</script>