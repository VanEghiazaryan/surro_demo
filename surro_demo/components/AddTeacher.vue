<template>
    <div>
        <div>
            <select class="allTeachers" v-model="teacher">
                <option v-for="(teacher, index) in mySchool.school.teacherRoom.teachers" :value="teacher"> {{ teacher.name
                }} </option>
            </select>
        </div>
        <div>

            <button @click="goToClass(teacher)" class="goClass">
                <NuxtLink :to="`/teach/${mySchool.currentClass.numbers + '-' + mySchool.currentClass.classType} `">
                    Go to {{ mySchool.currentClass.numbers + '' +
                        mySchool.currentClass.classType }} clase </NuxtLink>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Teacher } from '~/core/store/teach';
import { useMySchool } from "../core/store/teach";
const mySchool = useMySchool();
const teacher = ref();
const props = defineProps({
    curentId: { type: Number, required: true }
})

function goToClass(teacher: Teacher) {
    mySchool.currentClass.addTeacher(teacher)
    if (mySchool.currentClass) {
        mySchool.school.classRoom.splice(props.curentId, 1, mySchool.currentClass)
        mySchool.afterMutation();
        mySchool.addCurrent(mySchool.currentClass);
    }
}

</script>

<style scoped>
.allTeachers {
    padding: 3px;
    width: 40%;
    color: #562301;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    outline: none;
}

.goClass {
    margin: 8px;
    padding: 3px;
    background: #612f0e;
    width: 151px;
    border-radius: 5px;
    color: white;
    box-shadow: 0px 0px 3px 1px white;
}
</style>