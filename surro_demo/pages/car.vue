<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17]">
            <div>
                <div>
                    <select class="w-[25%] p-[5px] rounded-[5px] m-[5px]"  v-model="optionType" >
                        <option v-for="types in CarType" >{{ types }}</option>
                    </select>
                    <div class="m-[5px]">
                        <input class="w-[25%] p-[5px] rounded-[5px]" v-model="carPrice" type="number" />
                    </div>
                    <div class="m-[5px]">
                        <button @click = "addNewCar()" class="addCar">Add Car</button>
                    </div>
                </div>
                <div>
                    <h2>Autosalon</h2>
                    <div class="flex">
                        <div v-for="car in autoSalon.cars" class="autosalonCars">
                            <p>Name <span>{{ car.mark }}</span></p>
                            <p>price <span>{{ car.price }}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { Car, CarType, AutoSalon } from "../core/store/car";

const optionType = ref();
const carPrice = ref();
const myChosenCars = ref();
let autoSalon: AutoSalon = new AutoSalon([])

function addNewCar() {
    autoSalon.addCar(new Car(optionType.value, carPrice.value))
    localStorage.setItem("autoSalon", JSON.stringify(autoSalon.cars))
    console.log(localStorage.getItem("autoSalon"));
}
autoSalon.addCar(new Car(CarType.Audi, 1500))
autoSalon.addCar(new Car(CarType.Bentley, 1500))
autoSalon.addCar(new Car(CarType.Audi, 700));


myChosenCars.value = autoSalon.searchCar(CarType.Audi);
autoSalon.sellCar(myChosenCars.value[0]);
console.log(myChosenCars.value);

console.log(autoSalon.cars);

</script>

<style scoped>
.addCar {
    width: 15%;
    color: white;
    padding: 3px;
    border-radius: 5px;
    background: #464b56;
    text-align: center;
}
.autosalonCars{
    padding: 10px;
    margin: 10px;
    background: azure;
    border-radius: 5px;
}
</style>