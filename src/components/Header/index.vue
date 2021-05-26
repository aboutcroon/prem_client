<template>
  <div class="header">
    <section class="flex-y flex-between" style="height: 60px; background: #24292E;">
      <div class="flex-y">
        <div class="icon flex-center">
          <img src="../../assets/images/icon-white.png" alt="icon" style="height: 45px;">
          <span style="color: #fff; font-size: 20px;">Prem</span>
        </div>
        <div class="item flex-center">
          Overview
        </div>
        <div class="item flex-center">
          Question
        </div>
        <div class="item flex-center">
          Share
        </div>
        <div class="item flex-center">
          Discussion
        </div>
        <div class="item flex-center">
          Advice
        </div>
        <div class="item flex-center">
          Notice
        </div>
        <div class="item flex-center">
          Moments
        </div>
      </div>
      <div class="flex-y" style="margin-right: 20px;">
        <div class="item flex-center">
          Login
        </div>
        <div class="item flex-center">
          Sign Up
        </div>
      </div>
    </section>
    <section class="flex-y" style="height: 36px; background: #3b3b3b;">
      <div class="item flex-center">
        My Posts
      </div>
      <div class="item flex-center">
        My Favs
      </div>
      <a-input placeholder="Search" style="width: 180px; height: 25px; margin-left: 23px;"></a-input>
      <div class="item flex-center" style="background: #8d2929;">
        New Post
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {

  .icon {
    width: 115px;
    height: 50px;
    margin-left: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: background .5s;
    transition: box-shadow .3s;

    &:hover {
      background: #3b3b3b;
      box-shadow: 0 5px 10px #474646;
    }
  }

  .item {
    width: 80px;
    height: 30px;
    margin-left: 15px;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    transition: background .5s;
    transition: box-shadow .3s;

    &:hover {
      background: #3b3b3b;
      box-shadow: 0 5px 5px #474646;
      // background: #8d2929;
    }
  }
}
</style>
