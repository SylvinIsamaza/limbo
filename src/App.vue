<template>
  <div class="flex h-screen overflow-hidden w-full">
    <Sidebar/>
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
import Close from "./assets/icons/close.svg"
import SearchComponent from "./components/SearchComponent.vue"
export let showMenu = false
export let showNotfication = false
export let showSearch=false
import Notification from "./assets/icons/notification.svg"
import HeaderComponent from "./components/Header/Header.vue";
import MenuIcon from "./assets/icons/menu.svg"
import PromotionIcon from "./assets/icons/promotion.svg"
import AffiliateIcon from "./assets/icons/affiliate.svg"
import VipIcon from "./assets/icons/vip.svg"
import BlogIcon from "./assets/icons/blog.svg"
import SponsorshipIcon from "./assets/icons/sponsorship.svg"
import ShieldIcon from "./assets/icons/shield.svg"
import SupportIcon from "./assets/icons/support.svg"
import LanguageIcon from "./assets/icons/language.svg"
import ForumIcon from "./assets/icons/forum.svg"  
import Sidebar from "./components/Sidebar/Sidebar.vue";

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
    SearchComponent,
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
    Sidebar
},
  
};

</script>