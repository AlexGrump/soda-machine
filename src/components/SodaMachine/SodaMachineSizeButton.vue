<template lang="pug">
  SodaMachineButton(
    @click="selectSize(index)"
    :class="{ active: size.active }"
  ) {{ size.name }}
</template>

<script>
import SodaMachineButton from "./SodaMachineButton";
import { mapActions } from "vuex";

export default {
  components: {
    SodaMachineButton,
  },

  props: {
    size: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  methods: {
    ...mapActions("sodaMachine", ["selectSize"]),
  },
};
</script>
