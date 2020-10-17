<template lang="pug">
.soda-machine-cup(
  @click="drinking",
  :class="{ full: cupIsFull }",
  :style="{ '--drink-color': drinkColor, '--drink-opacity': drinkOpacity }"
)
  .stripe
  svg.content(xmlns="http://www.w3.org/2000/svg")
    clipPath#water
      path(d="M6 25 L65 25 L 55 110 L 40 112 L 26 112 L 14 110 Z")
    g(clip-path="url(#water)")
      rect(x="0", y="0", width="400", height="115", fill="#f00")

  .glass
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("sodaMachine", ["drink"]),
    ...mapState("sodaMachine", ["cupIsFull", "inProgress"]),
    drinkColor() {
      return this.drink ? this.drink.drinkColor : null;
    },
    drinkOpacity() {
      return this.drink ? this.drink.drinkOpacity : null;
    }
  },
  methods: {
    ...mapActions("sodaMachine", ["drinking"])
  }
};
</script>

<style lang="scss" scoped>
.soda-machine-cup {
  position: absolute;
  top: 495px;
  left: 175px;
  height: 120px;
  width: 70px;

  &.full {
    cursor: pointer;
  }

  & .glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/images/cup.png");
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  & .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    & rect {
      fill: var(--drink-color);
      opacity: var(--drink-opacity);
      transform: translateY(100%);
      transition: transform 0s ease-out;
    }
  }

  &.full .content rect {
    transform: translateY(0%);
    transition: transform 6s ease-out;
  }
}
</style>