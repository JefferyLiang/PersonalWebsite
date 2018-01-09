<template>
  <div class="index-main">
    <div class="carousel-container">
      <carousel v-model="carouselIdx" class="carousel" :dots="'inside'" :radius-dot="false" :arrow="'never'" :height="'auto'">
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
    <div class="skills-segement-container">
      <div class="container-title">
        <span>Website</span>
      </div>
      <div class="skills-container">
        <div class="mongoDB item">
          <span class="title">数据库</span>
          <v-icon name="mongoDb" :scale="8"></v-icon>
          <div class="description">
            <span>MongoDb数据库。非关系型数据库，方便数据模型的更新，在koa或者express中配合mongoose使用。</span>
          </div>
        </div>
        <div class="node-js item">
          <span class="title">服务端</span>
          <Icon type="social-nodejs"></Icon>
          <div class="description">
            <span>使用NodeJS的应用框架，如：koa、express等搭建网站的后台应用程序。实现必须要的API，提供数据到页面之中。</span>
          </div>
        </div>
        <div class="vue-js item">
          <span class="title">网页前端</span>
          <v-icon name="vuejs" :scale="8"></v-icon>
          <div class="description">
            <span>使用Vue.js前端框架搭建SPA网页前端应用。</span>
          </div>
        </div>
      </div>
    </div>
    <div class="server-segement-container">
      <div class="container-title">
        <span>Server</span>
      </div>
      <div class="server-container">
        <div class="docker item">
          <span class="title">Docker</span>
          <v-icon name="docker" :scale="8"></v-icon>
          <div class="description">
            <span>在服务器中使用Docker把不同的应用运行的环境分离，使用docker的特性，让应用能做到一键启动，稳定运行。</span>
          </div>
        </div>
        <div class="nginx item">
          <span class="title">Nginx</span>
          <v-icon name="nginx" :scale="8"></v-icon>
          <div class="description">
            <span>服务后台运行多端口，用Nginx监听主端口并转发，完成多端口负载均衡。</span>
          </div>
        </div>
      </div>
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
  top: 0;
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
  margin-top: 30%;
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
.skills-segement-container, .server-segement-container{
  margin: {
    top: 30px;
    bottom: 30px;
  }
  padding: {
    top: 30px;
    bottom: 30px
  }
  position: relative;
  @include flex(column);
  .container-title{
    @include CormorantUpright();
    text-align: center;
    font-size: 2.5rem;
    line-height: 1.5;
    margin-bottom: .5rem;
    > span {
      position: relative;
      &:after{
        position: absolute;
        content: "";
        width: 100%;
        height: 1.5px;
        background: rgba(0,0,0, .25);
        bottom: -1px;
        left: 0px;
      }
    }
    
  }
}
.server-segement-container{
  background-color: $mainGary;
  &:before{
    @include arrow();
    top: -30px;
    background: white;
  }
  &:after{
    @include arrow();
    bottom: -20px;
    background: $mainGary;
  }
}
.skills-container, .server-container{
  @media (max-width: 768px) {
    @include flex(column);
    justify-content: center;
  }
  @include flex(row);
  margin: {
    left: 5%;
    right: 5%;
  }
  justify-content: space-around;
  .ivu-icon{
    font-size: 5rem;
  }
  .item{
    position: relative;
    @media (max-width: 768px) {
    margin: {
      top: 20px;
      bottom: 20px;
    }
    &:after{
      position: absolute;
      content: "";
      height: 1px;
      width: 200px;
      max-width: 250px;
      background: rgba(0, 0, 0, .25);
      bottom: -20px;
      left: calc(50% - 100px);
    }
  }
    @include flex(column);
    align-items: center;
    .title{
      font-size: 1.5rem;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .description{
      margin-top: 10px;
      line-height: 1.5;
      width: 100%;
      max-width: 225px;
      font-size: .85rem;
      text-indent: 2em;
    }
  }
}
</style>
