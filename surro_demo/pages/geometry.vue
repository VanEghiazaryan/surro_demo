<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative grid">
            <div class="m-[20px]">
                <!-- <div v-if="typesGeomatry === ' '" class="text-white">
                    Select geometry figure
                </div> -->
                <!-- <div v-else class="text-white">
                    Write numbers
                </div> -->
                <div v-if="typesGeomatry == GeometryType.rectangel || typesGeomatry == GeometryType.triangle">
                    <div class="m-[5px]">
                        <input placeholder="width" class="w-[50%] p-[6px] rounded-[5px] outline-none bg-[#6a6a6a]"
                            type="number" v-model="width">
                    </div>
                    <div class="m-[5px]">
                        <input placeholder="heigth" class="w-[50%] p-[6px] rounded-[5px] outline-none bg-[#6a6a6a]"
                            type="number" v-model="heigth">
                    </div>
                </div>
                <div v-else-if="typesGeomatry == 'Square'">
                    <div class="m-[5px]">
                        <input placeholder="width" class="w-[50%] p-[6px] rounded-[5px] outline-none bg-[#6a6a6a]"
                            type="number" v-model="width">
                    </div>
                </div>
                <div class="m-[5px]">
                    <select class="sel_option" v-model="typesGeomatry">
                        <option v-for="types in GeometryType">
                            {{ types }}
                        </option>
                    </select>
                </div>
                <div class="m-[5px] add_btn">
                    <button @click="addList()"> Add to List </button>
                </div>
            </div>
            <div v-for="(item, index) in listFigures" class="flex items-center ">
                <div class="flex items-center  bg-slate-700 m-[5px] w-[50%] justify-between">
                    <div class="w-[35%] bg-slate-700 m-[5px] p-[10px]">
                        <span class="text-white"> {{ item.width + " " }} </span>
                        <span class="text-white"> {{ item.symbol + " " }} </span>
                        <span class="text-white" v-if="item.name != GeometryType.square"> {{ item.heigth + " " }} </span>
                        <span class="text-white" v-if="item.name == GeometryType.triangle"> {{ item.symbol + " " }} </span>
                        <span class="text-white" v-if="item.name == GeometryType.triangle"> 0.5 </span>
                        <span v-if="item.name == GeometryType.square" class="text-white"> {{ item.width }} </span>
                    </div>
                    <div>
                        <button @click="calculate(item, index)" class="text-black bg-white geometry_name">{{ item.name
                        }}
                            Surface</button>
                    </div>
                    <div>
                        <span class=" bg-slate-700 text-white">
                            {{ item.final }}
                        </span>
                    </div>
                    <button @click="deleteNumber(index)" class="text-white text-[18px] bg-slate-700 p-[8px]">
                        X
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Triangle, Rectangle, Square, GeometryType, Geometry } from "../core/store/geometryStore";

const width = ref<number>();
const heigth = ref<number>();
const typesGeomatry = ref<GeometryType>();
const listFigures = ref<Array<Geometry>>([]);

function addList() {

    switch (typesGeomatry.value) {
        case GeometryType.rectangel:
            if (width.value && heigth.value) {
                listFigures.value.push(new Rectangle(GeometryType.rectangel, width.value, heigth.value))
                break;
            }
        case GeometryType.square:
            if (width.value) {
                listFigures.value.push(new Square(GeometryType.square, width.value))
                break;
            }
        case GeometryType.triangle:
            if (width.value && heigth.value) {
                listFigures.value.push(new Triangle(GeometryType.triangle, width.value, heigth.value))
                break;
            }
    }
    localStorage.setItem('listFigures', JSON.stringify(listFigures.value))
}

function calculate(params: Geometry, index: number) {
    params.calculateSueface();
}

function deleteNumber(index: number) {
    listFigures.value.splice(index, 1);
    localStorage.setItem('listFigures', JSON.stringify(listFigures.value));
}

onMounted(() => {
    const items = localStorage.getItem("listFigures");
    if (items) {
        listFigures.value = JSON.parse(items);
    } else {
        listFigures.value = [];
    }
})
</script>



<style scoped>
.add_btn button {
    background: azure;
    width: 200px;
    padding: 2px;
    border-radius: 5px;
    box-shadow: 3px 3px 6px 0px #b7b7b7;
}

.sel_option {
    width: 250px;
    padding: 6px;
    border-radius: 5px;
    background: #6a6a6a;
    color: white;
    outline: none;
}

.geometry_name {
    padding: 6px;
    box-shadow: 1px 2px 3px 1px #787878;
    border-radius: 3px;
    width: 180px;
}
</style>