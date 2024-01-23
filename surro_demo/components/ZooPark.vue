<template>
    <div class="w-[49%] bg-[#6a6a6a] min-h-[150px]">
        <div class="slot_animal">
            <slot /> animals
        </div>
        <div class="grid grid-cols-3">
            <div v-for="(list, index) in props.zooParkList">
                <div v-if="list.types === props.animalType" class="item_zooPark flex">
                    <p>{{ list.name }}</p>
                    <button @click="$emit('deleteZooList', index)">X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const props = defineProps([
    'zooParkList', 'animalType'
])
</script>

<style scoped>
.item_zooPark {
    width: 150px;
    background: #6b7280;
    color: white;
    padding: 5px;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
    height: 35px;
    margin: 5px;
    box-shadow: 0px 0px 2px 0px white;
}

.item_zooPark p {
    width: 90%;
}

.item_zooPark button {
    width: 10%;
}

.slot_animal {
    padding: 5px;
    text-align: center;
    background: #97979b;
    margin-bottom: 10px;
    color: white;
    font-size: 19px;
}
</style>