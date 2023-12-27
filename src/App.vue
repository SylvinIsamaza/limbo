<template>
  <div class="flex w-full">
    <div class="w-[20%] h-screen p-[22px] sticky right-0 top-0" >
      <div class="flex flex-col items-start">
        <div class="flex lg:flex-row flex-col">
          <img src="./assets/icons/menu.svg" alt="">
          <div class="px-2">
           
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