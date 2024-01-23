<template>
    <div class="w-[32%] bg-[#6a6a6a] min-h-[150px] ">
        <div
            class="flex justify-evenly items-center p-[3px] text-white border-solid border-[#6a6a6a] border-2 bg-[#171b26]">
            <slot />
            <ChangeState @changeState="changeStateWorker" />
        </div>
        <div v-for="(item, index) in props.localData">
            <WorkerData v-if="item.worker === props.workerJMS" @changeState="changeState" :itemData="item" :index="index"
                @deleteData="deleteData">
                <ChangeState :currentState="item.state" @changeState='(state) => changeState(state, index)' />
                <span>{{ item.firstName }} </span>
                <span>{{ item.lastName }}</span>
                <span>{{ item.worker }}</span>
            </WorkerData>
        </div>
    </div>
</template>

<script setup lang="ts">
import { WorkerItem, WorkerType } from "../core/store/userStore";

const workerItems = ref<Array<WorkerItem>>([
    new WorkerItem(WorkerType.junior),
    new WorkerItem(WorkerType.middle),
    new WorkerItem(WorkerType.senior)
])
const props = defineProps([
    'workerJMS', 'localData'
])

const emit = defineEmits(['deleteData', 'changeState'])

function changeState(value: Number, index: Number) {
    emit('changeState', value, index)
}

function deleteData(index: Number) {
    emit('deleteData', index)
}

function changeStateWorker(value: number) {
    for (let i = 0; i < props.localData.length; i++) {
        if (props.localData[i].worker == props.workerJMS) {
            props.localData[i].state = value;
        }
    }
    localStorage.setItem('localData', JSON.stringify(props.localData))
}
</script>

<style lang="scss" scoped></style>