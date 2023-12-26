<template>
  <div class="px-[40px] flex flex-col py-2 gap-4" >

    <div class="p-[16px] pt-0 pl-0 w-full py-1 bg-tertiary rounded-lg flex flex-col gap-">
      <div class="flex pt-0 w-full">
        <div class="flex-col   px-2 rounded-t-lg rounded-r-none bg-secondary py-3 min-w-fit">
          <div class="bg-tertiary flex w rounded-full p-[3px]">
  
        <button class="  bg-primary rounded-full py-[10px] text-white px-[20px] ">
          手动投注
        </button>
        <button class="rounded-full py-[10px] text-white px-[20px] ">
          自动投注
        </button>
      </div>
      <div class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          投注额
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
      </div>
      <div class="flex mt-2 w-full border-[#2F4553] rounded-md bg-tertiary border-[3px]">
      <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
      <button class="text-white text-[14px] px-[16px] bg-[#2F4553]">½</button>
      <div class="h-[20px] w-[2px] bg-tertiary"></div>
      <button class="text-white text-[14px] px-[16px] bg-[#2F4553]">2x</button>
      </div>
      <div class="flex mt-2 px-2 items-center justify-between">
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          投注额
        </p>
        <p class="text-[12px] text-[#B1BAD3] font-[600]">
          US$0.00
        </p>
      </div>
      <div class="flex mt-2 w-full bg-[#2F4553] rounded-md ">
      <input type="text" class="bg-transparent h-[40px] flex-1 focus:outline-none text-white" >
      
      <img src="../assets/icons/bitcoin.svg" alt="" class="p-2">
      </div>
      
      <button type="text" class="flex justify-center items-center mt-2 w-full bg-[#00E701] rounded-md h-[40px] text-tertiary flex-1 " @click="startAnimation">
        投注
      </button>
      
      
  

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
          <div ref="pixiContainer" class="h-[200px] flex items-center justify-center">
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
        <button class="rounded-full py-[10px] text-white px-[20px] ">
          我的投注
        </button>
        <button class="rounded-full py-[10px] text-white px-[20px] ">
          所有投注
        </button>
        <button class=" bg-primary rounded-full py-[10px] text-white px-[20px] ">
          风云榜
        </button>
        <button class="rounded-full py-[10px] text-white px-[20px] ">
          竞赛排行榜
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
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  data() {
    return {
      app:null,
      inputNumber: 1.01, // Initialize with an empty string or any default value
    };
  },
  methods: {
    startAnimation() {
      if (this.app) {
        this.app.destroy(); // Destroy the existing PIXI.Application and release its WebGL context
      }
      this.initializePixi();
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
        backgroundColor: 0x0F212E, // Transparent background
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
