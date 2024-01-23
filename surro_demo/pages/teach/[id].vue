<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative grid">
            <div class="class_rooms ">
                <div class="text-left">
                    <h1 class="text-white text-[20px]" v-if="mySchool.currentClass">
                        Class {{ mySchool.currentClass.numbers + mySchool.currentClass.classType }}
                    </h1>
                </div>
                <div v-if="mySchool.currentClass">
                     <div v-if="mySchool.currentClass.teacher">
                        <img @click="mySchool.currentClass.teacher.teaching()" class="w-[10%]"
                            src="../../assets/image/shcool/teacher.png" />
                        <span class="text-[white]">{{ mySchool.currentClass.teacher?.name }}</span>
                    </div>
                    <div class=" class_student grid grid-cols-4">
                        <div v-for="students in mySchool.currentClass.students">
                            <div class="student_data">
                                {{ console.log(students)}}
                                <img @click="students.answerToClass(mySchool.currentClass.teacher?.skill)" src="../../assets/image/shcool/student.png" alt="">
                                <span class="text-[10px]">{{ students.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ClassRoom } from "~/core/store/teach";
import { useMySchool } from "../../core/store/teach";
const mySchool = useMySchool();
const currentClassRoom = ref<ClassRoom | null>();

onMounted(() => {
    console.log('id page ',mySchool.currentClass);
})

</script>

<style scoped>
.student_data {
    width: 36%;
    color: white;
    text-align: center;
}

.class_rooms {
    width: 70%;
    margin: auto;
    text-align: -webkit-center;
    border: 1px solid #6a6a6a;
    border-top: none;
}


.class_student {
    justify-items: center;
}


.selectTeacher {
    display: flex;
    width: 130px;
    align-items: center;
    color: white;
    margin-left: 15px;
}
</style>
