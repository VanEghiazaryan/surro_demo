<template>
    <div class="col-span-2 bg-[#171B26] h-screen grid">
        <div class="row-span-1">
            <div class="mt-[24px] ml-[30px] mb-[20px]">
                <img src="../public/image/Logo.png" />
            </div>
        </div>
        <div class="row-span-2">
            <NuxtLink to="/" >
                <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer	">
                    <Squares2X2Icon class=" w-[25px] icn_section"></Squares2X2Icon> <span class="p-[10px]">Home</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/search" :class="{ 'router-link-active': routers[1] === 'search' }">
                <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <MagnifyingGlassIcon class="icn_section w-[20px]"></MagnifyingGlassIcon> <span
                        class="p-[10px]">Search</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/teach" :class="{ 'router-link-active': routers[1] === 'teach' }">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <AcademicCapIcon class="icn_section w-[20px]"></AcademicCapIcon> <span class="p-[10px]">Shcool</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/geometry" :class="{ 'router-link-active': routers[1] === 'geometry' }">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <RectangleGroupIcon class="icn_section w-[20px]"></RectangleGroupIcon> <span
                        class="p-[10px]">Geomtry</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/animals" :class="{'router-link-active': routers[1] === 'animals' }">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <BugAntIcon class="icn_section w-[20px]"></BugAntIcon> <span class="p-[10px]">Animals</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/car" :class="{ 'router-link-active': routers[1] === 'car' }">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <TruckIcon class="icn_section w-[20px]"></TruckIcon> <span class="p-[10px]">Car</span>
                </div>
            </NuxtLink>
        </div>
        <div class="row-span-4">

        </div>
    </div>
</template>

<script setup>
import { Squares2X2Icon, MagnifyingGlassIcon, AcademicCapIcon, RectangleGroupIcon, BugAntIcon,TruckIcon } from "@heroicons/vue/24/solid"
const router = useRoute().fullPath
const routers = router.split('/') 

</script>

<style scoped>
.router-link-active div {
    background-color: #0D0F17;
    border-left: 2px solid rgb(240, 79, 105);
}

.router-link-active div .icn_section {
    color: rgb(240, 79, 105);
}
</style>