<template>
    <WorkerName v-slot="slotProps" :itemData='itemData'>
        <slot />
        <button @click="$emit('deleteData', index)" class="text-[coral] text-[15px]">X</button>
    </WorkerName>
</template>

<script setup lang="ts" >
import WorkerName from "./WorkerName.vue";

const props = defineProps(
    ['itemData', 'index']
)

const emit = defineEmits(['deleteData', 'changeState', 'itemData'])

</script>

<style lang="scss" scoped></style>