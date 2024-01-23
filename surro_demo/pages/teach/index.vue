<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative grid">
            <div>
                <div class="relative ">
                    <button @click="clickRing()">
                        <BellAlertIcon class="ringIcon" :class="{ 'colorRing': mySchool.school.stateRing === 1 }" />
                    </button>
                    <img class="shcool_img" src="../../assets/image/shcool/school.png" alt="">
                </div>
                <div v-if="show" class="grid gap-y-4 grid-cols-5 w-[70%] m-auto shcool_top">
                    <button class="relative  flex justify-center" v-for="(item, index) in mySchool.school.classRoom">
                        <NuxtLink :to="`/teach/${item.numbers + '-' + item.classType}`" @click="mySchool.addCurrent(item)">
                            <div class="class_number">{{ item.numbers + item.classType }}</div>
                            <div class="w-[100%]">
                                <img class="w-[100%] m-auto h-[130px]" src="../../assets/image/shcool/door.png" alt="">
                            </div>
                        </NuxtLink>
                        <NuxtLink :to="`/teach/settingsRoom${index}`" @click="mySchool.addCurrent(item, calba)">
                            <button>
                                <ClipboardDocumentListIcon class="w-[20px] text-white" />
                            </button>
                        </NuxtLink>
                    </button>
                    <button class="relative">
                        <NuxtLink :to="`/teach/teacher`">
                            <div class="teacher_door">Teacher Room</div>
                            <img class="w-[50%] m-auto h-[130px]" src="../../assets/image/shcool/teacherdoor.png" alt="">
                        </NuxtLink>
                    </button>
                    <button class="relative  flex justify-center" @click="addNewClassModal()">
                        <div class="addNewClass">Add +</div>
                        <div class="w-[50%]">
                            <img class="w-[100%] m-auto h-[130px]" src="../../assets/image/shcool/door.png" alt="">
                        </div>
                    </button>
                </div>
                <div v-if="mySchool.school.corridor != null" class="corridorDiv">
                    <ul>
                        <li v-for="(student, index) in mySchool.school.corridor" class="border-current"
                            @click="goToclass(student, index)"> {{ student.name + ' ' +
                                student.surname }}</li>
                    </ul>
                </div>
                <NewClass v-if="showNewClassModel" @closeNewClassModal="closeNewClassModal" @add-new-class="addNewClass" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

import { School, WellStudent } from "../../core/store/teach";
import { BellAlertIcon, ClipboardDocumentListIcon } from "@heroicons/vue/24/solid"
import { useMySchool } from "../../core/store/teach";
const mySchool = useMySchool();

const show = ref(true);
const showNewClassModel = ref(false)
const school = ref<School>(new School());

function calba() {
    console.log('hellocalback');
}

function clickRing() {
    if (mySchool.school.stateRing == 0 || mySchool.school.stateRing === undefined) {
        for (let index = 0; index < mySchool.school.classRoom.length; index++) {
            const element = mySchool.school.classRoom[index];
            if (element.students) {
                for (let index = 0; index < element.students.length; index++) {
                    const elements = element.students[index];
                    mySchool.school.addcorridor(elements)
                }
                element.students = [];
            }
        }
        mySchool.school.stateRing = 1
        mySchool.afterMutation()
    } else {
        for (let index = 0; index < mySchool.school.corridor.length; index++) {
            const student = mySchool.school.corridor[index];

            for (let index = 0; index < mySchool.school.classRoom.length; index++) {
                const classRoom = mySchool.school.classRoom[index];
                if (classRoom.numbers == student.classNumber && classRoom.classType == student.classCategory) {
                    student.goToaClass(classRoom)
                }
            }
        }
        mySchool.school.corridor = [];
        mySchool.school.stateRing = 0
        mySchool.afterMutation()
    }
}

function goToclass(student: WellStudent, studentIndex: number) {
    for (let index = 0; index < mySchool.school.classRoom.length; index++) {
        const class_room = mySchool.school.classRoom[index];
        if (class_room.numbers == student.classNumber && class_room.classType == student.classCategory) {
            student.goToaClass(class_room)
            mySchool.school.corridor.splice(studentIndex, 1)
            console.log(school.value);
            mySchool.afterMutation()
        }
    }
}

function closeNewClassModal() {
    showNewClassModel.value = false
}
function addNewClassModal() {
    showNewClassModel.value = true
}

function addNewClass(clasNumber: number, classType: string) {
    mySchool.addNewClass(clasNumber, classType)
    showNewClassModel.value = false;
}


</script>

<style scoped>
.shcool_img {
    width: 70%;
    margin: auto;
    height: 175px;
}

.shcool_top {
    border: 2px solid #6a6a6a;
    border-top: none;
}

.class_number {
    color: #ffffff;
    position: absolute;
    font-size: 23px;
    top: 40%;
    left: 38%;
    padding: 2px;
    background: #673512;
}

.addNewClass {
    color: #ffffff;
    position: absolute;
    font-size: 17px;
    top: 40%;
    left: 35%;
    padding: 2px;
    background: #673512;
}

.teacher_door {
    color: #ffffff;
    position: absolute;
    font-size: 10px;
    top: 35%;
    left: 29%;
    padding: 2px;
    background: #673512;
}

.ringIcon {
    width: 50px;
    position: absolute;
    left: 35%;
    top: 50%;
    color: #ffeb00;
}

.colorRing {
    color: red;
}

.corridorDiv {
    width: 70%;
    margin: auto;
    color: white;
}
</style>