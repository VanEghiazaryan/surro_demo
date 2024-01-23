<template>
    <div @click="$emit('changeState', 0)" :class="{ 'red_bg': currentState === 0 }"
     class="h-4 w-4 rounded-full bg-white">  </div>

    <div @click="$emit('changeState', 1)" :class="{ 'orange_bg': currentState === 1 }"
        class="h-4 w-4 rounded-full bg-white"> </div>

    <div @click="$emit('changeState', 2)" :class="{ 'green_bg': currentState === 2 }"
     class="h-4 w-4 rounded-full bg-white">  </div>
</template>

<script setup lang="ts">

defineProps({
    currentState: Number,
})

defineEmits(['changeState'])

</script>

<style scoped>
.green_bg {
    border: 1px solid white;
    box-shadow: 0px 0px 8px 2px #1bff00;
    background-color: #1bff00;
}

.orange_bg {
    background-color: #ffeb00;
    box-shadow: 0px 0px 8px 2px #ffeb00;
    border: 1px solid white;
}

.red_bg {
    background-color: #ff0000;
    box-shadow: 0px 0px 9px 3px #ff1818;
    border: 1px solid wheat;
}
</style>