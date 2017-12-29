<template>
  <div class="root-page">
    <Menu @click-item="(item) => log(item)"></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/topMenu'
export default {
  components: {
    Menu
  },
  methods: {
    log (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/css/mixin.scss';
.root-page{
  min-height: 100vh;
}
</style>
