<template>
    <div class="flex justify-evenly items-center mb-[8px]">
        <slot :firstName="itemData.firstName" :lastName="itemData.lastName" :worker="itemData.worker"></slot>
    </div>
</template>

<script setup>

const props = defineProps(
    ['itemData']
)

</script>

<style scoped></style>