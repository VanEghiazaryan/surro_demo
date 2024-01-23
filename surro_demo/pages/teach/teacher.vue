<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative grid">
            <div class="Teacher_rooms">
                <div class=" grid grid-cols-5 gap-5">
                    <div v-for="teacher in school.teacherRoom.teachers">
                        <img src="../../assets/image/shcool/teachers.png" alt="">
                        <span class="text-[10px] text-[white]">{{ teacher.name + ' ' + teacher.surname + ': ' +
                            teacher.skill }}</span>
                    </div>
                    <div>
                        <button @click="show = !show" class="text-white">+ Add teacher</button>
                        <div v-if="show" id="myModal" class="modal">
                            <div class="modal-content">
                                <div>
                                    <button @click="show = !show" class="text-white">X</button>
                                </div>
                                <div>
                                    <input v-model="name" class="w-[280px] p-[4px] m-[3px] rounded-[5px] "
                                        placeholder="Name" type="text">
                                </div>
                                <div>
                                    <input v-model="surname" class="w-[280px] p-[4px] m-[3px] rounded-[5px] "
                                        placeholder="Surname" type="text">
                                </div>
                                <div>
                                    <select class="w-[280px] m-[3px] p-[4px] rounded-[5px]" v-model="skill">
                                        <option v-for="skill in TeacherSkills" :value="skill"> {{ skill }}
                                        </option>
                                    </select>
                                </div>
                                <div v-if ="name != null && surname != null && skill != null">
                                    <button @click="mySchool.addNewTeacher(new Teacher(name, surname, skill))" class="addNewTeacher">Add new Teacher</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { School, Teacher, TeacherSkills } from "~/core/store/teach";
import { useMySchool } from "../../core/store/teach";
const mySchool = useMySchool();
const school = ref< School >(new School());
const name = ref<string>('');
const surname = ref<string>('');
const skill = ref<TeacherSkills>();
const show = ref();

onMounted(() => {
    school.value = mySchool.school
})

</script>

<style scoped>
.Teacher_rooms {
    width: 70%;
    min-height: 250px;
    margin: auto;
    text-align: -webkit-center;
    border: 1px solid #6a6a6a;
    border-top: none;
}

.selectTeacher {
    display: flex;
    width: 130px;
    align-items: center;
    color: white;
    margin-left: 15px;
}

.modal {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #545454b3;
    margin: auto;
    padding: 5px;
    border: 1px solid #888;
    width: 60%;
    box-shadow: 0px 0px 6px 3px #ffffff;
}

.addNewTeacher {
    background: #262626;
    border: 1px solid #999999;
    padding: 4px;
    width: 204px;
    border-radius: 5px;
    margin: 12px;
    color: white;
    box-shadow: 0px 0px 5px -1px white;
}</style>