<template>
  <div>
    <div ref="pixiContainer"></div>
    <button @click="startAnimation">Start Animation</button>
    <input v-model="inputNumber" type="number" />
    <p>{{ inputNumber }}</p>
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
        backgroundColor: 0x00000000, // Transparent background
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
