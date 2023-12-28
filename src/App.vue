<template>
  <div class="flex h-screen overflow-hidden w-full">
    <div class=" lg:h-screen lg:block hidden   p-[10px] bg-[#0F212E] sticky right-0 top-0" >
      <div class="flex flex-col items-center">
        <a href="https://stake.com/zh/casino/home" :class="`flex items-center translation-all duration-75 transition-all  gap-2 ${showMenu?'flex-row w-[250px] shadow-lg gap-3':'flex-col'} `">
          <img src="/assets/icons/menu.svg" alt=" " :class="`w-[30px] ${!showMenu&&'shadow-xl'} py-[17px]`" @click="showMenu=!showMenu">
          <div :class="{ 'w-[90px] !bg-cover flex items-center justify-center  !bg-no-repeat h-[40px] rounded-[4px]': showMenu, '!w-[2.75rem]  !bg-cover rounded-[4px] h-[2.8rem] !bg-no-repeat': !showMenu }" :style="{ background: showMenu ? 'url(\'/src/assets/icons/pokercards.jpg\')' : 'url(\'/src/assets/icons/card.png\')' } ">
          <p class="text-center text-white" v-if="showMenu">
            娱乐城
          </p>
          </div>
        <a href="https://stake.com/zh/sports/home" :class="{ 'w-[90px] flex items-center justify-center !bg-cover  !bg-no-repeat h-[40px] rounded-[4px]': showMenu, '!w-[2.75rem] !bg-cover rounded-[4px] h-[2.8rem] !bg-no-repeat': !showMenu }" :style="{ background: showMenu ? 'url(\'/src/assets/icons/sports_orange_ball_large.jpg\')' : 'url(\'/src/assets/icons/sports-orange_ball.jpg\')' } ">
          <p class="text-center text-white" v-if="showMenu">
            体育
          </p>
        </a>
      </a>
        <div class="flex w-full mt-[20px]  rounded-md bg-[#1A2C38]  flex-col gap-3">
          <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/promotion.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            促销活动 
           </p> 
          </div>
          <a href="https://stake.com/zh/affiliate" class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/affiliate.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            联盟计划
           </p> 
          </a>
          <a href="https://stake.com/zh/vip-club" class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/vip.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            VIP 俱乐部
           </p> 
          </a>
          <a href="https://stake.com/zh/blog" class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/blog.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            博客
           </p> 
          </a>
          <a href="https://stakecommunity.com/" class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/forum.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            论坛
           </p> 
          </a>
        </div>
        <div class="flex w-full mt-[20px]  rounded-md bg-[#1A2C38]  flex-col gap-3">
          <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/sponsorship.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            赞助活动
           </p> 
          </div>
          <a href="https://stake.com/zh/responsible-gambling" class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/shield.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            负责任博彩
           </p> 
          </a>
          <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/support.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            在线支持
           </p> 
          </div>
      <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
            <img src="/assets/icons/language.svg" alt="" class="w-[16px] ">
           <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            语言： 中文
           </p> 
          </div>
    
        </div>
      </div>
    </div>
    <div class="  flex overflow-y-auto flex-col justify-center items-center flex-1  py-0 gap-4" >
    <HeaderComponent :showNotification="showNotification" @updateNotification="updateNotification" :showSearch="showSearch" @updateShowSearch="handleSearchShow"/>
    <SearchComponent v-if="showSearch"/>
    <PixiCounter :targetNumber="100" :showNotfication="showNotification"/>
  
    </div>
    <div class="w-[25%] h-screen lg:w-[400px] sticky top-0 left-0 bg-tertiary" v-if="showNotification">
   <div class="py-[15px] px-3 shadow-md flex justify-between items-center " >
  <div class="flex">

    <Notification/> <p class="text-white text-[14px]">
      通知
    </p>
  </div>
  <div class="rounded-full hover:bg-secondary p-2" @click="closeNotification" >
    <Close/>
  </div>
</div>
    </div>
    


  </div>
</template>

<script >
// import { Icon } from '@iconify/vue';
import PixiCounter from "./components/CountComponent.vue";
import Close from "/assets/icons/close.svg"
import SearchComponent from "./components/SearchComponent.vue"
export let showMenu = false
export let showNotfication = false
export let showSearch=false
import Notification from "/assets/icons/notification.svg"
import HeaderComponent from "./components/Header/Header.vue";

export default {
  data() {
    return {

      showMenu: true,
      showNotification: false,
      showSearch:showSearch
    };
  },
  methods: {
    updateNotification(value) {
      this.showNotification = value;
    },
    closeNotification() {
      this.showNotification=false
    },
    handleSearchShow() {
      this.showSearch=!this.showSearch
    }
  },
  components: {
    PixiCounter,
    Notification,
    HeaderComponent,
    Close, 
    SearchComponent
  },
  
};

</script>