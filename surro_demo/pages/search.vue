<template>
    <div class="grid grid-cols-12">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative grid">
            <div class="rightSection"></div>
            <div class="row-span-4 relative z-10 grid">
                <Header></Header>
                <div class="h-[50px]"></div>
                <div class="pl-[30px] pr-[30px]">
                    <div class="text-center m-[5px]">
                        <input v-model="firstName" maxlength="3" minlength="1"
                            class="w-[100%] p-[6px] rounded-[5px] outline-none bg-[#6a6a6a]" type="text"
                            placeholder="  First Name" />
                        <div class="text-white">{{ inputMsg }}</div>
                    </div>
                    <div class="m-[5px] text-center">
                        <input v-model="lastName" :maxlength="maxInput" minlength="1"
                            class="w-[100%] p-[6px] rounded-[5px] outline-none bg-[#6a6a6a]" type="text"
                            placeholder=" Last Name">
                        <div class="text-white">{{ inputMsgLast }}</div>
                    </div>
                    <div class="m-[5px]">
                        <input v-model="age" maxlength="2" class="w-[100%] p-[6px] rounded-[5px] outline-none bg-[#6a6a6a]"
                            type="number" placeholder="Age">
                        <div class="text-white text-center">{{ inputMsgAge }}</div>
                    </div>
                    <div>
                        <select v-model="worker" name="work" class="select_option">
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option v-for="listItem in workerItems" :value=listItem.type>
                                {{ listItem.type }}</option>
                        </select>
                    </div>
                    <div class="m-[5px]">
                        <button :disabled="loading" @click="addList()" class="w-[200px] h-[35px] bg-white rounded-[5px]">Add
                            to list {{ newCheck }}
                        </button>
                    </div>
                </div>
                <div class="flex justify-evenly">
                    <WorkerSort v-for="item in workerItems" @changeState="changeState" @deleteData="deleteData"
                        :workerJMS="item.type" :local-data="localData">
                        {{ item.type }}
                    </WorkerSort>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { UserData, WorkerItem, WorkerType } from "../core/store/userStore";

const loading = ref(true);
const firstName = ref('')
const lastName = ref('')
const worker = ref('')
const maxInput = 5
const age = ref()
const localData = ref<Array<UserData>>([])
const inputMsg = ref('')
const inputMsgLast = ref()
const inputMsgAge = ref('')

const workerItems = ref<Array<WorkerItem>>([
    new WorkerItem(WorkerType.junior),
    new WorkerItem(WorkerType.middle),
    new WorkerItem(WorkerType.senior),
]);

function addList() {
    localData.value.push(new UserData(firstName.value, lastName.value, age.value, worker.value, undefined))
    localStorage.setItem('localData', JSON.stringify(localData.value))
    firstName.value = ''
    lastName.value = ''
    age.value = ''
}

function deleteData(index: number) {
    localData.value.splice(index, 1);
    localStorage.setItem('localData', JSON.stringify(localData.value));
}

function changeState(value: number, index: number) {
    localData.value[index].state = value;
    localStorage.setItem('localData', JSON.stringify(localData.value));
}

onMounted(() => {
    const items = localStorage.getItem("localData");
    if (items) {
        localData.value = JSON.parse(items);
    } else {
        localData.value = [];
    }
})

watch(firstName, (newFirstName) => {
    if (newFirstName === '') {
        inputMsg.value = 'Firstname is required';
    } else if (newFirstName.length < 3) {
        inputMsg.value = 'Firstname is incorrect';
    } else {
        inputMsg.value = '';
    }
});

watch(lastName, (newLastName) => {
    if (newLastName == '') {
        inputMsgLast.value = 'Lastname is required';
    } else if (newLastName.length < maxInput) {
        inputMsgLast.value = 'Lastname is incorrect';
    } else {
        inputMsgLast.value = '';
    }
});

watch(age, (newAge) => {
    if (newAge == '') {
        inputMsgAge.value = 'Age is required';
    } else {
        inputMsgAge.value = '';
    }
})

const newCheck = computed(() => {
    return lastName.value.length == maxInput
        && firstName.value.length == 3
        && age.value != '' ? loading.value = false : loading.value = true
})

</script>

<style scoped>
.rightSection {
    background-image: url(../public/image/nkar.png);
    position: absolute;
    z-index: auto;
    width: 54%;
    height: 113px;
    background-repeat: no-repeat;
    top: 76px;
    left: 49px;
    background-color: #0d0f17;
    opacity: 0.7;
}

.select_option {
    width: 20%;
    padding: 5px;
    background: #6a6a6a;
    color: white;
    outline: none;
    margin-left: 6px;
    border-radius: 5px;
}

.radio_input_div {
    width: 150px;
    display: flex;
    justify-content: space-between;
    background-color: #171b2661;
    padding: 5px;
    color: white;
    border-radius: 3px;
}
</style>

