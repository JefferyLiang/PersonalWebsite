<template>
  <div class="index-main">
    <div class="carousel-container">
      <carousel v-model="carouselIdx" class="carousel" :dots="'inside'" :radius-dot="false" :arrow="'never'" :height="500">
        <carousel-item v-for="(item, index) of carousel" :key="index">
          <div class="item-container">
            <div class="bg-image-container">
              <img :src="item.img">
            </div>
            <div class="item-message">
              <span class="title">{{ item.title }}</span>
              <span class="message-detial">
                {{ item.name }}
              </span>
            </div>
          </div>
        </carousel-item>
      </carousel>
    </div>
    <div class="article-segement-container">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carouselIdx: 0,
      carousel: [{
        title: '测试的标题',
        name: '1234',
        img: '/static/img/carousel/HYRNRUZTNY.jpg'
      }, {
        title: '测试标题2',
        name: '3456',
        img: '/static/img/carousel/52LHZAYJRB.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/css/mixin.scss';
.index-main{
  @include flex(column);
  .carousel-container{
    padding: {
      left: 40px;
      right: 40px;
    }
  }
}
.carousel{
  // height: 250px;
  .item-container{
    @include flex(row);
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $gary;
  }
}
.bg-image-container{
  position: absolute;
  min-height: 100%;
  z-index: 1;
  top: calc(50% - 250px);
  width: 100%;
  filter: blur(2px);
  > img {
    position: relative;
    width: 100%;
  }
}
.item-message{
  @include flex(column);
  position: relative;
  z-index: 2;
  align-self: flex-end;
  width: 100%;
  color: rgba(255, 255, 255, .6);
  background-color: rgba(0,0,0, .5);
  padding: {
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 20px;
  }
  .title{
    color: white;
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  .message-detial{
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    .message-detial{
      width: 100%;
    }
  }
  @media (min-width: 900px) {
    .message-detial {
      width: 80%;
    }
  }
}
</style>
