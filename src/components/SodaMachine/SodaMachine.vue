<template lang="pug">
.soda-machine-container(@click="play")
  SodaMachinePanel
  SodaMachineCup
</template>

<script>
import Sound from "@/common/sound";
import MachineNoise from "@/assets/sounds/machine_noise.wav";
import SodaMachinePanel from "./SodaMachinePanel";
import SodaMachineCup from "./SodaMachineCup";

export default {
  components: {
    SodaMachinePanel,
    SodaMachineCup
  },

  data() {
    return {
      noise: null
    };
  },

  methods: {
    play() {
      if (!this.noise) {
        this.noise = Sound.play(MachineNoise);
        this.noise.loop = true;
      }
    },
    stop() {
      if (this.noise) {
        this.noise.pause();
      }
    }
  },

  beforeDestroy() {
    this.stop();
  }
};
</script>

<style lang="scss" scoped>
.soda-machine-container {
  width: 600px;
  position: relative;
  background-image: url("~@/assets/images/machine.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &:after {
    content: "";
    padding-top: 148%;
    display: block;
  }
}
</style>