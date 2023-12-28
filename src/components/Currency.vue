<template>
<div class="flex w-full lg:w-[1200px] items-center justify-between">

  <div class="h-[40px]">
    <LiteCoinIcon/>
  </div>
  <div class="h-[40px]">
    <BitcoinIcon/>
  </div>
  <div class="h-[40px]">
    <EthereumIcon/>
  </div>
 <div class="h-[40px]">
    <TronIcon/>
  </div>
   <div class="h-[40px]">
    <RippleIcon/>
  </div>
  <div class="h-[40px]">
    <BitcoinCashIcon/>
  </div>
  
 
</div>
<div class="flex items-center justify-between">
  <div class="h-[40px]">
    <TetherIcon/>
  </div>
  <div class="h-[40px]">
<SafeGambleIcon/>
  </div>
  <div class="h-[40px]">
    <EighteenPlusIcon/>
  </div>
  <div class="h-[40px]">
    
  </div>
</div>
</template>

<script>
import LiteCoinIcon from "../assets/icons/litecoin.svg"
import EthereumIcon from "../assets/icons/ethereum.svg"
import BitcoinIcon from "../assets/icons/bitcoinicon.svg"
import TronIcon from "../assets/icons/tron.svg"
import RippleIcon from "../assets/icons/ripple.svg"
import BitcoinCashIcon from "../assets/icons/bitcoin-cash.svg"
import TetherIcon from "../assets/icons/tether.svg"
import SafeGambleIcon from "../assets/icons/safe-gamble.svg"
import EighteenPlusIcon from "../assets/icons/18plus.svg"
import OpenIcon from "../assets/icons/open.svg"

export default{
  name: "CurrencyComponent",
  components: {
    LiteCoinIcon,
    EthereumIcon,
    BitcoinIcon,
    TronIcon,
    RippleIcon,
    BitcoinCashIcon,
    TetherIcon,
    SafeGambleIcon,
    EighteenPlusIcon
  }
}

</script>