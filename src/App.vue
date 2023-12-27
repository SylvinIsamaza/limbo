<template>
  <div class="flex w-full">
    <div class=" h-screen w-[60px] p-[10px] bg-[#0F212E] sticky right-0 top-0" >
      <div class="flex flex-col items-start">
        <div class="flex  flex-col gap-2">
          <img src="./assets/icons/menu.svg" alt=" ">
        
          <img src="./assets/icons/card.png" alt="" class="">
          <img src="./assets/icons/tennis.png" alt="">
        </div>
        <div class="flex w-full mt-[20px]  rounded-lg bg-[#1A2C38]  flex-col gap-3">
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/promotion.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px]  flex items-center justify-center">
            <img src="./assets/icons/affiliate.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/vip.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/blog.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/forum.svg" alt="">
          </div>
        </div>
        <div class="flex w-full mt-[20px]  rounded-lg bg-[#1A2C38]  flex-col gap-3">
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/sponsorship.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px]  flex items-center justify-center">
            <img src="./assets/icons/shield.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/support.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/language.svg" alt="">
          </div>
          <div class="h-[44px] w-[44px] flex items-center justify-center">
            <img src="./assets/icons/forum.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <PixiCounter :targetNumber="100"/>
    


  </div>
</template>

<script >
import PixiCounter from "./components/CountComponent.vue";


export default {
  components: {
    PixiCounter,
  },
  
};
console
</script>