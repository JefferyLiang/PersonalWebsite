<template>
  <div class="top-menu">
    <div class="menu-container">
      <div class="container-item" :key="index" v-for="(item, index) of items">
        <span class="item-tips">{{ item.tips }}</span>
        <button class="item-btn" @click="clickItem(item)">{{ item.name }}</button>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
          name: 'Main',
          tips: '主页'
        },{
          name: 'Ability',
          tips: '技术'
        },{
          name: 'Hobby',
          tips: '兴趣'
        }
      ]
    }
  },
  methods: {
    clickItem (item) {
      this.$emit('click-item', item.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/css/mixin.scss';
.top-menu{
  font-size: 1.25rem;
  width: 100%;
  padding: 10px;
}
.menu-container{
  @include flex(row);
  justify-content: center;
}
.container-item{
  position: relative;
  margin: {
    top: 10px;
    left: 5px;
    right: 5px;
  }
  @include flex(row);
  justify-content: center;
  &:hover{
    .item-tips{
      top: -10px;
      opacity: 1;
    }
    .item-btn{
      &:after{
        bottom: 3px;
        opacity: 1;
      }
    }
  }
  .item-tips{
    position: absolute;
    width: 100%;
    font-size: .8rem;
    top: -15px;
    opacity: 0;
    left: 0px;
    text-align: center;
    transition: all .2s ease;
  }
  .item-btn{
    @include CormorantUpright();
    position: relative;
    background-color: transparent;
    font-weight: bold;
    border: none;
    font-size: 1.2rem;
    padding: 3px 10px;
    cursor: pointer;
    &:after{
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 1px;
      left: 0px;
      background-color: rgba(0,0,0, .25);
      opacity: 0;
      bottom: -2px;
      transition: all .2s ease;
    }
    &:focus{
      outline: none;
    }
  }
}
</style>
