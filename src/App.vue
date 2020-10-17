<template lang="pug">
#app
  .canvas(:style="canvasStyle")
    router-view
</template>

<script>
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 1024;
const CANVAS_SPACING = 20;
const MAX_SCALE = 1.5;

export default {
  data() {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  },
  created() {
    window.addEventListener("resize", this.windowResizeListener);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowResizeListener);
  },
  methods: {
    windowResizeListener() {
      this.viewport.width = window.innerWidth;
      this.viewport.height = window.innerHeight;
    }
  },
  computed: {
    canvasStyle() {
      return {
        transform: `scale(${this.canvasScale})`,
        width: this.canvasWidth + "px",
        height: this.canvasHeight + "px"
      };
    },
    canvasWidth() {
      return CANVAS_WIDTH;
    },
    canvasHeight() {
      return CANVAS_HEIGHT;
    },
    canvasScale() {
      const widthProportion =
        this.viewport.width / (CANVAS_WIDTH + CANVAS_SPACING * 2);
      const heightProportion =
        this.viewport.height / (CANVAS_HEIGHT + CANVAS_SPACING * 2);

      const minProportion = Math.min(widthProportion, heightProportion);

      return minProportion > MAX_SCALE ? MAX_SCALE : minProportion;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.canvas {
  overflow: hidden;
  background: #000;
  flex-shrink: 0;
}
</style>
