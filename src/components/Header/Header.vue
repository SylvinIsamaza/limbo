<template>
  <div class="flex   sticky w-full  top-0 py-3 left-0 bg-[#1A2C38] shadow-md  items-center justify-center">
    <div class="flex w-full justify-between lg:w-[1200px]">
      <p class="text-[30px] text-white">
      Logo
    </p>
    <div class="flex items-center">
    <div class="flex-1 bg-tertiary px-2">
      <div class="focus:outline-none bg-transparent  w-fit text-white">
        <div class="flex-1 w-[180px] bg-tertiary">
    <CustomSelect :options="[{name:'0.00000000',image:'bitcoin.svg'}]"
      :default="{name:'0.00000000',image:'bitcoin.svg'}"
      class="select"
      @input="alert(displayToKey($event))"/> 
    </div>
      </div>
    </div>
    <div class="flex justify-center bg-[#1475E1] p-[14px]">
      <img src="../../assets/icons/wallet.svg" alt="">
    </div>
  </div>
    <div class="flex gap-2 items-center">
      <div class="flex items-center gap-2">
        <img src="../../assets/icons/search.svg" alt="" >
        <p class="text-white text-[14px]">
          搜索
        </p>

      </div>
     <img src="../../assets/icons/profile.svg" alt="">
     <img src="../../assets/icons/notification.svg" alt="">
     <img src="../../assets/icons/review.svg" alt="">



    </div>
    </div>

  </div>
</template>

<script>
import CustomSelect  from '../CustomSelect.vue';
export default {
  components: {
    CustomSelect  
  },
  data() {
    return {
      selectedOption: null,
      options: [
        { value: 0, label: 'Bitcoin', image: '/src/assets/icons/bitcoin.svg' },
        { value: 1, label: 'Ethereum', image: '/src/assets/icons/ethereum.svg' },
        // Add more options as needed
      ]
    };
  }
};
</script>