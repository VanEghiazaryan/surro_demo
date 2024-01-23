
<template>
    <div class="grid grid-cols-12 ">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] h-screen overflow-y-auto">
            <div class="row-span-6 relative z-10">
                
                <div class="h-[50px] bg-[#0d0f17] fixed w-screen">
                    <Header></Header>
                </div>
                <div class="h-[50px]"></div>
                <div class="row-span-5 pl-[30px] pr-[30px]">
                    <div>
                        <h1 class=" text-white flex font-medium text-[25px]">Hits of the day <ChevronRightIcon
                                class="mt-[5px] w-[25px] text-[#f04f69]"></ChevronRightIcon>
                        </h1>
                    </div>
                    <!-- <div class="grid grid-cols-6 content-start">
                        <div class="w-[160px]" v-for = "heats in dayHits">
                            <div class="bg-[#171B26] w-[160px] h-[160px] m-[10px] ml-0 rounded-[10px] p-[10px] ">
                                <img class="w-[100%] rounded-[10px]" :src="setimage(heats.id)" alt="">
                            </div>
                            <p class="w-[100%] text-[white]">{{ heats.title }}</p>
                            <span class="text-[#a9a9a9] text-[12px]">{{ heats.content }}</span>
                        </div>
                    </div> -->
                    <div>
                        <h1 class=" text-white flex font-medium text-[25px] mt-[30px]">Top hits <ChevronRightIcon
                                class="mt-[5px] w-[25px] text-[#f04f69]"></ChevronRightIcon>
                        </h1>
                    </div>
                    <!-- <div v-if="!listData" class="text-[20px] text-white">
                        Loading ...
                    </div> -->
                    <!-- <div v-else class="w-full  flex overflow-x-auto scroll_none"> -->
                        <!-- <div v-for="(item) in listData">
                            <div class="bg-[#171B26] w-[160px] h-[160px] m-[10px] ml-0 rounded-[10px] p-[10px] ">
                                <img class="w-[100%] rounded-[10px]" :src="(setimage(item.id))" alt="">
                            </div>
                            <p class="w-[100%] text-[white]">{{ item.title }}</p>
                            <span class="text-[#adadad] text-[12px]">{{ item.content }}</span>
                        </div> -->
                    <!-- </div> -->
                </div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
   
<script setup lang="ts">

import { useMySchool } from "../core/store/teach";
const mySchool = useMySchool();

// import { ref } from "vue";
// import { ChevronRightIcon } from "@heroicons/vue/24/solid"
// import { SoundItem, useUserStore } from "../core/store/userStore";

// const store = useUserStore();

// const loading = ref(false)
// const listData = ref<Array<SoundItem> | null>(null);

// export class SoundItem {
//     id: number
//     title: string
//     content?: string

//     constructor(id: number, title: string, content: string) {
//         this.id = id,
//             this.title = title,
//             this.content = content
//     };
// }




// function setimage(index: number) {
//     const url = `../assets/image/front/music${index}.png`
//     return new URL(url, import.meta.url)
// }

// onMounted(async () =>  {
//     listData.value = await store.getSoundList()
// })

// const dayHits = ([
//     { id: 1, title: 'Popular today', content: 'Jony,Karen Aslanyan' },
//     { id: 2, title: 'Popular in recent days', content: 'Jony, Karen Aslanyan' },
//     { id: 3, title: 'Hits of Month', content: 'Jony, Karen Aslanyan' },
//     { id: 4, title: 'Heats of season', content: 'Jony,Andro' },
// ]);
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
    left: 17%;
    top: 8%;
}
.scroll_none::-webkit-scrollbar{
    display: none;
}
:-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

</style>