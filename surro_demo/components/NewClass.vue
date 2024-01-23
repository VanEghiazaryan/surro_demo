<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="newClasssModal grid ">
                <div class="closeModalDiv">
                    <button @click="$emit('closeNewClassModal')" class="close text-white text-[20px]">&times;</button>
                </div>
                <div>
                    <input type="number" placeholder="Write the class number" required class="w-[50%] p-[5px] rounded-[4px]"
                        v-model="classNumber" />
                </div>
                <div>
                    <input type="text" placeholder="write the class type " required class="w-[50%] p-[5px] rounded-[4px]"
                        v-model="classType" />
                </div>
                <div>
                    <button @click="$emit('addNewClass', classNumber, classType)"
                        class="w-[30%] bg-gray-500 p-[5px] text-white rounded-[3px]">Add new Class</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const classNumber = ref();
const classType = ref();



</script>

<style scoped>
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

.newClasssModal {
    width: 100%;
    min-height: 250px;
    margin: auto;
    text-align: -webkit-center;
    box-shadow: 0px 1px 15px 2px #612f0e;
    border: 1px solid #6a6a6a;
    border-top: none;
}
</style>