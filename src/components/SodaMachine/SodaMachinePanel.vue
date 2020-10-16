<template lang="pug">
.soda-machine-panel
  div
    SodaMachineDrinkButton(
      v-for="(drink, index) in drinks" 
      :key="drink.id" 
      :drink="drink"
      :index="index"
    )
  div
    SodaMachineSizeButton(
      v-for="(size, index) in sizes" 
      :key="size.id" 
      :size="size"
      :index="index"
    )
</template>

<script>
import SodaMachineDrinkButton from "./SodaMachineDrinkButton";
import SodaMachineSizeButton from "./SodaMachineSizeButton";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    SodaMachineDrinkButton,
    SodaMachineSizeButton,
  },

  computed: {
    ...mapGetters("sodaMachine", ["drink", "size", "drinks", "sizes"]),
  },

  methods: {
    ...mapActions("sodaMachine", ["selectDrink", "selectSize"]),
  },
};
</script>
