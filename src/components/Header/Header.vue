<template>
  <div class="flex sticky w-full lg:px-4 px-6 top-0 py-3 left-0 bg-[#1A2C38] shadow-md items-center justify-center">
    <div class="flex w-full justify-between lg:w-[1200px]">
      <p class="text-[30px] text-white">
        Logo
      </p>
      <div class="flex items-center">
        <div class="flex-1 bg-tertiary px-2">
          <div class="focus:outline-none bg-transparent w-fit text-white">
            <div class="flex-1 w-[180px] bg-tertiary">
              <CustomSelect
                :options="[{name:'0.00000000',image:'bitcoin.svg'}]"
                :default="{name:'0.00000000',image:'bitcoin.svg'}"
                class="select"
                @input="alert(displayToKey($event))"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center bg-[#1475E1] p-[14px]">
          <Wallet/>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <div class="lg:flex hidden items-center gap-2 cursor-pointer" @click="handleSearch">
          <img src="../../assets/icons/search.svg" alt="" >
          <p class="text-white text-[14px]">
            搜索
          </p>
        </div>
        <Profile/>
        <div class="w-fit" @click="handleNotification">
          <Notification />
        </div>
        <div class="w-fit lg:block hidden">

          <Review/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../CustomSelect.vue';
import Wallet from "../../assets/icons/wallet.svg"
import Search from "../../assets/icons/search.svg"
import Profile from "../../assets/icons/profile.svg"
import Review from "../../assets/icons/review.svg"
import Notification from "../../assets/icons/notification.svg"


export default {
  components: {
    CustomSelect,
    Wallet,
    Search,
    Profile,
    Review,
    Notification
  },
  props: {
    showNotification: Boolean,
    showSearch:Boolean
  },
  methods: {
    handleNotification() {
      this.$emit("updateNotification", true);
    },
    handleSearch() {
      this.$emit("updateShowSearch", true);
    }
     
  },
};
</script>
