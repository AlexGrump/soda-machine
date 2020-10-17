<template lang="pug">
.soda-machine-drinks-panel
  SodaMachineDrinkButton(
    v-for="(drink, index) in drinks",
    :key="drink.id",
    :drink="drink"
  )
</template>

<script>
import SodaMachineDrinkButton from "./SodaMachineDrinkButton";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    SodaMachineDrinkButton
  },

  computed: {
    ...mapGetters("sodaMachine", ["drink", "size", "drinks", "sizes"])
  },

  methods: {
    ...mapActions("sodaMachine", ["selectDrink", "selectSize"])
  }
};
</script>

<style lang="scss" scoped>
.soda-machine-drinks-panel {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 220px;
}
</style>