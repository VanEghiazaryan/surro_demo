<template>
    <div>
        <div>
            <input v-model="name" class="studentData" type="text" placeholder="name">
        </div>
        <div>
            <input v-model="surname" class="studentData" type="text" placeholder="Surname">
        </div>
        <div class="justify-evenly flex mt-[15px]">
            <div class="gradeDiv">
                <input v-model="grade" name="grade" type="radio" id="bad" value="bad">
                <label class="m-[4px]" name="grade" for="bad">{{ StudentGrade.bad }}</label>
            </div>
            <div class="gradeDiv">
                <input v-model="grade" name="grade" type="radio" id="middle" value="middle">
                <label class="m-[4px]" name="grade" for="middle">{{ StudentGrade.middle }}</label>
            </div>
            <div class="gradeDiv">
                <input v-model="grade" name="grade" type="radio" id="well" value="well">
                <label class="m-[4px]" name="grade" for="well">{{ StudentGrade.well }}</label>
            </div>

            <div class="gradeDiv">
                <input v-model="grade" name="grade" type="radio" id="excellent" value="excellent">
                <label class="m-[4px]" name="grade" for="excellent">{{ StudentGrade.excellent }}</label>
            </div>
        </div>
        <div>
            <button class="addStudent" @click="addstudents()">
                <NuxtLink :to="`/teach/${mySchool.currentClass?.numbers + '-' + mySchool.currentClass?.classType} `">Add Student</NuxtLink>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StudentGrade, ClassRoom, BadStudent, MiddleStudent, WellStudent, ExcellentStudent, School } from "../core/store/teach";
import { useMySchool } from "../core/store/teach";
const mySchool = useMySchool();
console.log(mySchool.currentClass);

const name = ref();
const surname = ref();
const grade = ref();
const school = ref<School>(new School());
const currentClass = ref<ClassRoom>();
const props = defineProps({
    curentId: { type: Number, required: true }
})

function addstudents() {
    console.log('1111111111');
    
    if (mySchool.currentClass) {
        console.log(mySchool.currentClass);
        switch (grade.value) {
            case StudentGrade.bad:
                mySchool.currentClass.addStudent(new BadStudent(name.value, surname.value, grade.value, mySchool.currentClass.numbers, mySchool.currentClass.classType))
                console.log(mySchool.currentClass);
                break;
            case StudentGrade.middle:
                mySchool.currentClass.addStudent(new MiddleStudent(name.value, surname.value, grade.value, mySchool.currentClass.numbers, mySchool.currentClass.classType))
                console.log(mySchool.currentClass);
                break;
            case StudentGrade.well:
                mySchool.currentClass.addStudent(new WellStudent(name.value, surname.value, grade.value, mySchool.currentClass.numbers, mySchool.currentClass.classType))
                console.log(mySchool.currentClass);
                break;
            case StudentGrade.excellent:
                mySchool.currentClass.addStudent(new ExcellentStudent(name.value, surname.value, grade.value, mySchool.currentClass.numbers, mySchool.currentClass.classType))
                console.log(mySchool.currentClass);
                break;
        }
        mySchool.school.classRoom.splice(props.curentId, 1, mySchool.currentClass)
        mySchool.afterMutation();
        mySchool.addCurrent(mySchool.currentClass);
        console.log('current class student page ',mySchool.currentClass);
        console.log('school student page ', mySchool.school);
    }


}
</script>

<style scoped>
.gradeDiv {
    width: 100px;
    background: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.studentData {
    width: 40%;
    padding: 5px;
    margin: 3px;
    border-radius: 5px;
    outline: none;
}

.addStudent {
    background: #784b2d;
    padding: 5px;
    margin: 15px;
    width: 150px;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px white;
}
</style>