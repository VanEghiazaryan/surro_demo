<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17]">
            <div class="p-[15px]">
                <div class="text-white text-[20px] mb-[10px]">
                    Select Animals type
                </div>
                <div>
                    <select class="outline-none w-[190px] p-[5px] rounded-[5px]" v-model="typesAnimals">
                        <option v-for="types in AnimalsType"> {{ types }}</option>
                    </select>
                    <div v-if="typesAnimals == AnimalsType.pet || typesAnimals == AnimalsType.wild">
                        <input type="text" class="w-[50%] mt-[15px] p-[5px] rounded-[3px] outline-none"
                            placeholder="Write the name of the animal" v-model="animalName" />
                    </div>
                </div>
                <div>
                    <button class="addAnimals_btn" @click="addAnimals()">Add animals list</button>
                </div>
            </div>
            <div class="p-[15px]">
                <div class="grid grid-cols-5">
                    <div v-for="(item, index) in animalsList"
                        class=" h-[40px] p-[5px] bg-gray-500 m-[10px] flex items_animal hover:cursor-pointer hover:bg-gray-400">
                        <p @click="item.showMydescription()" class="mt-[5px]">{{ item.name }}</p>
                        <button @click="deleteAnimal(index)">X</button>
                    </div>
                </div>
            </div>
            <!-- <div class="flex justify-evenly">
                <div v-for="item in zooParkList">
                    {{ item.name }} {{ item.types }}
                </div>
                <ZooPark v-for="types in AnimalsType" :animal-type="types" :zoo-park-list="zooParkList"
                    @deleteZooList="deleteZooList">
                    {{ types }}
                </ZooPark>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { Animals, AnimalsType, Pet, Wild } from "../core/store/animals";
const typesAnimals = ref<AnimalsType>();
const animalsList = ref<Array<Animals>>([]);
const animalName = ref<string>('')
const zooParkList = ref<Array<Animals>>([])

function addAnimals() {
    switch (typesAnimals.value) {
        case AnimalsType.pet:
            animalsList.value.push(new Pet(animalName.value, AnimalsType.pet));
            break;
        case AnimalsType.wild:
            animalsList.value.push(new Wild(animalName.value, AnimalsType.wild));
            break;
        default:
            break;
    }
    animalName.value = ''
    localStorage.setItem('animalsList', JSON.stringify(animalsList.value));
}
onMounted(() => {
    const listItems = localStorage.getItem('animalsList')
    if (listItems) {
        animalsList.value = JSON.parse(listItems)
    } else {
        animalsList.value = []
    }

    // const zooPark = localStorage.getItem('zooParkList')
    // if (zooPark) {
    //     zooParkList.value = JSON.parse(zooPark)
    // } else {
    //     zooParkList.value = []
    // }
})

function deleteAnimal(index: number) {
    animalsList.value.splice(index, 1);
    localStorage.setItem('animalsList', JSON.stringify(animalsList.value));
}

// function deleteZooList(index: number) {
//     zooParkList.value.splice(index, 1);
//     localStorage.setItem('zooParkList', JSON.stringify(zooParkList.value));
// }

</script>



<style scoped>
.addAnimals_btn {
    width: 190px;
    background: white;
    margin-top: 15px;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 2px 2px 4px 3px #686868;
}

.items_animal {
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px white;
    color: white;
    min-width: 150px;
}

.items_animal p {
    width: 90%;
    height: 100%;
    margin: 0;
}

.items_animal button {
    width: 10%;
    /* border: 1px solid white; */
    border-radius: 1px 5px 5px 1px;
    box-shadow: 1px 0px 5px 0px white;
    color: white;
}
</style>