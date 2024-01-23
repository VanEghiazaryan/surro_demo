<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative grid">
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="add_Teacher_rooms grid ">

                        <div class="w-[60%] m-auto">
                            <button @click="show = !show" class="addTeacher">Add Teacher</button>
                        </div>
                        <Transition>
                            <AddTeacher v-if="show" :curentId="Number(routeId.id)" >
                            </AddTeacher>
                        </Transition>
                        <div class="w-[60%] m-auto">
                            <button @click="showStudent()" class="addStudent">Add new student</button>
                        </div>
                        <div v-if="showStudents">
                            <AddStudent :curentId="Number(routeId.id)"></AddStudent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { useMySchool } from "../../core/store/teach";
const mySchool = useMySchool();
console.log(mySchool.currentClass);

const routeId = useRoute().params
const show = ref(false);
const showStudents = ref(false);


function showStudent() {
    if (showStudents.value === true) {
        showStudents.value = false
    } else {
        showStudents.value = true
    }
}
</script>

<style scoped>
.add_Teacher_rooms {
    width: 100%;
    min-height: 250px;
    margin: auto;
    text-align: -webkit-center;
    box-shadow: 0px 1px 15px 2px #612f0e;
    border: 1px solid #6a6a6a;
    border-top: none;
}

.addTeacher {
    width: 100%;
    margin: auto;
    background: #612f0e;
    color: white;
    font-size: 18px;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 0px white;
    padding: 4px;
    margin: 10px;
}

.addStudent {
    width: 100%;
    margin: auto;
    background: #612f0e;
    color: white;
    font-size: 18px;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 0px white;
    padding: 4px;
    margin: 10px;
}

/* .modal {
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
} */
</style>

