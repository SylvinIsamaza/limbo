<template>
  <div class="lg:h-screen lg:block overflow-auto   w-full lg:w-fit   p-[10px] bg-[#0F212E] sticky right-0 top-0">
    <div class="flex flex-col items-center">
      <div
        :class="`flex   items-center translation-all duration-75 transition-all  gap-2 ${showMenu ? 'flex-row w-[250px] shadow-lg gap-3' : 'flex-col'} `">
        <div :class="`w-[30px] ${!showMenu && 'shadow-xl'} py-[17px] lg:block hidden`" @click="showMenu = !showMenu">
          <MenuIcon />
        </div>

        <a href="https://stake.com/zh/casino/home"
          :class="{ 'w-[90px] !bg-cover flex items-center justify-center  !bg-no-repeat h-[40px] rounded-[4px]': showMenu, '!w-[2.75rem]  !bg-cover rounded-[4px] h-[2.8rem] !bg-no-repeat': !showMenu }"
          :style="{ background: showMenu ? 'url(\'/assets/icons/pokercards.jpg\')' : 'url(\'/assets/icons/card.png\')' }">
          <p class="text-center text-white" v-if="showMenu">
            娱乐城
          </p>
        </a>
        <a href="https://stake.com/zh/sports/home"
          :class="{ 'w-[90px] flex items-center justify-center !bg-cover  !bg-no-repeat h-[40px] rounded-[4px]': showMenu, '!w-[2.75rem] !bg-cover rounded-[4px] h-[2.8rem] !bg-no-repeat': !showMenu }"
          :style="{ background: showMenu ? 'url(\'/assets/icons/sports_orange_ball_large.jpg\')' : 'url(\'/assets/icons/sports-orange_ball.jpg\')' }">
          <p class="text-center text-white" v-if="showMenu">
            体育
          </p>
        </a>
      </div>
      <div class="w-full lg:hidden block">
        <SearchComponent/>
      </div>
      <div class="flex overflow-auto w-full mt-[20px]  rounded-md bg-[#1A2C38]  flex-col gap-3">
        <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <PromotionIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            促销活动
          </p>
        </div>
        <a href="https://stake.com/zh/affiliate"
          class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <AffiliateIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            联盟计划
          </p>
        </a>
        <a href="https://stake.com/zh/vip-club"
          class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <VipIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            VIP 俱乐部
          </p>
        </a>
        <a href="https://stake.com/zh/blog"
          class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <BlogIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            博客
          </p>
        </a>
        <a href="https://stakecommunity.com/"
          class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[20px] ">
            <ForumIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            论坛
          </p>
        </a>
      </div>
      <div class="flex w-full mt-[20px]  rounded-md bg-[#1A2C38]  flex-col gap-3">
        <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <SponsorshipIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            赞助活动
          </p>
        </div>
        <a href="https://stake.com/zh/responsible-gambling"
          class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <ShieldIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            负责任博彩
          </p>
        </a>
        <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <SupportIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            在线支持
          </p>
        </div>
        <div class="h-[44px] min-w-full gap-2 flex items-center px-[16px] hover:bg-secondary rounded-md cursor-pointer">
          <div class="w-[16px] ">
            <LanguageIcon />
          </div>
          <p class="text-[14px] text-white font-[600]" v-if="showMenu">
            语言： 中文
          </p>
        </div>

      </div>
    </div>
  </div>
  <div class="w-full   bottom-0 left-0 bg-[#0f212e] fixed z-50  px-2  lg:hidden  ">


     <div class="flex items-center justify-between w-full px-2">
  <div
    v-for="(i, index) in mobileHeaderIcon"
    @click="handleClickMenu(index,i)"
    :class="`flex flex-col w-[60px] py-3 cursor-pointer items-center ${
      activeMobileHeader == index ? 'border-t-[3px] border-green-400' : ''
    }`"
  >
    <div class="w-[20px]">
      <MenuIconMobile v-if="index === 0" />
      <ListIcon v-if="index === 2" />
      <Tennis v-if="index === 3" />
      <CardMobile v-if="index === 1" />
      <ForumIcon v-if="index === 4" />
    </div>
    <p class="text-[14px] text-white">{{ i.name }}</p>
  </div>
</div>
  
  </div>
  
</template>
<script >


import Close from "../../assets/icons/close.svg"

export let showMenu = false
import Notification from "../../assets/icons/notification.svg"

import MenuIcon from "../../assets/icons/menu.svg"
import PromotionIcon from "../../assets/icons/promotion.svg"
import AffiliateIcon from "../../assets/icons/affiliate.svg"
import VipIcon from "../../assets/icons/vip.svg"
import BlogIcon from "../../assets/icons/blog.svg"
import SponsorshipIcon from "../../assets/icons/sponsorship.svg"
import ShieldIcon from "../../assets/icons/shield.svg"
import SupportIcon from "../../assets/icons/support.svg"
import LanguageIcon from "../../assets/icons/language.svg"
import ForumIcon from "../../assets/icons/forum.svg"
import MenuIconMobile from "../../assets/icons/menu-mobile.svg"
import CardMobile from "../../assets/icons/card-mobile.svg"
import ListIcon from "../../assets/icons/list.svg"
import Tennis from "../../assets/icons/tennis.svg"
import SearchComponent from "../SearchComponent.vue"
export let showSearchComponent = false;
export let activeMobileHeader

let mobileHeaderIcon = [{
  name: "浏览",
  type:"normal"
  // icon:<MenuIconMobile/>
},
{
  name: "娱乐城",
  type: "link",
  link:"https://stake.com/zh/casino/home"
  // icon:<CardMobile/>
},
{
  name: "投注",
  type:"normal"
  // icon:<ListIcon/>
},
{
  name: "体育",
  type:"normal"
  // icon:<Tennis/>
},

{
  name: "聊天室",
  type:"normal"
  // icon:<Tennis/>
}]

export default {
  data() {
    return {

      showMenu: true,
      activeMobileHeader:0,
    
      mobileHeaderIcon: mobileHeaderIcon
    };
  },
  methods: {
    handleClickMenu(value,item) {
      this.activeMobileHeader = value
      if (item.type == "link") {
        window.open(item.link,'_');
      }
      console.log(value)
  
   } 
  },

  components: {
    Notification,
    Close,
    MenuIcon,
    LanguageIcon,
    SupportIcon,
    PromotionIcon,
    AffiliateIcon,
    BlogIcon,
    VipIcon,
    SponsorshipIcon,
    ShieldIcon,
    ForumIcon,
    MenuIconMobile,
    CardMobile,
    ListIcon,
    Tennis,
    SearchComponent


  },

};

</script>