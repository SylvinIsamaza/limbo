<template>
  <div class="flex h-screen  sticky w-full top-[90px] px-3 z-[100] py-3 left-0 flex-col gap-2    bg-[#0000003e]  ">
<div class="rounded-full flex items-center gap-2 justify-between border-[2px] py-2 px-3 border-secondary">
  <div class="flex relative gap-2 items-center" @click="handleOPen">
  <p class="text-white">娱乐城</p>
  <DownArrow/>
  <div class="min-w-[1.5px] h-[20px] bg-white"></div>
  </div>
  <div class="flex-1">
    <div class="flex items-center gap-2 w-full">
       <Search/>
      <input class="flex-1 bg-transparent focus:outline-none text-white" v-model="searchValue" placeholder="搜索游戏">
    </div>
  </div>
  
  <Close/>
</div>
<div class="rounded-md bg-tertiary flex flex-col gap-3 w-full p-4">
<div class="w-full py-6 flex  justify-center items-center">
<p class="text-white" v-if="searchValue.length<3">
  需要至少 3 个字符来进行搜索
</p>
<div class="flex gap-2 items-center justify-start w-full" v-if="searchValue.length>3">
  <div class="w-fit">
   <img src="../assets//icons/pokercards.jpg" class="w-[180px] h-[200px]  rounded-md object-cover ">
  </div>
  <div class="w-fit">
   <img src="../assets//icons/pokercards.jpg" class="w-[180px] h-[200px]  rounded-md object-cover ">
  </div>
  <div class="w-fit">
   <img src="../assets//icons/pokercards.jpg" class="w-[180px] h-[200px]  rounded-md object-cover ">
  </div>  
</div>


</div>
<div class="flex items-center justify-between" v-if="searchValue.length<3">
  <p class="text-white">
    近期搜索
  </p>
  <p class="text-white">
    清除搜索 (5)
  </p>
</div>
<div v-if="searchValue.length<3" class="flex items-center  gap-3 overflow-x-auto">
  <div v-for="(i,index) in tags" class="rounded-full flex py-1 gap-2 items-center pl-2 px-1 bg-secondary cursor-pointer " @click="handleTag(i)">
    <p class="text-white">

     {{i}}
    </p>
    <Close/>
  </div>
</div>
</div>
  </div>
</template>
<script>
import Close from "../assets/icons/close.svg";
import Search from "../assets/icons/search.svg";
import DownArrow from "../assets/icons/down_arrow.svg";

export let isOpen = false;
export let searchValue=""
export let tags = ["Monopoly", "Crazy time", "Sweet bonanza", "MoneyTrain", "Rectoonz"];

export default {
  name: "SearchComponent",
  components: {
    Close,
    Search,
    DownArrow,
  },
  data() {
    return {
      isOpen: false,
      tags: tags,
      searchValue
    };
  },
  methods: {
    handleOPen() {
      console.log(this.isOpen);
      this.isOpen = !this.isOpen;
    },
    handleTag(tag) {
      this.searchValue=tag
    }
  },
};
</script>
