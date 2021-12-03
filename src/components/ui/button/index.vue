<template>
  <div class="ui-button flexCenter" :style="style"><slot></slot></div>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    height: [String, Number]
  },
  computed: {
    style() {
      const style = {}
      if(this.height) {
        style.height = this.height + 'rem'
      }
      return style
    }
  }
}
</script>

<style scoped lang='less'>
.ui-button {
  height: 1rem;
  background: #2C3145;
  border-radius: .08rem;
  color: #fff;
  font-size: .32rem;
  display: flex;
  align-items: center;
}
</style>