<template>
  <div>
    <img
      src="https://assets.manchester.ac.uk/logos/hi-res/TAB_UNI_MAIN_logo/White_backgrounds/TAB_col_white_background.png"
      alt="logo"
      width="100"
    />
  </div>
</template>

<script>
export default {
  props: { mapObject: Object },

  mounted() {
    console.info("Logo.vue::mounted()");
    console.info("this.mapObject: ", this.mapObject);
    this.mapObject?.view.ui.add(this.$el, "bottom-right");
  },
};
</script>
