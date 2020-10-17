<template lang="pug">
SodaMachineButton.button(
  @click="selectDrink(drink.id)",
  :class="{ active: drink.active }",
  :style="{ '--brand': drink.brandColor }"
) 
  .label {{ drink.name }}
  .price {{ drink.cost | currency }}
</template>

<script>
import SodaMachineButton from "./SodaMachineButton";
import { mapActions } from "vuex";

export default {
  components: {
    SodaMachineButton
  },

  props: {
    drink: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions("sodaMachine", ["selectDrink"])
  }
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    filter: contrast(100%) brightness(100%);
    box-shadow: 0 0 0 transparent;
    text-shadow: 0 0 0 transparent;
  }
  to {
    filter: contrast(150%) brightness(140%);
    box-shadow: 0 0 var(--ligth) var(--brand);
    text-shadow: 0 0 30px white;
  }
}

.button {
  --ligth: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-family: inherit;
  width: 100%;
  cursor: pointer;
  background: var(--brand);
  color: white;
  padding: 10px 15px;
  transition: all 130ms;
  user-select: none;
  font-size: 8px;
  line-height: 1;

  & + & {
    margin-top: 10px;
  }

  &.active {
    animation: 1s pulse ease-in-out infinite alternate;
  }

  &:active {
    transform: translateY(1px);
  }

  &.active:active {
    --ligth: 20px;
  }

  & .label {
    font-size: 1.2em;
  }

  & .price {
    margin-top: 5px;
  }
}
</style>
