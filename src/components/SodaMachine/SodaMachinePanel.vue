<template lang="pug">
.soda-machine-panel
  SodaMachineScreen
  SodaMachineDrinksPanel
</template>

<script>
import SodaMachineScreen from "./SodaMachineScreen";
import SodaMachineDrinksPanel from "./SodaMachineDrinksPanel";

export default {
  components: {
    SodaMachineScreen,
    SodaMachineDrinksPanel
  }
};
</script>

<style lang="scss" scoped>
.soda-machine-panel {
  position: absolute;
  top: 13.6%;
  left: 63%;
  width: 30%;
}
</style>