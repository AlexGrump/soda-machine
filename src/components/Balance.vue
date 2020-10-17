<template lang="pug">
.balance 
  .label Balance
  .value {{ balance | currency }}
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("sodaMachine", ["balance"])
  }
};
</script>

<style lang="scss" scoped>
.balance {
  text-align: right;
  padding: 15px 20px;
  background: rgba(black, 0.5);
  color: white;
  position: fixed;
  top: 30px;
  right: 30px;

  & .label {
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 10px;
  }
}
</style>