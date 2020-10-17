<template lang="pug">
.soda-machine-container
  SodaMachinePanel
  SodaMachineCup
</template>

<script>
import SodaMachinePanel from "./SodaMachinePanel";
import SodaMachineCup from "./SodaMachineCup";

export default {
  components: {
    SodaMachinePanel,
    SodaMachineCup
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