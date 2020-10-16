<template lang="pug">
  SodaMachineButton.button(
    @click="selectDrink(index)"
    :class="{ active: drink.active }"
    :style="{ '--brand': drink.brandColor }"
  ) 
    .label {{ drink.name }}
    .price {{ drink.price | price }}
</template>

<script>
import SodaMachineButton from "./SodaMachineButton";
import { mapActions } from "vuex";

export default {
  components: {
    SodaMachineButton,
  },

  props: {
    drink: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  filters: {
    price(value) {
      return `$${value.toFixed(2)}`;
    },
  },

  methods: {
    ...mapActions("sodaMachine", ["selectDrink"]),
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-family: inherit;
  width: 300px;
  height: 80px;
  cursor: pointer;
  background: var(--brand);
  color: white;
  padding: 0 30px;
  transition: all 130ms;
  border-radius: 6px;
  user-select: none;

  & + & {
    margin-top: 10px;
  }

  &.active {
    filter: contrast(150%) brightness(140%);
    box-shadow: 0 0 40px var(--brand);
    text-shadow: 0 0 30px white;
  }

  &.active:active {
    box-shadow: 0 0 10px var(--brand);
  }

  & .label {
    font-size: 1.2rem;
  }

  & .price {
    margin-top: 10px;
  }
}
</style>
