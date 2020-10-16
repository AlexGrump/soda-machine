<template lang="pug">
div(
  v-on="$listeners"
  @mousedown="click"
  @mouseup="clack"
)
  slot
</template>

<script>
import Sound from "@/common/sound";
import SoundClick from "@/assets/sounds/click.wav";
import SoundClack from "@/assets/sounds/clack.wav";

export default {
  methods: {
    click() {
      Sound.play(SoundClick);
    },
    clack() {
      Sound.play(SoundClack);
    },
  },
};
</script>
