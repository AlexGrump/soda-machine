<template lang="pug">
.soda-machine-screen
  .message
    template(v-if="error") 
      .title Error
      | {{ error }}
    template(v-else-if="isDone")
      .title Done!
      | Take your drink
    template(v-else-if="isBusy") 
      .title W-w-h-h...
      | The drink is pouring
    template(v-else)
      .title Hello!
      | Select drink
  .highlight(:class="state")
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("sodaMachine", ["isDone", "isBusy"]),
    ...mapState("sodaMachine", ["error"]),

    state() {
      switch (true) {
        case !!this.error:
          return "error";
        case this.isDone:
          return "success";
        default:
          return "default";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.soda-machine-screen {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight {
  position: absolute;
  top: -10px;
  left: -10px;
  bottom: -10px;
  right: -10px;
  background: #87a1c2;
  mix-blend-mode: overlay;
  filter: blur(5px);

  &.error {
    background: #ff002b;
  }

  &.success {
    background: #0091ff;
  }
}

.message {
  color: #fff;
  text-shadow: 0 0 10px #eee;
  text-align: center;
  padding: 0 10px;
  font-size: 10px;

  & .title {
    font-size: 13px;
    margin-bottom: 10px;
  }
}
</style>