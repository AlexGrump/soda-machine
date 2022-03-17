<template lang="pug">
.hall-room
  .ender
  .floor
  .window
  soda-machine.machine
  balance
</template>

<script>
import Balance from "@/components/Balance.vue";
import SodaMachine from "@/components/SodaMachine/SodaMachine.vue";

export default {
  name: "Hall",
  components: {
    Balance,
    SodaMachine
  }
};
</script>

<style lang="scss" scoped>
.hall-room {
  background: #242234;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.machine {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -50%);
}

.floor {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 50%;
  background: linear-gradient(#15131e, #000000);
  transform: translate(0%, 380px);

  &:after {
    content: "";
    display: block;
    height: 100px;
    width: 100%;
    background: #1d1b29;
  }
}

.window {
  // Position elements by screen center
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(22%, -65%);

  width: 500px;
  background-image: url("~@/assets/images/night_city.gif");
  background-size: 80% auto;
  background-position: center center;
  background-repeat: no-repeat;

  &:after {
    content: "";
    padding-top: 107%;
    display: block;
    background-image: url("~@/assets/images/frame.png");
    background-size: cover;
    background-position: center center;
  }
}
</style>
