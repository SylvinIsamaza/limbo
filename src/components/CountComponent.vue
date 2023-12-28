<template>

<div class="flex flex-col h-screen overflow-auto ">


    <div class="bg-[#1A2C38] lg:w-[1200px] flex-1 flex flex-col gap-4 px-[40px] ">
      <div class="p-[16px] pt-0 pl-0 w-full py-1 bg-tertiary rounded-lg flex flex-col gap-">
      <div class="flex pt-0 w-full">
        <div class="flex-col   px-2 rounded-l-lg rounded-b-none rounded-r-none   bg-secondary py-3 ">
          <div class="bg-tertiary gap-1 flex w rounded-full p-[3px]">
         
        <button v-for="(i,index) in [{name:'手动投注'},{name:'自动投注'}]" :class=" `flex-1 rounded-full py-[10px] text-white px-[20px] ${firstGroupActiveButton==parseInt(index)?'bg-primary':''}`" @click="()=>{firstGroupActiveButton=index}">
          {{i.name}}
        </button>
    
      </div>

      <div  class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          投注额
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
      </div>
      <div  class="flex mt-2 w-full border-[#2F4553] rounded-md bg-tertiary border-[3px]">
      <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
      <button class="text-white text-[14px] px-[16px] bg-[#2F4553]">½</button>
      <div class="h-[20px] w-[2px] bg-tertiary"></div>
      <button class="text-white text-[14px] px-[16px] bg-[#2F4553]">2x</button>
      </div>
      <div  v-if="firstGroupActiveButton==1" class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          投注次数
        </p>
     
      </div>
      
      <div v-if="firstGroupActiveButton==1"  class="flex mt-2 w-full border-[#2F4553] rounded-md bg-tertiary border-[3px]">
      <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
     
      <button ><img src="../assets/icons/infinity.svg" alt="" class="pr-2"></button>
      </div>     <div  v-if="firstGroupActiveButton==1" class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          止盈
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
     
      </div>
      
      <div v-if="firstGroupActiveButton==1"  class="flex mt-2 w-full border-[#2F4553] rounded-md bg-tertiary border-[3px]">
        <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
      <button class="text-white text-[14px] px-[16px] bg-[#2F4553]">½</button>
      <div class="h-[20px] w-[2px] bg-tertiary"></div>
      <button class="text-white text-[14px] px-[16px] bg-[#2F4553]">2x</button>
      </div>
      <div  v-if="firstGroupActiveButton==1" class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          止损
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
      </div>
      
      <div v-if="firstGroupActiveButton==1"  class="flex mt-2 w-full border-[#2F4553] rounded-md bg-primary border-[3px] pr-2">
        <button class="text-white text-[14px] bg-tertiary px-[14px] rounded-md">重置</button>
      
        <button class="text-white text-[14px] px-[20px] bg-[#2F4553]">增加：</button>
        <div  class="bg-transparent h-[40px] flex-1 focus:outline-none text-white flex items-center  px-1" >0</div>
        <img src="../assets/icons/percentage.svg" alt="">

      </div>
      
      <div  v-if="firstGroupActiveButton==1" class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          止盈
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
     
      </div>
      
      <div v-if="firstGroupActiveButton==1"  class="flex mt-2 w-full border-[#2F4553] rounded-md bg-primary border-[3px] pr-2">
        <button class="text-white text-[14px] bg-tertiary px-[14px] rounded-md">重置</button>
      
        <button class="text-white text-[14px] px-[20px] bg-[#2F4553]">增加：</button>
        <div  class="bg-transparent h-[40px] flex-1 focus:outline-none text-white flex items-center  px-1" >0</div>
        <img src="../assets/icons/percentage.svg" alt="">

      </div>
      <div  v-if="firstGroupActiveButton==1" class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          止损
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
      </div>
      
      <div v-if="firstGroupActiveButton==1"  class="flex mt-2 w-full border-[#2F4553] rounded-md bg-tertiary border-[3px]">
      <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
     
      <button ><img src="../assets/icons/bitcoin.svg" alt="" class="pr-2"></button>
      </div>
      <div v-if="firstGroupActiveButton==0" class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          投注额
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
      </div>
      <div v-if="firstGroupActiveButton==0" class="flex mt-2 w-full bg-[#2F4553] rounded-md ">
      <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
      
      <img src="../assets/icons/bitcoin.svg" alt="" class="p-2">
      </div>
      
      <button  type="text" class="flex justify-center items-center mt-2 w-full bg-[#00E701] rounded-md h-[40px] text-tertiary flex-1 " @click="startAnimation">
       <p v-if="firstGroupActiveButton==0">
        投注
      </p> 
      <p v-if="firstGroupActiveButton==1">
        开始自动投注
      </p> 
      </button>
      
            
      <button v-if="firstGroupActiveButton==1"  type="text" class="flex justify-center items-center mt-2 w-full bg-[#00E701] rounded-md h-[40px] text-tertiary flex-1 " @click="startAnimation">
      
      <p >
        开始自动投注
      </p> 
      </button>
      
  
      ]

        </div>
        <div class="flex w-full   items-center bg-tertiary flex-col py-[16px] px-[16px]">
          <div class="flex items-center w-full gap-3 justify-end">
            <div class="rounded-full bg-secondary text-white py-[6px] px-[14px]">
              1.60x
            </div>
            <div class="rounded-full bg-[#00E700]  py-[6px] px-[14px]">
              1.60x
            </div>
          </div>
          <div ref="pixiContainer" class="h-[510px] bg-tertiary flex items-center justify-center">
            <p class="text-5xl font-[600] text-white">1.01x</p>
          </div>
          <div class="flex items-center py-2 gap-3 justify-between w-full px-[16px] rounded-md  bg-primary">
            <div class="flex-col gap-2 w-full ">
            <label for="multiplier" class="text-white">获胜机率</label>
            <div class="py-2 w-full border-secondary border-[2px] flex  pl-2 pr-3 rounded-md">
              
                
                 <input  v-model="inputNumber" id="multiplier"   type="number" class="w-full focus:outline-none text-white  bg-transparent ">
                 <img src="../assets/icons/cross.svg" alt="">
                </div>
              </div>
            <div class="flex-col gap-2 w-full ">
            <label for="chance" class="text-white">获胜机率</label>
            <div class="py-2 w-full border-secondary border-[2px] flex  pl-2 pr-3 rounded-md">
              
                
                 <input  v-model="inputNumber" id="chance"   type="number" class="w-full focus:outline-none text-white  bg-transparent  ">
                 <img src="../assets/icons/cross.svg" alt="">
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center p-[20px]  justify-between">
        <div class="flex items-center gap-3">
         <img src="../assets/icons/settings.svg" alt="">
         <img src="../assets/icons/rectangle.svg" alt="">
         <img src="../assets/icons/graph.svg" alt="">
         <img src="../assets/icons/star.svg" alt="">
        </div>
        <img src="../assets/icons/logo.svg" alt="">
        <p class="font-[600] text-[14px] text-white">公平性</p>
      </div>
      
      
      
    </div>
    <div class="flex items-center  bg-tertiary w-full rounded-[8px] justify-between px-[22px]">
<div class="flex gap-[5px]  rounded-md p-[20px]  text-[16px] text-white items-center">
  <span >Limbo</span>
  <span>Stake</span>
  <span>原创游戏</span>
</div>
<div class="flex gap-4 pr-[10px]">
  <div class="flex rounded-full bg-primary p-2">
  <div class="flex gap-1 items-center">
    <img src="../assets/icons/tournament.svg" alt="">
    <p class="text-[12px] text-[#B1BAD3] font-[600]">
      1,000.00x
    </p>
    <img src="../assets/icons/incognito.svg" alt="">
    <p class="text-[#B1BAD3]">隐身</p>
 
  </div>
</div>
<img src="../assets/icons/right_chevrolet.svg" alt="">


</div>
    </div>
    <div class="flex items-center justify-between w-full">
      <div class="bg-tertiary rounded-full p-[3px]">
        <button v-for="(i,index) in [{name:'我的投注'},{name:'所有投注'},{name:'风云榜'},{name:'竞赛排行榜'}]" :class=" `flex-1 rounded-full py-[10px] text-white px-[20px] ${secondGroupActiveButton==parseInt(index)?'bg-primary':''}`" @click="()=>{secondGroupActiveButton=index}">
          {{i.name}}
        </button>
   
      </div>
      <div class="flex items-center bg-tertiary border-[1px] py-2 px-1 gap-1  border-primary">
        <p class="text-[12px] text-white   rounded-md px-1">10</p>
        <img src="../assets/icons/down_arrow.svg" alt="">
      </div>
    </div>
    <table class="w-full">
      <thead>

        <tr class="text-white ">
          <th class="text-start w-1/6">游戏</th>
          <th class="text-center w-1/6">玩家</th>
          <th class="text-center w-1/6">时间</th>
          <th class="text-end w-1/6">投注额</th>
          <th class="text-end w-1/6">乘数</th>
          <th class="text-end w-1/6">支付额</th>
        </tr>
      </thead>
      <tbody>
       
  <tr v-for="(i, index) in [1, 2, 3, 4, 5, 6]" :class="{ 'bg-secondary': index % 2 === 0 }" :style="{ 'height': '50px', 'padding': '2px','border-radius':'20px' }" >
    <td class="text-start text-white">
      <p class="text-[14px] gap-1 flex items-center pl-2"> <img src="../assets/icons/bot.svg" alt=""> Crash</p>
    </td>
    <td class="text-end text-white">
      <p class="text-[14px] items-center justify-center flex gap-1"><img src="../assets/icons/incognito.svg" alt=""> 隐身</p>
    </td>
    <td class="text-center text-white">
      <p class="text-[14px]">15:33</p>
    </td>
    <td class="text-end text-white">
      <p class="text-[14px] flex items-center gap-1"><img src="../assets/icons/incognito.svg" alt=""> 2011,232472...</p>
    </td>
    <td class="text-end text-white">
      <p class="text-[14px] ">13.10x</p>
    </td>
    <td>
      <p class="text-[14px] text-white text-end">
        -2011,232472...
      </p>
    </td>
  </tr>


      </tbody>
    </table>
    </div>
    <div class=" bg-tertiary items-center  flex gap-[40px] pt-[20px] px-[30px] flex-1 w-full flex-col">
  <div class="grid grid-cols-6 lg:w-[1200px] gap-[51px]">
      <div class="flex-col flex items-start">
        <p class="font-[600] py-2 text-white text-[14px]">
          体育
        </p>
      <a href="https://stake.com/zh/sports/home" class="w-fit">
        
        <p class="font-[600] text-[#B1BAD3] text-[14px]">
          主页
        </p>
      </a>
      <a href="https://stake.com/zh/sports/live" class="w-fit">

        <p class="font-[600] text-[#B1BAD3] text-[14px]">
          滚球
        </p>
      </a>
      <a href="https://stake.com/zh/policies/sportsbook" class="w-f">

        <p class="font-[600] text-[#B1BAD3] text-[14px]">
         
          体育博彩规则
        </p>
      </a>
 
      </div>
      <div class="flex-col flex items-start">
        <p class="font-[600] py-2 text-white text-[14px]">
          娱乐城  
   
        </p>
        <a href="https://stake.com/zh/casino/home" class="w-f">


          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            游戏
          </p>
</a>
    <a href="https://stake.com/zh/vip-club" class="w-fit">
      
      <p class="font-[600] text-[#B1BAD3] text-[14px]">
        VIP俱乐部
      </p>
    </a>
    <a href="https://stake.com/zh/promotions" class="w-fit">

      <p class="font-[600] text-[#B1BAD3] text-[14px]">
       
        促销活动
      </p>
    </a>
      </div>
      <div class="flex-col flex items-start">
        <p class="font-[600] py-2 text-white text-[14px]">
          支持
        </p>
        <a href="https://stake.com/zh/provably-fair" class="w-fit">

          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            公平性
          </p>
        </a>
        <a href="https://stake.com/zh/affiliate">

          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            联盟计划
          </p>
        </a>
        <a href="https://www.begambleaware.org/">

<p class="font-[600] text-[#B1BAD3] text-[14px]">
  负责任博彩
</p>
</a>
<a href="https://stake.com/zh/responsible-gambling">
  <p class="font-[600] text-[#B1BAD3] text-[14px]">
         
         在线支持
      </p>
</a>

  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
         帮助中心 <img src="../assets/icons/open.svg" alt="">
        </p>

      
<a href="https://help.stake.com/">
  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
         帮助中心 <img src="../assets/icons/open.svg" alt="">
        </p>
</a>
     

       
     
      </div>
      <div class="flex-col flex items-start">
        <p class="font-[600] py-2 text-white text-[14px]">
          社区
        </p>
        <a href="https://stake.com/zh/blog" class="w-fit">

          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            博客
          </p>
        </a>
        <a href="https://stakecommunity.com/">

          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            论坛
          </p>
        </a>
        <a href="https://facebook.com/StakeCasino">

<p class="font-[600] text-[#B1BAD3] flex gap-2 text-[14px]">
  Facebook <img src="../assets/icons/open.svg" alt="">
</p>
</a>
<a href="https://twitter.com/stake">
  <p class="font-[600] text-[#B1BAD3] flex gap-2 text-[14px]">
         
         Twitter <img src="../assets/icons/open.svg" alt="">
      </p>
</a>


      
<a href="https://instagram.com/stake/">
  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
         Instagram<img src="../assets/icons/open.svg" alt="">
        </p>
</a>
<a href="https://youtube.com/c/StakeCasinoTV">
  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
        Youtube<img src="../assets/icons/open.svg" alt="">
        </p>
</a>
<a href="https://shop.stake.com/">
  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
    网购<img src="../assets/icons/open.svg" alt="">
        </p>
</a>
     

       
     
      </div>
      <div class="flex-col flex items-start">
        <p class="font-[600] py-2 text-white text-[14px]">
          支持
        </p>
        <a href="https://stake.com/zh/provably-fair" class="w-fit">

          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            公平性
          </p>
        </a>
        <a href="https://stake.com/zh/affiliate">

          <p class="font-[600] text-[#B1BAD3] text-[14px]">
            联盟计划
          </p>
        </a>
        <a href="https://www.begambleaware.org/">

<p class="font-[600] text-[#B1BAD3] text-[14px]">
  负责任博彩
</p>
</a>
<a href="https://stake.com/zh/responsible-gambling">
  <p class="font-[600] text-[#B1BAD3] text-[14px]">
         
         在线支持
      </p>
</a>

  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
         帮助中心 <img src="../assets/icons/open.svg" alt="">
        </p>

      
<a href="https://help.stake.com/">
  <p class="font-[600] flex items-center gap-2 text-[#B1BAD3] text-[14px]">
         
         帮助中心 <img src="../assets/icons/open.svg" alt="">
        </p>
</a>
     

       
     
      </div>
      
     
     
      <div class="flex-col items-start flex justify-center">
        <p class="font-[600] text-white py-2 text-[14px]">
        语言
          
        </p>
     
      <p class="font-[600] flex items-center gap-2 text-white text-[14px]">
        
       帮助中心 <img src="../assets/icons/down_arrow.svg" alt="">
      </p>
      <p class="font-[600] flex items-center gap-2 text-white text-[14px]">
        
        赔率
       </p>
       <p class="font-[600] flex items-center gap-2 text-white text-[14px]">
        
        小数式 <img src="../assets/icons/down_arrow.svg" alt="">
       </p>
     </div>
    </div>
    <div class="w-full lg:w-[1200px] h-[2px] bg-[#2F4553]"></div>
    <CurrencyComponent></CurrencyComponent>
    <div class="w-full h-[2px] bg-[#2F4553]"></div>

    <div class="flex lg:w-[1200px] w-full border-y-[1.5px] py-3 border-[#2F4553] justify-between items-center">
<div class="flex items-center w-full justify-between">
  <a href="https://cryptogambling.org/" class="w-fit">
      
    <img src="../assets/icons/verify.png" alt="" class="h-[80px]">
    </a>
  <!-- <img src="../assets/icons/alfa-logo.svg" alt="" class="h-[60px]"> -->
  
<a href="https://stake.com/zh/sponsorships/alfa-romeo-f1-team-stake" class="w-fit">

  <AlfaLogo/>
</a>
     
  
<a href="https://stake.com/zh/sponsorships/everton" class="wfit">

  <EvertonLogo/>
</a>
<a href="https://stake.com/zh" class="w-fit">
  <UFC/>

</a>
  
  <!-- <img src="../assets/icons/everton-logo.svg" alt="" class="h-[60px]"> -->
  <!-- <img src="../assets/icons/ufc-partner.svg" alt="" class="h-[60px]"> -->
  
</div>
  </div>
  <div class="w-full h-[2px] bg-[#2F4553]"></div>
  <div class="flex items-center flex-col gap-2 justify-center">
    <a href="https://stake.com/zh" class="w-fit">

      <img src="../assets/icons/stake.png" class="w" >
    </a>
    <p class="text-[#D9D9D9]">
      &copy; 2023 Stake.com | 版权所有

    </p>
    <p class="text-[#D9D9D9]">
      1 BTC = $42,716.79 1 BTC = $42,498.94 
    </p>
  </div>

 </div>
    
 
   
  </div>

</template>

<script>
import * as PIXI from 'pixi.js';
import HeaderComponent from "../components/Header/Header.vue"
import CurrencyComponent from './Currency.vue';
// import Verify from "../assets/icons/verify.svg";
import AlfaLogo from "../assets/icons/alfa-logo.svg";
import EvertonLogo from "../assets/icons/everton-logo.svg";
import UFC from "../assets/icons/ufc-partner.svg"

import LiteCoinIcon from "../assets/icons/litecoin.svg"
import EthereumIcon from "../assets/icons/ethereum.svg"
import BitcoinIcon from "../assets/icons/bitcoin.svg"
import TronIcon from "../assets/icons/tron.svg"
import RippleIcon from "../assets/icons/ripple.svg"
import BitcoinCashIcon from "../assets/icons/bitcoin-cash.svg"
import TetherIcon from "../assets/icons/tether.svg"
import SafeGambleIcon from "../assets/icons/safe-gamble.svg"
import EighteenPlusIcon from "../assets/icons/18plus.svg"
import OpenIcon from "../assets/icons/open.svg"

export let showNotification

export default {
  components:{
    CurrencyComponent,
    HeaderComponent,
    EvertonLogo,
    AlfaLogo,
    UFC,
    LiteCoinIcon,
    EthereumIcon,
    BitcoinIcon,
    TronIcon,
    RippleIcon,
    BitcoinCashIcon,
    TetherIcon,
    SafeGambleIcon,
    EighteenPlusIcon


    


  },
  props: {
    showNotification
  },
  data() {
    return {
      app: null,
      firstGroupActiveButton: 0,
      secondGroupActiveButton: 2,
      inputNumber: 1.01,
      play:true
    };
  },
  methods: {

   intervalBet() {
      setInterval(() => {
        
        this.startAnimation()
      }, 1000);
    },
    startAnimation() {
    if (this.firstGroupActiveButton == 0) {
      if (this.app) {
        this.app.destroy(); // Destroy the existing PIXI.Application and release its WebGL context
      }

      this.initializePixi();
    } else {
      // Using setInterval to run startAnimation() every 3000 milliseconds
      
    }
  },
    initializePixi() {
      // Remove the previous Pixi container
      const previousContainer = this.$refs.pixiContainer;
      if (previousContainer.firstChild) {
        previousContainer.removeChild(previousContainer.firstChild);
      }

      // Create a Pixi Application
      const app = new PIXI.Application({
        width: 400,
        height: 200,
        antialias: true,
        backgroundColor: 0x071D2A, // Transparent background
      });

      // Append the Pixi Application's view to the container
      this.$refs.pixiContainer.appendChild(app.view);

      // Generate a random target number between 1 and 10
      const targetNumber = Math.floor(Math.random() * 40) + 1.01;

      // Create a PIXI.Text object
      const text = new PIXI.Text('0', { fontSize: 36, fill: 0x000000 });
      text.anchor.set(0.5);
      text.position.set(app.screen.width / 2, app.screen.height / 2);

      // Add the text to the stage
      app.stage.addChild(text);

      // Calculate step value for the animation
      const stepValue = targetNumber / 60; // Assuming 60 frames per second

      // Animation loop
      app.ticker.add(() => {
        if (parseFloat(text.text) < targetNumber) {
          text.text = (parseFloat(text.text) + stepValue).toFixed(2);

          // Change text color based on whether the current value is above or below the target
          text.style.fill = parseFloat(text.text) > this.inputNumber ? 0x00FF00 : 0xFF0000;
        } else {
          text.text = targetNumber.toFixed(2);
        
          app.ticker.stop();
        }
      });
    },
  },
  
};
</script>

<style>
#pixiContainer {
  width: 400px;
  height: 200px;
  margin: auto;
  border: 1px solid #ccc;
}
</style>
